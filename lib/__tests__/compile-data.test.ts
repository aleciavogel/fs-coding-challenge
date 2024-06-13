import '@testing-library/jest-dom'
import {
  compile_table_data,
  generate_emissions_map,
  generate_cover_crop_map,
} from '../compile-data'

const EMISSIONS_DATA = [
  [1, 1000],
  [2, 2000],
]

const COVER_CROP_DATA = [
  [1, 100],
  [2, 200],
]

describe('generate_cover_crop_map', () => {
  it('generates a map with region_id and cover_crop_acres', () => {
    const cover_crops = generate_cover_crop_map({ data: COVER_CROP_DATA })
    expect(cover_crops.get(1)).toEqual({ region_id: 1, cover_crop_acres: 100 })
    expect(cover_crops.get(2)).toEqual({ region_id: 2, cover_crop_acres: 200 })
  })
})

describe('generate_emissions_map', () => {
  it('generates a map with region_id and ghg_kg', () => {
    const emissions = generate_emissions_map({ data: EMISSIONS_DATA })
    expect(emissions.get(1)).toEqual({ region_id: 1, ghg_kg: 1000 })
    expect(emissions.get(2)).toEqual({ region_id: 2, ghg_kg: 2000 })
  })
})

describe('compile_table_data', () => {
  it('compiles table data', () => {
    const regions = {
      data: [
        [1, 'Region 1', 100],
        [2, 'Region 2', 200],
      ],
    }
    const cover_crops = {
      data: COVER_CROP_DATA,
    }
    const ghg = {
      data: EMISSIONS_DATA,
    }
    const table_data = compile_table_data({ regions, cover_crops, ghg })
    expect(table_data).toEqual([
      {
        region_id: 1,
        region_name: 'Region 1',
        cover_crop_adoption: 100,
        ghg_ton_per_acre: 0.01,
      },
      {
        region_id: 2,
        region_name: 'Region 2',
        cover_crop_adoption: 100,
        ghg_ton_per_acre: 0.01,
      },
    ])
  })
})
