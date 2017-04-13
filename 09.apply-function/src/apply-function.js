/**
 * Write a function on_all that applies a function to every element of a list.
 * You cannot use Array.map, but have to implement it yourself.
 */
var MyFunction = function() {
  'use strict';

  function applyFunction(list, f) {
        var arr = [];
      for(var i = 0; i < list.length; i++) {
          arr.push(f(list[i]));
      }
      return arr; 
  }

  return {
    applyFunction: applyFunction
  };
};