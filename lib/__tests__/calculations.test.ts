import '@testing-library/jest-dom'
import { calculate_adoption, calculate_emissions, convert_kg_to_metric_ton } from '../calculations'

describe('convert_kg_to_metric_ton', () => {
  it('converts 1000 kg to 1 metric ton', () => {
    expect(convert_kg_to_metric_ton(1000)).toEqual(1)
  })
})

describe('calculate_adoption', () => {
  it('calculates 50% adoption', () => {
    expect(calculate_adoption(50, 100)).toEqual(50)
  })

  it('calculates 100% adoption', () => {
    expect(calculate_adoption(100, 100)).toEqual(100)
  })

  it('calculates 0% adoption', () => {
    expect(calculate_adoption(0, 100)).toEqual(0)
  })

  it('returns undefined when total_field_acreage is null', () => {
    expect(calculate_adoption(100, null)).toBeUndefined()
  })
})

describe('calculate_emissions', () => {
  it('calculates 1 metric ton of emissions per acre', () => {
    expect(calculate_emissions(1000, 1)).toEqual(1)
  })

  it('returns undefined when total_field_acreage is null', () => {
    expect(calculate_emissions(1000, null)).toBeUndefined()
  })
})
