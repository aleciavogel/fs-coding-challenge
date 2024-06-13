import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Combines classnames */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
