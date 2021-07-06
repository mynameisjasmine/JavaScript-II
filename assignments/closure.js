// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

  const greeting = 'Hello,'

 function saysHello () {
   const newgreeting = "good morning"  
   return `${greeting} ${newgreeting}`
 }
 
  const invocation = saysHello();
  console.log(invocation)

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const counter = () => {
  let count = 0
  
  return function() {
    count += 1;
    return count
  }
};
const newCount = counter();
console.log(newCount());
console.log(newCount());
console.log(newCount());






// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
