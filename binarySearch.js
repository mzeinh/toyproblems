function binarySearch(array, target) {
	return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, leftPointer, rightPointer) {
 while (leftPointer < rightPointer) {
	 const middlePointer = Math.floor(leftPointer + rightPointer / 2);
	 const potentialMatch = array[middlePointer];
	 if (target === array[middlePointer]) {
		 return middlePointer
	 }
	 if (target < potentialMatch) {
		 rightPointer = middlePointer - 1;
	 } else {
		 leftPointer = middlePointer + 1;
	 }
 }
	return -1
}