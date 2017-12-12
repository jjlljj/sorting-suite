function quickSort(array) {
  let p = array.length-1;
  
  if(p < 1) {
    return array
  }
  
  for (let i = 0; i <= p; i++) {
    for (p; p > i; p--){
      if (array[i] > array[p]) {
        [array[i], array[p]] = [array[p], array[i]]
      } 
    }
  }
  
  let pivot = array[p]
  let sorterA = array.splice(0, p)
  let sorterB = array.splice(1, array.length-1)  
  let sortA = quickSort(sorterA)
  let sortB = quickSort(sorterB)
  
  return [... sortA, pivot, ...sortB]

  // could use this return statement instead of lines 16-22
  //return [... quickSort(array.splice(0, p)), array[p], ...quickSort(array.splice(1, array.length-1))]

}

module.exports = quickSort;