function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
      for (let n = 0; n < array.length; n++) {
      if (array[n] > array[n+1]) {
        [array[n], array[n + 1]] = [array[n + 1], array[n]]
      }
    }
  }
  return array
}

module.exports = bubbleSort;