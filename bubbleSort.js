//best O(n)
//average O(n^2)
// Worst O(n^2)

function bubbleSort(array) {
  let didWeSort = true;
	while (didWeSort === true) {
		let counter = 0;
		didWeSort = false;
		while (counter < array.length) {
			if (array[counter] > array[counter + 1]) {
				const memArray = array[counter];
				array[counter] = array[counter + 1];
				array[counter + 1] = memArray;
				counter++;
				didWeSort = true;
			} else {
				counter++;
			}
		}
	}
	return array;
}