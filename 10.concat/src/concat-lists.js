/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function concatenate(list1, list2) {
      var arr = [];
      for(var i = 0; i< list1.length; i++) {
          arr.push(list1[i]);
      }
      for(var j = 0; j < list2.length; j++) {
          arr.push(list2[j]); 
      }
      return arr;
  }

  return {
    concatenate: concatenate
  };
};