const minMaxSum = (array) => {
  const totalSum = array.reduce((result, current) => result + current)

  //max sum of 4 elements will be the total sum of array minus the smallest element
  const max = totalSum - Math.min(...array)
  //min sum of 4 elements will be the total sum of array minus the largest element
  const min = totalSum - Math.max(...array)
  return { min, max }
}
exports.minMaxSum = minMaxSum
