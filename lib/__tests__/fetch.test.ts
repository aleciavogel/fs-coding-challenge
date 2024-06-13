import '@testing-library/jest-dom'
import { fetch_json } from '../fetch'

// This is the section where we mock `fetch`
const unmockedFetch = global.fetch

describe('fetch_json', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Hello, World!' }),
      }),
    ) as jest.Mock
  })

  afterAll(() => {
    global.fetch = unmockedFetch
  })

  it('fetches a JSON file from the public directory', async () => {
    const data = await fetch_json<{ message: string }>('test.json')
    expect(data.message).toEqual('Hello, World!')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/test.json')
  })

  it('throws an error when the response is not ok', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    ) as jest.Mock

    await expect(fetch_json('test.json')).rejects.toThrow('Failed to fetch test.json')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/test.json')
  })
})
