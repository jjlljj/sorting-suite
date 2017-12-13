const { expect } = require('chai').use(require("chai-sorted"))
const quickSort = require('../lib/quickSort.js');
const { randomNumberGen } = require('@jjlljj/random-number-gen')

describe('quickSort', () => {
  it('should be a function', () => {
    expect(quickSort).to.be.instanceof(Function)
  })

  it('should sort short arrays', ()=> {
    const array = [3, 2, 5, 1, 4]
    expect(quickSort(array)).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should an array with negative numbers', ()=> {
    const array = [3, 2, -5, -1, 4]
    expect(quickSort(array)).to.deep.equal([-5, -1, 2, 3, 4])
  })

  it('should sort an array of 1,001 numbers', ()=> {
    const array = randomNumberGen(1001, 2500)
    expect(array.length).to.equal(1001)
    expect(quickSort(array)).to.be.sorted()
  })

  it('should sort an array of 5,000 numbers', ()=> {
    const array = randomNumberGen(5000, 7500)
    expect(array.length).to.equal(5000)
    expect(quickSort(array)).to.be.sorted()
  })

  it('should sort an array of 7,000 numbers', ()=> {
    const array = randomNumberGen(7000, 9000)
    expect(array.length).to.equal(7000)
    expect(quickSort(array)).to.be.sorted()
  })

  it('should sort an array of 15,000 numbers', ()=> {
    const array = randomNumberGen(15000, 20000)
    expect(array.length).to.equal(15000)
    expect(quickSort(array)).to.be.sorted()
  })

  it('should sort an array of 100,000 numbers', ()=> {
    const array = randomNumberGen(100000, 150000)
    expect(array.length).to.equal(100000)
    expect(quickSort(array)).to.be.sorted()
  })

  it('should sort an array of 500,000 numbers', ()=> {
    const array = randomNumberGen(500000, 700000)
    expect(array.length).to.equal(500000)
    expect(quickSort(array)).to.be.sorted()
  })

  it('should sort an array of 750,000 numbers', ()=> {
    const array = randomNumberGen(750000, 800000)
    expect(array.length).to.equal(750000)
    expect(quickSort(array)).to.be.sorted()
  })

});