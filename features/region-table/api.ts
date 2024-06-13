import { fetch_json } from '@/lib/fetch'
import { CoverCropResponse, GreenhouseGasResponse, RegionResponse } from '@/types'

const COVER_CROP_FILE = '/cover_crop.json'
const REGION_FILE = '/regions.json'
const GHG_FILE = '/ghg.json'

/** Fetches the cover crop data from the public folder and returns a map*/
export const fetch_cover_crops = async (): Promise<CoverCropResponse> =>
  fetch_json<CoverCropResponse>(COVER_CROP_FILE)

/** Fetches the region data from the public folder and returns raw data */
export const fetch_regions = async (): Promise<RegionResponse> =>
  fetch_json<RegionResponse>(REGION_FILE)

/** Fetches the greenhouse gas data from the public folder and returns a map */
export const fetch_ghg = async (): Promise<GreenhouseGasResponse> =>
  fetch_json<GreenhouseGasResponse>(GHG_FILE)
