function getNthFib(n) {
	if (n === 0 || n === 1) {
		return 0
	}
  return getFibRec(n, [0, 1]);
}

function getFibRec(n, fiboArray) {
	if (fiboArray.length === n) {
		return fiboArray[fiboArray.length - 1];
	}
	const lastSeq = fiboArray[fiboArray.length - 1]
	const secondToLastSeq = fiboArray[fiboArray.length - 2]
	const currentSeq = lastSeq + secondToLastSeq;
	fiboArray.push(currentSeq);
	return getFibRec(n, fiboArray);
}
