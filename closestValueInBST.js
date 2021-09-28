let closest = Infinity;

function findClosestValueInBst(tree, target) {
	if (tree === null) {
		return closest
	}
	if (tree.value === target) {
		return tree.value;
	}
	const oldDifference = Math.abs(target - closest);
	const difference = Math.abs(target - tree.value);

	if (difference < oldDifference) {
		closest = tree.value
	}
	if (target > tree.value) {
		return findClosestValueInBst(tree.right, target);
	} else {
		return findClosestValueInBst(tree.left, target);
	}
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

