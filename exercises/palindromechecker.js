// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/PalindromChecker-Solution#index.js

// Solution 👉 https://www.loom.com/share/2dd2d840dc5f4576a369524bdc3e8336


// Write a function that takes in string and checks if it is a Palindrome
// A palindrome is a word that is the same forwards and backwards!
// Ex: racecar -> racecar

function isPalindrome (string) {
  // Should return true IF it's a palindrome
  let reversed = ""

  for (let i = string.length-1; i >= 0; i--) {
    reversed += string[i]
  }
  if (reversed == string) {
    return true
  } else{
    return false
  }
}

console.log(isPalindrome("radar"))

//Topics: Strings, loops