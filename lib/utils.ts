import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Combines classnames */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Converts a response array to a map and indexes via the region_id */
export const convert_response_to_map = <T extends { region_id: number }>(
  response: T[],
): Map<number, T> => {
  const map = new Map<number, T>()
  response.forEach((item) => map.set(item.region_id, item))
  return map
}
