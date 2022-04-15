type Matrix = number[][]
export const solve = (m: Matrix): Matrix => {
  const rs = new Set<number>()
  const cs = new Set<number>()
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      // skip if we've seen this row or col
      if (rs.has(i) || cs.has(j)) continue

      if (m[i][j] === 0) {
        // zero out row
        m[i] = m[i].map(() => 0)

        // zero out col
        for (let r = 0; r < m.length; r++) {
          m[r][j] = 0
        }

        rs.add(i)
        cs.add(j)
      }
    }
  }

  return m
}
