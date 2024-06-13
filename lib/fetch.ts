'use server'

/** Fetches a JSON file from the public directory */
export const fetch_json = async <T>(route: string): Promise<T> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/${route}`,
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch ${route}`)
  }

  return (await response.json()) as Promise<T>
}
