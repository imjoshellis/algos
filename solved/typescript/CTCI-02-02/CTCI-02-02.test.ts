import { arrayToList } from 'lib/types/ListNode'
import { solve } from './ctci-02-02'

describe('solve', () => {
  it('finds the second to last in a list of 3', () => {
    const inputArr = [1, 2, 3]
    const input = arrayToList(inputArr)
    expect(solve(input, 2).val).toEqual(2)
  })

  it('finds the third to last', () => {
    const inputArr = [1, 2, 3, 4, 5, 6]
    const input = arrayToList(inputArr)
    expect(solve(input, 3).val).toEqual(4)
  })

  it('finds the third to last in arr of len 3', () => {
    const inputArr = [1, 2, 3]
    const input = arrayToList(inputArr)
    expect(solve(input, 3).val).toEqual(1)
  })

  it('finds randomly generated target', () => {
    const ARR_LEN = 1000
    const inputArr = new Array(ARR_LEN).fill(0).map(() => Math.random() * 1000)
    const input = arrayToList(inputArr)
    const i = Math.floor(Math.random() * ARR_LEN)
    expect(solve(input, i).val).toEqual(inputArr[ARR_LEN - i])
  })
})
