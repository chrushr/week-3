/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us wvalueh an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrvaluee these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
var array= _.range(100)
_.each(array, function(value){
  if (value %3==0 && value%5 != 0) {console.log('Fizz');}
      else if (value%5 == 0 && value%5 != 0) {console.log('Buzz');}
      else if (value%5 == 0 && value%5 == 0) {console.log('FizzBuzz');}
      else {console.log(value)};
    })

// ====================

var filterOutLessThan10 = function(list) {
  var array=[]
_.each(list, function(value){
    if (value>10){
      array.push(value)
    }
  });
  return array;
};

var test = filterOutLessThan10([4, 11]).length === 1 && filterOutLessThan10([4, 11])[0] === 11;
console.log('filterOutLessThan10 success:', test)
