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

// 3. FizzBuzz
// Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; and for multiples of both, print "FizzBuzz."

var FuzBuz = (number) => {
  var output = "";
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0) output += " Fuzz";
    else if (i % 5 === 0) output += " Buzz";
    else output += ` ${i}`;
  }
  console.log(output);
};
FuzBuz(10);
