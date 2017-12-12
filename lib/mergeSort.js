function mergeSort(array) {
  if(array.length === 1) {
    return array
  }

  let sorterA = array.splice(0, array.length/2)
  let sorterB = array
  
  let sortA = mergeSort(sorterA)
  let sortB = mergeSort(sorterB)

    function merge(a, b) {
      let sorted = [];
  
      while (a.length > 0 && b.length > 0) {
        if (a[0] < b[0]) {
          sorted.push(a.shift())
        } else {
          sorted.push(b.shift())
        }
      }
      if (a.length !== 0 ) {
        sorted = [...sorted, ...a]
      }
      if (b.length !== 0) {
        sorted = [...sorted, ...b]
      }
      return sorted
  }
  
  return merge(sortA, sortB)
}

module.exports = mergeSort;