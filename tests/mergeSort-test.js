const { expect } = require('chai').use(require("chai-sorted"))
const mergeSort = require('../lib/mergeSort.js');
const { randomNumberGen } = require('@jjlljj/random-number-gen')

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

  it('should sort an array of 101 numbers', ()=> {
    const array = randomNumberGen(101, 250)
    expect(array.length).to.equal(101)
    expect(mergeSort(array)).to.be.sorted()
  })

  it('should sort an array of 1001 numbers', ()=> {
    const array = randomNumberGen(1001, 1500)
    expect(array.length).to.equal(1001)
    expect(mergeSort(array)).to.be.sorted()
  })

  it('should sort an array of 10,000 numbers', ()=> {
    const array = randomNumberGen(10000, 25000)
    expect(array.length).to.equal(10000)
    expect(mergeSort(array)).to.be.sorted()
  })

  it('should sort an array of 100,000 numbers', ()=> {
    const array = randomNumberGen(100000, 250000)
    expect(array.length).to.equal(100000)
    expect(mergeSort(array)).to.be.sorted()
  })
})