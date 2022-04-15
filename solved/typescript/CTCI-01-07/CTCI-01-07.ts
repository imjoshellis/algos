type Array2D = number[][]
export const solve = (matrix: Array2D): Array2D => {
  let lo = 0
  let hi = matrix.length - 1

  while (lo < hi) {
    for (let x = 0; x < hi - lo; x++) {
      const temp = matrix[hi - x][lo]
      matrix[hi - x][lo] = matrix[hi][hi - x]
      matrix[hi][hi - x] = matrix[lo + x][hi]
      matrix[lo + x][hi] = matrix[lo][lo + x]
      matrix[lo][lo + x] = temp
    }

    lo++
    hi--
  }

  return matrix
}
