// Test you code by forking this repl: 
// 👉 COMMING SOON!


// Write a function that takes in an array and sort the numbers inside from least to greatest

function sortArray (array) {
  let x = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        x = array[j];
        array[j] = array[i];
        array[i] = x;
      }
    }
  }
  return array;
}

const array = [1, 6, 2, 4, 56, 67, 7, 5, 3, 7, 8, 43, 23, 4];
console.log(sortArray(array));

// BONUS sort the array without using .sort()

