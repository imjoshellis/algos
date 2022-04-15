import { arrayToList, ListNode } from 'lib/types/ListNode'
import { solve } from './ctci-02-03'

describe('solve', () => {
  it('deletes based on given node', () => {
    const third = new ListNode(3, null)
    const second = new ListNode(2, third)
    const first = new ListNode(1, second)
    solve(second)
    expect(first).toEqual(arrayToList([1, 3]))
  })
})
