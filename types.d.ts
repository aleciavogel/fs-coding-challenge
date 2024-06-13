export interface RegionResponse {
  data: [number, string, number][]
}

export interface CoverCropResponse {
  data: [number, number][]
}

export interface GreenhouseGasResponse {
  data: [number, number][]
}

interface RegionId {
  /** id of the region */
  region_id: number
  /** name of the region */
  region_name: string
}

export interface RegionData extends RegionId {
  /** total acreage of agricultural land in the region */
  total_field_acreage: number
}

export interface CoverCropData {
  /** id of the region */
  region_id: number
  /** the number of acres in the region that had cover crops planted in the most recent year. */
  cover_crop_acres: number
}

export interface GreenhouseGasData {
  /** id of the region */
  region_id: number
  /** kg of greenhouse gasses produced from agriculture in the associated region */
  ghg_kg: number
}

/** Response from the API */
export interface RowData extends RegionId {
  /** cover_crop_acres / total_field_acreage */
  cover_crop_adoption: number
  /** (ghg_kg * 0.001) / total_field_acreage */
  ghg_ton_per_acre: number
}

/** Table data, indexed by region id */
export type TableData = RowData[]
