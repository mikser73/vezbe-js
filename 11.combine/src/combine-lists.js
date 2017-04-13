/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function combine(list1, list2) {
      var a = (list1.length > list2.length) ? list2.length : list1.length;
      var arr = [];
      for(var i = 0; i < a; i++) {
          arr.push(list1[i]);
          arr.push(list2[i]);
      }
      if(a == list2.length) {
          for(var j = a; j < list1.length; j++) {
              arr.push(list1[j]);
          }
      } else {
          for (var j = a; j < list2.length; j++) {
              arr.push(list2[j]);
          }
      }
      return arr;
      
  }

  return {
    combine: combine
  };
};