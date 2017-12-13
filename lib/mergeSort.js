function mergeSort(array) {
  if(array.length === 1) {
    return array
  }

  let sorterA = array.splice(0, array.length/2)
  let sorterB = array
  
  return merge(mergeSort(sorterA), mergeSort(sorterB))
}

function merge(a, b) {
  let sorted = [];

  while (a.length || b.length ) {
    if (a[0] < b[0] || b.length === 0) {
      sorted.push(a.shift())
    } else {
      sorted.push(b.shift())
    }
  }
  return sorted
}

module.exports = mergeSort;