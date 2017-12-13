function quickSort(array) {
  if(array.length <= 1) {
    return array
  }

  let pivot = array.pop()
  let sorterA = []
  let sorterB = []
  
  for (let i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
      sorterA.push(array[i])
    } else {
      sorterB.push(array[i])
    }
  }
  
  return [... quickSort(sorterA), pivot, ...quickSort(sorterB)]
}

module.exports = quickSort;