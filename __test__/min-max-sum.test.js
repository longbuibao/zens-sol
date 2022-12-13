const { minMaxSum } = require('../min-max-sum')
describe('min-max-sum', () => {
  it('return the appropriate min, max value', () => {
    expect(minMaxSum([1, 2, 3, 4, 5])).toMatchObject({ min: 10, max: 14 })
    expect(minMaxSum([1, 3, 5, 7, 9])).toMatchObject({ min: 16, max: 24 })
    expect(minMaxSum([0, -1, 100, 1, 3])).toMatchObject({ min: 3, max: 104 })
    expect(minMaxSum([0, -1, -2, -3, -4])).toMatchObject({ min: -10, max: -6 })
    expect(minMaxSum([0, 0, 0, 0, 0])).toMatchObject({ min: 0, max: 0 })
  })
})
