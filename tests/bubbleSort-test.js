const { expect } = require('chai')
const bubbleSort = require('../lib/bubbleSort.js');

describe('bubbleSort', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.instanceof(Function)
  })

  it('should sort short arrays', ()=> {
    const array = [3, 2, 5, 1, 4]
    expect(bubbleSort(array)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort arrays with negative numbers', ()=> {
    const array = [3, 2, -5, -1, 4]
    expect(bubbleSort(array)).to.deep.equal([-5, -1, 2, 3, 4])
  })

})