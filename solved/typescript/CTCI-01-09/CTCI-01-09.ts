export const solve = (
  a: string,
  b: string,
  isSubstring: (a: string, b: string) => boolean
): boolean => isSubstring(a + a, b)
