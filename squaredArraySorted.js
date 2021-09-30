function sortedSquaredArray(array) {
  for (let i = 0; i < array.length; i++) {
		array[i] = array[i]**2
	}
  return array.sort((a,b) => a-b);
}