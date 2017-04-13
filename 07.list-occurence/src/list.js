/**
 * Write a function that checks whether an element occurs in a list.
 */
var List = function() {
  'use strict';

  function has(list, element) {
      if(typeof(element) === 'number' || typeof(element) === 'boolean' || typeof(element) === 'string') {
          for(var i = 0; i<list.length; i++) {
              if(list[i] === element) {
                  return true;
              }
          }
          return false;
      }
      if(Array.isArray(element)) {
          for(var i=0; i<list.length; i++) {
              if(Array.isArray(list[i])) {
                  for(var k=0; k<list[i].length; k++) {
                      if(element[k] !== list[i][k]) {
                          return false;
                      }
                  }
                return true;
              }
            
          }
          return false;
      }
      if(element === Object(element)) {
          var arr1 = Object.keys(element);
          for(var i=0; i<list.length; i++) {
              if(list[i] === Object(list[i])) {
                  var arr2 = Object.keys(list[i]);
                  for(var k=0; k<arr2.length; k++) {
                      if(arr1[k] !== arr2[k] || list[i][arr2[k]] !== element[arr1[k]]) {
                          return false;
                      }
                  }
                  return true;
              }
          }
          return false;
      }
  }

  return {
    has: has
  };
};