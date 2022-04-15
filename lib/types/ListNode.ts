export type MaybeNode = ListNode | null
export class ListNode {
  val: number
  next: MaybeNode
  constructor(val?: number, next?: MaybeNode) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const arrayToList = (a: number[]): MaybeNode => {
  const preStart = new ListNode(null, null)
  let node = preStart
  for (let i = 0; i < a.length; i++) {
    const next = new ListNode(a[i], null)
    node.next = next
    node = next
  }
  return preStart.next
}

export const listToArray = (h: ListNode): number[] => {
  const res: number[] = []
  let node = h
  while (node) {
    res.push(node.val)
    node = node.next
  }
  return res
}
