function permutations(array) {
  const permutations = new Set();
  permhelper(0, array, permutations);
  return Array.from(permutations);
}


function permhelper(i, array, permutations) {
  if (i === array.length - 1) {
      permutations.add(array.slice());
  } else {
      for (let j = i; j < array.length; j++) {
          swap(i, j, array);
          permhelper(i + 1, array, permutations);
          swap(i, j, array);
      }
  }
}


function swap(i, j, array) {
  const tempArray = array[i];
  array[i] = array[j];
  array[j] = tempArray;
}