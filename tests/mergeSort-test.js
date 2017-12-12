const { expect } = require('chai').use(require("chai-sorted"))
const mergeSort = require('../lib/mergeSort.js');

describe('mergeSort', () => {
  it('should be a function', () => {
    expect(mergeSort).to.be.instanceof(Function)
  })

  it('should sort short arrays', ()=> {
    const array = [3, 2, 5, 1, 4]
    expect(mergeSort(array)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort arrays with negative numbers', ()=> {
    const array = [3, 2, -5, -1, 4]
    expect(mergeSort(array)).to.deep.equal([-5, -1, 2, 3, 4])
  })

})