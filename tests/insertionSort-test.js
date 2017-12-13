const { expect } = require('chai').use(require("chai-sorted"))
const insertionSort = require('../lib/insertionSort.js');
const { randomNumberGen } = require('@jjlljj/random-number-gen')

describe('insertionSort', () => {
  it('should be a function', () => {
    expect(insertionSort).to.be.instanceof(Function)
  })

  it('should sort short arrays', ()=> {
    const array = [3, 2, 5, 1, 4]
        expect(insertionSort(array)).to.be.sorted()
  })

  it('should sort arrays with negative numbers', ()=> {
    const array = [3, 2, -5, -1, 4]
    expect(insertionSort(array)).to.be.sorted()
  })

  it('should sort an array of 1,001 numbers', ()=> {
    const array = randomNumberGen(1001, 2500)
    expect(array.length).to.equal(1001)
    expect(insertionSort(array)).to.be.sorted()
  })

  it('should sort an array of 5,000 numbers', ()=> {
    const array = randomNumberGen(5000, 7500)
    expect(array.length).to.equal(5000)
    expect(insertionSort(array)).to.be.sorted()
  })

  it('should sort an array of 10,000 numbers', ()=> {
    const array = randomNumberGen(10000, 15000)
    expect(array.length).to.equal(10000)
    expect(insertionSort(array)).to.be.sorted()
  })

  it('should sort an array of 15,000 numbers', ()=> {
    const array = randomNumberGen(15000, 20000)
    expect(array.length).to.equal(15000)
    expect(insertionSort(array)).to.be.sorted()
  })


})