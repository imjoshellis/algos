import { arrayToList, listToArray } from 'lib/types/ListNode'
import { solve } from './ctci-02-01'

const removeDuplicatesInArray = (a: number[]) => [...new Set(a)]

const inOut = (inArr: number[]) => {
  const outArr = removeDuplicatesInArray(inArr)
  const input = arrayToList(inArr)
  const output = listToArray(arrayToList(outArr))
  return { input, output }
}

describe('solve', () => {
  it('removes simple duplicates', () => {
    const { input, output } = inOut([1, 1, 1])
    const result = listToArray(solve(input))
    expect(result).toEqual(output)
  })

  it('removes complex duplicates', () => {
    const inArr = [1, 1, 2, 3, 5, 5, 5, 3, 5, 4, 4, 5, 4, 5, 2, 3, 1]
    const { input, output } = inOut(inArr)
    const result = listToArray(solve(input))
    expect(result).toEqual(output)
  })

  it('removes duplicates in random 1_000_000 elements', () => {
    const inArr = new Array(1_000_000)
      .fill(0)
      .map(() => Math.floor(Math.random() * 1000))
    const { input, output } = inOut(inArr)
    const result = listToArray(solve(input))
    expect(result).toEqual(output)
  })
})
