/**
 * Write a function that sums the numbers from 1 to n.
 */
var Sum = function() {
  'use strict';

  function sumNumbers(n) {
      var sum = 0; 
      if (n > 0) {
          for(var i = 1; i <=n; i++)
              sum += i;
      } else if(n < 0) {
          for(var j = n; j < 0; j++) {
              sum+= j;
          }
      } else {}
      return sum;
  }

  return {
    sumNumbers: sumNumbers
  };
};