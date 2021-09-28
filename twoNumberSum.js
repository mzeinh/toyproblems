// n log(n) time complexity

function twoNumberSum(array, targetSum) {
  var sortedArray = array.sort((a, b) => a - b);
	var rightPointer = array.length - 1
	var leftPointer = 0;

	while (leftPointer < rightPointer) {
		var currentSum = array[leftPointer] + array[rightPointer];
		if (currentSum === targetSum) {
			return [array[leftPointer], array[rightPointer]];
		} else if (currentSum < targetSum) {
			leftPointer++;
		} else if (currentSum > targetSum) {
			rightPointer--;
		}
	}
	return [];
}


// O(n^2) time complexity

function twoNumberSum(array, targetSum) {
  var result = [];
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (array[i] + array[j] === targetSum && array[i] !== array[j]) {
				result.push(array[i], array[j]);
				return result;
			}
		}
	}
	return result;
}

// o(n) time

function twoNumberSum(array, targetSum) {
	const nums = {};
  for (var i = 0; i < array.length; i++) {
		let potentialMatch = targetSum - array[i];
		if (potentialMatch in nums) {
			return [potentialMatch, array[i]];
		} else {
			nums[array[i]] = true;
		}
	}
	return [];
}
