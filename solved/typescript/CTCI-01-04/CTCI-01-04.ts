export const canPalindrome = (s: string) => {
  const counts = new Array(26).fill(0)
  const aCode = 'a'.charCodeAt(0)
  const zCode = 'z'.charCodeAt(0)
  const charInAtoZ = (c: string) =>
    c.charCodeAt(0) >= aCode && c.charCodeAt(0) <= zCode
  const lowercaseLettersOnly = s.toLowerCase().split('').filter(charInAtoZ)
  for (const c of lowercaseLettersOnly) {
    counts[zCode - c.charCodeAt(0)]++
  }

  if (lowercaseLettersOnly.length % 2 === 0) {
    // when even amount of letters, palilndrome
    // must have all characters counts be even
    return counts.findIndex((x) => x % 2 !== 0) === -1
  }

  // otherwise, one character can be odd
  return counts.filter((x) => x % 2 !== 0).length === 1
}
