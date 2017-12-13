const { expect } = require('chai').use(require("chai-sorted"))
const bubbleSort = require('../lib/bubbleSort.js');
const { randomNumberGen } = require('@jjlljj/random-number-gen')

describe('bubbleSort', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.instanceof(Function)
  })

  it('should sort short arrays', ()=> {
    const array = [3, 2, 5, 1, 4]
    expect(bubbleSort(array)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should sort an array with negative numbers', ()=> {
    const array = [3, 2, -5, -1, 4]
    expect(bubbleSort(array)).to.deep.equal([-5, -1, 2, 3, 4])
  })

  it('should sort an array of 1,001 numbers', ()=> {
    const array = randomNumberGen(1001, 2500)
    expect(array.length).to.equal(1001)
    expect(bubbleSort(array)).to.be.sorted()
  })

  it('should sort an array of 5,000 numbers', ()=> {
    const array = randomNumberGen(5000, 7500)
    expect(array.length).to.equal(5000)
    expect(bubbleSort(array)).to.be.sorted()
  })

   it('should sort an array of 7,500 numbers', ()=> {
    const array = randomNumberGen(7000, 10000)
    expect(array.length).to.equal(7000)
    expect(bubbleSort(array)).to.be.sorted()
  })

})