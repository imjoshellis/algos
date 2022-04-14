export const isPermutation = (a: string, b: string) => {
  if (b.length !== a.length) return false
  const m: Record<string, number> = {}
  for (const c of a) {
    if (!m[c]) m[c] = 0
    m[c]++
  }
  for (const c of b) {
    if (!m[c]) return false
    m[c]--
  }
  return true
}
