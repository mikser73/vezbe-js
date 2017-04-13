/**
 * Write a function that calculates a sum or a product of the numbers from 1 to n
 * If opts.mode is 'sum', then it calclates the sum.
 * If opts.mode is 'product', then it calclates the product.
 */
var SumProduct = function() {
  'use strict';
    
  function product(n) {
      var prod = 1;
      for (var i = 1; i <= n; i++) {
          prod *= i;
      }
      return prod;
  }
    
 function sum(n) {
     var sum = 0;
     for(var i = 0; i <= n; i++) {
         sum += i; 
     }
     return sum;
 }

  function calculate(n, opts) {
      if(opts.mode == 'sum') {
          return sum(n);
      } else if(opts.mode == 'product') {
          return product(n);
      } else {
          throw('Invalid calculation mode.');     
      }
        return;
  }

  return {
    calculate: calculate
  };
};