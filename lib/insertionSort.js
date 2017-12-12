function insertionSort(array) {
  for(let i = 0; i <array.length; i++) {
    for (let n = i; n >= 0 && array[n] < array[n-1] ; n--) {
        [array[n], array[n - 1]] = [array[n - 1], array[n]]
    }
  }
  return array
}



module.exports = insertionSort