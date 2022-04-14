// time: O(n) because it only ever looks at each character once
export const solve = (s: string): string => {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    let count = 1
    res += s[i]
    while (s[i] === s[i + 1]) {
      count++
      i++
    }
    res += count
    if (res.length > s.length) return s
  }

  return res
}
