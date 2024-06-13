import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Combines classnames */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Fetches a JSON file from the public directory */
export const fetch_json = async <T>(path: string): Promise<T> => {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}`)
  }

  return (await response.json()) as Promise<T>
}
