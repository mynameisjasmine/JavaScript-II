// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  
  return cb(items.length);
}
// Invocation
getLength(items, function(long) {
  console.log(long)
});


// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(items.length - 1)
}

// Invocation
last(item,function(final){
  console.log(final)
});


// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y)
  
}

// Invocation
sumNums(1,1,function(total){
  console.log(total)
});



 // multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
 return cb(x * y)
}
// Invocation
multiplyNums(x,y,function(multiple) {
  console.log(multiple)
});

// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const stuff = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

  function contains(item, list, 
  cb) {
    return cb (list.includes(item))
  }
  // Invocation
  contains('Gum',stuff,function(answer) {
  console.log(answer)
  });
  

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
