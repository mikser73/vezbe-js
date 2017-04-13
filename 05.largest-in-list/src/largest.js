/**
 * Write a function that returns the largest element in a list.
 */
var List = function() {
  'use strict';

  function findLargest(list) {
      if(list.length == 0) {
          throw('List cannot be empty.')
      }
      var max = list[0];
      for(var i = 1; i<list.length; i++) {
          if(list[i]>= max) {
              max = list[i];
          }
        
      }  
      return max;
  }

  return {
    findLargest: findLargest
  };
};