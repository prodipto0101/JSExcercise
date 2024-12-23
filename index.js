// 1. Reverse a String
// Write a function reverseString that takes a string as input and returns the reversed string.

var reverseString = (StringValue) => {
  return StringValue.split("").reverse().join("");
};
console.log(reverseString("Reverse String"));
