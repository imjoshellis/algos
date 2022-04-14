import { canPalindrome } from './CTCI-01-04'

describe('canPalindrome', () => {
  it('returns true if input can palindrome', () => {
    const expectTrue = ['Tact Coa', 'race ca2r']
    for (const input of expectTrue) {
      expect(canPalindrome(input)).toBe(true)
    }
  })

  it('returns false if input cannot palindrome', () => {
    const expectTrue = ['Tact Cioa', 'razxyce ca2r']
    for (const input of expectTrue) {
      expect(canPalindrome(input)).toBe(false)
    }
  })
})
