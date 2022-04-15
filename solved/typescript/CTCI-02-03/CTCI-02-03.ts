import { ListNode } from 'lib/types/ListNode'

export const solve = (n: ListNode): void => {
  n.val = n.next.val
  n.next = n.next.next
}
