/**
 * Write a function that outputs a multiplication table for numbers up to 5.
 * The table should be a two-dimensional array.
 */
var MultiplicationTable = function() {
  'use strict';

  function generate5() {
      var arr1 = [0, 1, 2, 3, 4, 5];
      var arr2 = [0, 1, 2, 3, 4, 5];
      var arr = [];
        arr[0] = [];
      for(var i = 0; i<=5; i++) {
          arr[0][i] = arr1[i];
      }
      for(var j=1; j<=5; j++) {
          arr[j] = [];
          arr[j][0] = arr1[j];
          for(var k=1; k<=5; k++) {
              arr[j][k] = arr1[j]*arr2[k];
          }
      }
return arr;
  }

  return {
    generate5: generate5
  };
};