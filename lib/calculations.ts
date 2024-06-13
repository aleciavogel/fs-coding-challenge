/** Conversion factor from kg to metric ton */
export const KG_TO_METRIC_TON = 0.001

/** Convert kg to metric ton */
export const convert_kg_to_metric_ton = (kg: number) => kg * KG_TO_METRIC_TON

/** Calculate cover crop adoption percentage */
export const calculate_adoption = (
  cover_crop_acres: number,
  total_field_acreage: null | number,
) => {
  const missing_total_acreage = total_field_acreage === null

  if (missing_total_acreage) return undefined // Allows us to filter out rows with missing data

  const proportion = cover_crop_acres / total_field_acreage
  return proportion * 100
}

/** Calculate greenhouse gas emissions per acre */
export const calculate_emissions = (ghg_kg: number, total_field_acreage: number | null) => {
  const missing_total_acreage = total_field_acreage === null

  if (missing_total_acreage) return undefined // Allows us to filter out rows with missing data

  const ghg_ton = convert_kg_to_metric_ton(ghg_kg)
  return ghg_ton / total_field_acreage
}
