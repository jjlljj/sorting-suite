const { expect } = require('chai').use(require("chai-sorted"))
const quickSort = require('../lib/quickSort.js');

describe('quickSort', () => {
  it('should be a function', () => {
    expect(quickSort).to.be.instanceof(Function)
  })

  it('should sort short arrays', ()=> {
    const array = [3, 2, 5, 1, 4]
    expect(quickSort(array)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort arrays with negative numbers', ()=> {
    const array = [3, 2, -5, -1, 4]
    expect(quickSort(array)).to.deep.equal([-5, -1, 2, 3, 4])
  })


});