import { solve } from './ctci-01-09'

const isSubstring = (a: string, b: string) => a.includes(b)

describe('solve', () => {
  it('returns true when b is a rotation of a', () => {
    const a = 'waterbottle'
    const b = 'terbottlewa'
    expect(solve(a, b, isSubstring)).toBe(true)
  })

  it('returns false when b is not a rotation of a', () => {
    const a = 'waterbottle'
    const b = 'terbottlewe'
    expect(solve(a, b, isSubstring)).toBe(false)
  })

  it('only calls isSubstring once', () => {
    const a = 'waterbottle'
    const b = 'terbottlewa'
    const mock = jest.fn(isSubstring)
    expect(solve(a, b, mock)).toBe(true)
    expect(mock).toHaveBeenCalledTimes(1)
  })
})
