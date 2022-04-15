import { solve } from './ctci-01-08'

describe('solve', () => {
  it('does nothing to a matrix with no zeroes', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6]
    ]
    const expected = [
      [1, 2, 3],
      [4, 5, 6]
    ]
    expect(solve(input)).toEqual(expected)
  })

  it('zeroes out one zero', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 0]
    ]
    const expected = [
      [1, 2, 0],
      [0, 0, 0]
    ]
    expect(solve(input)).toEqual(expected)
  })

  it('zeroes out two zeroes', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 0],
      [0, 5, 2]
    ]
    const expected = [
      [0, 2, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    expect(solve(input)).toEqual(expected)
  })

  it('zeroes out parts of tall array', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 0],
      [4, 5, 6],
      [4, 5, 6],
      [4, 5, 6],
      [4, 5, 6],
      [4, 5, 6],
      [4, 5, 6],
      [4, 5, 6],
      [4, 5, 6],
      [4, 5, 6],
      [4, 5, 6],
      [0, 5, 2]
    ]
    const expected = [
      [0, 2, 0],
      [0, 0, 0],
      [0, 5, 0],
      [0, 5, 0],
      [0, 5, 0],
      [0, 5, 0],
      [0, 5, 0],
      [0, 5, 0],
      [0, 5, 0],
      [0, 5, 0],
      [0, 5, 0],
      [0, 5, 0],
      [0, 0, 0]
    ]
    expect(solve(input)).toEqual(expected)
  })
})
