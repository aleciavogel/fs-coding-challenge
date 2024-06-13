import {
  CoverCropData,
  CoverCropResponse,
  GreenhouseGasData,
  GreenhouseGasResponse,
  RegionResponse,
  TableData,
} from '@/types'
import { calculate_adoption, calculate_emissions } from '@/lib/calculations'

interface CompileDataArgs {
  regions: RegionResponse
  cover_crops: CoverCropResponse
  ghg: GreenhouseGasResponse
}

export const generate_cover_crop_map = ({
  data,
}: CoverCropResponse): Map<number, CoverCropData> => {
  const map = new Map<number, CoverCropData>()
  data.forEach(([region_id, cover_crop_acres]) => {
    map.set(region_id, { region_id, cover_crop_acres })
  })
  return map
}

export const generate_emissions_map = ({
  data,
}: GreenhouseGasResponse): Map<number, GreenhouseGasData> => {
  const map = new Map<number, GreenhouseGasData>()
  data.forEach(([region_id, ghg_kg]) => {
    map.set(region_id, { region_id, ghg_kg })
  })
  return map
}

export const compile_table_data = ({ regions, cover_crops, ghg }: CompileDataArgs): TableData => {
  const cover_crops_map = generate_cover_crop_map(cover_crops)
  const emissions_map = generate_emissions_map(ghg)
  const { data: regions_data } = regions

  return regions_data.map(([region_id, region_name, total_field_acreage]) => {
    const region_cover_crop = cover_crops_map.get(region_id)
    const region_emissions = emissions_map.get(region_id)

    const cover_crop_adoption = calculate_adoption(
      region_cover_crop?.cover_crop_acres ?? 0,
      total_field_acreage,
    )
    const ghg_ton_per_acre = calculate_emissions(region_emissions?.ghg_kg || 0, total_field_acreage)

    return {
      region_id,
      region_name,
      cover_crop_adoption,
      ghg_ton_per_acre,
    }
  })
}
