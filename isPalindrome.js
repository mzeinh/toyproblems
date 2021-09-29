// o(n) time
function isPalindrome(string) {
  const reversedString = string.split('').reverse().join('');
	if (string === reversedString) {
		return true;
	}
	return false
}
