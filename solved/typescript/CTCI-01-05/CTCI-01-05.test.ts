import { solve } from './CTCI-01-05'

describe('solve', () => {
  it('handles equivalent strings', () => {
    expect(solve('abc', 'abc')).toBe(true)
  })

  it('handles very different strings', () => {
    expect(solve('abc', 'abcdef')).toBe(false)
  })

  it('handles deleting a char', () => {
    expect(solve('abc', 'ab')).toBe(true)
  })

  it('handles adding a char', () => {
    expect(solve('abc', 'abcd')).toBe(true)
  })

  it('handles replacing a char', () => {
    expect(solve('abc', 'abd')).toBe(true)
  })
})
