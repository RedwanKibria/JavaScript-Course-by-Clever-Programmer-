
// // Food tip calculator
// food = Number(prompt('how much was the food?'))
// tipPercent = Number(prompt('tip %')/100)
// tipAmount = food*tipPercent
// total = food + tipAmount

// console.log("Tip: ", tipAmount)
// console.log("Total", total)
// // alert(tipAmount)



// // //Baby weather app (conditional)

// let weather = prompt("How is the weather?")
// if (weather == 'rainy') {
//  console.log("Grab your umbrella")
//  }
//   else {
//     console.log("Wear your sunglases")
//   }


// // function with no argument
//  function sayMyName() {
//    console.log('Redwan')
//  }

//  sayMyName()

// // //function with argument
//  function sayMyName2(name) {
//    console.log(name)
//  }
//  sayMyName2('Kibria')

// // //function with template literals
//  function greeting(name) {
//    greet = `hi ${name}, Nice to meet you!`
//    console.log(greet)
//  }
// // greeting('Redwan')


// // fucntion using return
// // function sum(a, b) {
// //   //return
// //   return a + b
// // }

// // num1 = sum(3,5)
// // console.log(num1)

// // // calculating total food bill with function
//  function calculateFoodTotal(food, tip) {
//    const tipPercent = tip / 100
//    const tipAmount = food * tipPercent
//    const total = sum(food, tipAmount)

//    return total
//  }

//  console.log(calculateFoodTotal(400, 20))

// // //ES6
// // //Arrow function =>
// // //arrow function with explicit return
//  const sumArrow = (a, b) => {
//    return a + b
//  }

// // // //arrow function with implicit return
//  const sum = (a, b) => a + b
//  console.log(sum(10, 20))


// //Math
//  function add(a, b) {
//   return a + b
//  }

//  console.log(add(5, 7))

//  function sub(a,b) {
//    return a - b
//  }

//  console.log(sub(8, 3))

//  function mult(a, b) {
//    return a*b
//  }

//  console.log(mult(4, 4))

//  function div(a, b) {
//    return a/b
//  }
//  console.log(div(9, 3))

//  function subs(a, b, c) {
//    return a - b + c
//  }

//  console.log(subs(1, 2, 3))


// // Arrays
//  const groceries = ['banana', 'apple', 'orange', 'pear' ]
//  console.log(groceries)
//  console.log(groceries[3])
//  groceries.push('mango')
//  console.log(groceries)

//  console.log(groceries.slice(1, 4))

//  console.log(groceries,indexOf('orange'))

// // // Objects 
//  const person = {name: 'Leonardo', shirt: 'white'}

//  console.log(person.shirt)
//  console.log(person['name'])

// // //assign object
//  person.phone = '11-22-333-4444'
//  console.log(person.phone)

//  console.log(person)

// // //person 2 
//  const person2 = {name: 'Redwan', shirt: 'Grey'}
//  console.log(person2)

//  console.log(person2.name) 

//  const introducer = (name, shirt) => {
//    const person = {
//      name: name,
//      shirt: shirt,
//      assets: 100000,
//      liabilities: 50000,
//      netWorth: function() {
//      return this.assets - this.liabilities
//      }
//    }
  
//    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is ${person.netWorth()}`

//    return intro
//  }

//  console.log(introducer('Redwan', 'Grey'))

// // For loops

//  const fruits = ['apple', 'banana', 'orange', 'mango', 'blueberry', 'peach', 'pear']
//   for (let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i])
//  }

//  for (const fruit of fruits) {
//    console.log(fruits)
//  }

//  const double = (numbers) => {
//    let result = []
//    for (const number of numbers) {
//      result.push(number ** 2)
//    }

//    return result
//  }

//  console.log (double([1, 2, 3, 4, 5 ,6])) 

//  const letterCounter = () => {
  

//   for (const letter of phrase){
//     console.log(letter)
//   } 

//    for (const letter in phrase){
//      console.log(index)
//      result = index
//    }
//  }
//  const phrase = prompt('write your phrase')
//  console.log(letterCounter(phrase))



//  const suArray = (numbers) => {
//    let result = 0;

//    for (const number of numbers ) {
//      console.log(number)
//      result = result + number
//    }
//    return {result}
//  }
//  const nums = [1, 2, 3, 4, 5]
//  console.log(suArray(nums))


//  const sumA = (numbers) => {
//    let result = 0;

//    for (const number of numbers) {
//      console.log(number)
//      result = result + number
//    }
//    return {result}
//  }

//  const nums = [2, 4, 6, 8, 10]
//  console.log(sumA(nums))

//  const max = (numbers) => {
//    let result = numbers [0]

//    for(const number of numbers){
//      if(number > result){
//        result = number 
//      }
//    }

//    return {result}
//  }

//  console.log(max([1, 2, 3, 4, 5, 3, 4, 9, 2]))

//  const letterFrequency = (phrase) => {
//    console.log(phrase)
//    //make a frequency object {}
//    let frequency = {}
//    for(const letter of phrase){
//      console.log(letter)

//      //check if letter exists in frequency
//      if(letter in frequency){
//      //increment the value by +1
//        frequency [letter]++ 
//      }else {
//       //else set the value to 1
//        frequency[letter] =1
//      }

//    }
//    return frequency
//  }

//  console.log(letterFrequency('Hit him like a hitter!'))


//  const wordFreq = (phrase) => {

//    let freq = {}
//    const words = phrase.split(' ')

//    console.log(words)
//    for(const word of words) {
//      console.log(word)

//      if(word in freq){
//        freq[word]++
//      } else {
//        freq[word] = 1
//      }
//    }

//    return freq
//  }

//  console.log(wordFreq('yo yo yo what up yo'))

//  const wordFreq = (phrase) => {
//    const words = phrase.split(' ')
//    return letterFrequency(words)
//  }

//  console.log(wordFreq('yo yo yo what up yo'))

// // Higher order functions
// // map -loops and returns an array
// // filter
// // reduce


// let result = [1, 2, 3, 4].map(number => number * 2 )
// console.log(result)


