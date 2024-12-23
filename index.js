// 1. Reverse a String
// Write a function reverseString that takes a string as input and returns the reversed string.

var reverseString = (StringValue) => {
  return StringValue.split("").reverse().join("");
};
console.log(reverseString("Reverse String"));

// 2. Check for Palindrome
// Write a function isPalindrome that checks if a given string is a palindrome.

var isPalindrom = (StringValue) => {
  StringValue === StringValue.split("").reverse().join("")
    ? console.log(StringValue + " is a Palindrom")
    : console.log(StringValue + " is not a Palindrom");
};
console.log(isPalindrom("ABCDIDCBA"));
