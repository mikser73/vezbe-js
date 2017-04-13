/**
 * Write function that reverses a list, preferably in place.
 */
var List = function() {
'use strict';

  function reverseList(list) {
      if(Array.isArray(list) && list.length == 0) {
          var arr = [];
          return arr;
      }
      if(list === null) {
          var arr = [];
          return arr;
      }
      if(typeof(list) === 'number' || typeof(list) === 'boolean' || typeof(list) === 'string') {
          var arr = [];
          arr[0] = list.valueOf();
          return arr;
              }
   var a;
  
  if (list.length % 2 === 0) {
    for (var i = 0; i<= list.length/2 - 1; i++) {
      a = list[i];
      list[i] = list[list.length - 1 - i];
      list[list.length - 1 - i] = a;
    }
  } else {
    for (var j = 0; j<= Math.floor(list.length/2) - 1; j++) {
      a = list[j];
      list[j] = list[list.length - 1 - j];
      list[list.length - 1 - j] = a; 
    }
  }
  return list;     
      
  }

  return {
    reverseList: reverseList
  };
};