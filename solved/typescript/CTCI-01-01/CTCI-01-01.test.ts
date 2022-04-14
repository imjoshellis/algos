import { isUnique } from './CTCI-01-01'

describe('isUnique', () => {
  it('accepts string input', () => {
    isUnique('hi')
  })

  it('returns true for unique strings', () => {
    expect(isUnique('hi')).toBe(true)
    expect(isUnique('xai')).toBe(true)
    expect(isUnique('xaizweo')).toBe(true)
  })

  it('returns false for non-unique strings', () => {
    expect(isUnique('hii')).toBe(false)
    expect(isUnique('xxai')).toBe(false)
    expect(isUnique('xaizxweo')).toBe(false)
  })

  it('handles uppercase and special characters', () => {
    expect(isUnique('hIi')).toBe(true)
    expect(isUnique('hIi2')).toBe(true)
    expect(isUnique('hIi2#')).toBe(true)

    expect(isUnique('hIIi2#')).toBe(false)
    expect(isUnique('h2IIi2#')).toBe(false)
    expect(isUnique('h#IIi2#')).toBe(false)
  })
})
