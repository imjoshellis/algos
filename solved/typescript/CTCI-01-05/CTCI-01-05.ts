// time: O(n) because it only ever loops through the longer given string once
export const solve = (a: string, b: string): boolean => {
  if (a === b) return true

  const aLen = a.length
  const bLen = b.length

  if (Math.abs(aLen - bLen) > 1) return false

  // if a is longer than b:
  // try deleting a letter at a time from a
  if (aLen > bLen) {
    for (let i = 0; i < aLen; i++) {
      const cur = a.slice(0, i) + a.slice(i + 1, aLen)
      if (cur === b) return true
    }
    return false
  }

  // if b is longer than a:
  // try deleting a letter at a time from b
  // (same as "adding" a letter to a)
  if (aLen < bLen) {
    for (let i = 0; i < bLen; i++) {
      const cur = b.slice(0, i) + b.slice(i + 1, bLen)
      if (cur === a) return true
    }
    return false
  }

  let countDiff = 0

  // if same length, we know there must be 1 or less differences
  for (let i = 0; i < aLen; i++) {
    if (a[i] !== b[i]) countDiff++
    if (countDiff > 1) return false
  }

  return true
}
