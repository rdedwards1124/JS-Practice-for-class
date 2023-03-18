// Lesson Companion (js-9-regular-expressions)

// Exercise 1: Regular Expression
// Write a regular expression that will match the word "rabbit" every time it is used in a string, regardless of casing.

let regex = /rabbit/ig


// Exercise 5: replace()
// Using the given regular expression and string, replace all instances of "rabbit" to "bird".

let str = "Did you know most rabbits can fly and some rabbits can even mimic human speech?"
let regex = /rabbit/g

replacedStr = str.replace(regex, 'bird')










