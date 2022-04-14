import { isPermutation } from './CTCI-01-02'

describe('isPermutation', () => {
  it('accepts two strings', () => {
    expect(() => isPermutation('a', 'b')).not.toThrow()
  })

  it('returns true for permutations', () => {
    expect(isPermutation('abcd', 'bcda')).toBe(true)
    expect(isPermutation('ab2cd', 'b2cda')).toBe(true)
    expect(isPermutation('zzioab2cd', 'b2ciozzda')).toBe(true)
  })

  it('returns false for non-permutations', () => {
    expect(isPermutation('abccd', 'bcbda')).toBe(false)
    expect(isPermutation('abcd', 'b2cda')).toBe(false)
    expect(isPermutation('zioab2cd', 'b2ciozzzda')).toBe(false)
    expect(isPermutation('ziiiioab2cd', 'b2ciozzzda')).toBe(false)
  })
})
