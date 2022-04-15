import { solve } from './ctci-01-07'

describe('solve', () => {
  it('rotates a 2x2 matrix', () => {
    const matrix = [
      [2, 4],
      [3, 5]
    ]
    const rotatedMatrix = [
      [3, 2],
      [5, 4]
    ]
    expect(solve(matrix)).toEqual(rotatedMatrix)
  })

  it('rotates a 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const rotatedMatrix = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
    expect(solve(matrix)).toEqual(rotatedMatrix)
  })

  it('rotates a 4x4 matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]
    const rotatedMatrix = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ]
    expect(solve(matrix)).toEqual(rotatedMatrix)
  })

  it('rotates a 5x5 matrix', () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ]
    const rotatedMatrix = [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5]
    ]
    expect(solve(matrix)).toEqual(rotatedMatrix)
  })

  it('rotates a 10x10 matrix', () => {
    const SIZE = 10
    const matrix = new Array(SIZE)
      .fill(0)
      .map(() => new Array(SIZE).fill(0).map(() => Math.random()))

    const oldMatrix = JSON.parse(JSON.stringify(matrix))
    // rotating 4 times should bring us back around to original
    solve(matrix)
    expect(matrix).not.toEqual(oldMatrix)
    solve(matrix)
    expect(matrix).not.toEqual(oldMatrix)
    solve(matrix)
    expect(matrix).not.toEqual(oldMatrix)
    solve(matrix)
    expect(matrix).toEqual(oldMatrix)
  })

  it('rotates a 100x100 matrix', () => {
    const SIZE = 100
    const matrix = new Array(SIZE)
      .fill(0)
      .map(() => new Array(SIZE).fill(0).map(() => Math.random()))

    const oldMatrix = JSON.parse(JSON.stringify(matrix))
    // rotating 4 times should bring us back around to original
    solve(matrix)
    expect(matrix).not.toEqual(oldMatrix)
    solve(matrix)
    expect(matrix).not.toEqual(oldMatrix)
    solve(matrix)
    expect(matrix).not.toEqual(oldMatrix)
    solve(matrix)
    expect(matrix).toEqual(oldMatrix)
  })

  it('rotates a 1000x1000 matrix', () => {
    const SIZE = 1000
    const matrix = new Array(SIZE)
      .fill(0)
      .map(() => new Array(SIZE).fill(0).map(() => Math.random()))

    const oldMatrix = JSON.parse(JSON.stringify(matrix))
    // rotating 4 times should bring us back around to original
    solve(matrix)
    expect(matrix).not.toEqual(oldMatrix)
    solve(matrix)
    expect(matrix).not.toEqual(oldMatrix)
    solve(matrix)
    expect(matrix).not.toEqual(oldMatrix)
    solve(matrix)
    expect(matrix).toEqual(oldMatrix)
  })
})
