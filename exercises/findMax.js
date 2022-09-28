// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/FindMax-Solution#index.js

// Solution 👉 https://www.loom.com/share/cc0efcb5211b48dcb23637b6dae4c56f

// Write a function that takes in an array of numbers and returns the largest number

function findMax (array) {
  let max = 0
  for(i=0; i < array.length; i++) {
    if(array[i] > max){
      max = array[i]
    }
  }
  return max
}

console.log(findMax([10, 15, 14, 35, 22]))

//Topics: loops, arrays, conditions,