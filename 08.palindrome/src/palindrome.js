/**
 * Write a function that tests whether a string is a palindrome.
 */
var Palindrome = function() {

  function is(word) {
      var a = word.length;
      for(var j = 0; j < Math.floor((a/2) -1); j++) {
                if(word.charAt(j) !== word.charAt(a - 1 - j)) {
                 return false;
                }
      }
    return true;
  }

  return {
    is: is
  };
};