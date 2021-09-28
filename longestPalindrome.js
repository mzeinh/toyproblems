function palindromeCheck(string) {
  const reversedString = string.split('').reverse().join('');
  if (reversedString === string) {
      return true;
  }
  return false;
}

function longestPalindrome(string) {
   let result = undefined;

   if (string.length === 1) {
       return string
   }

   for (var i = 0; i < string.length; i++) {
       for (var j = 0; j < string.length; j++) {
       const sub = string.substring(i, j + 1);
           if (palindromeCheck(sub)) {
               if (result === undefined) {
                   result = sub;
               } else if (result.length < sub.length) {
                   result = sub;
               }
           }
       }
   }
   return result;
}