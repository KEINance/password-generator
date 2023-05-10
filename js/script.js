// Assignment Code
// Write password to the #password input

var generateBtn = document.querySelector("#generate");   
var password = document.querySelector("#password");

var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// add promtps and confirms for user to make character choices
alert("Please, choose password options!");

var possibleCharacters = [];
var result = [];

// choose chacters at random func
function generatePassword() {

var confirmUpperCase = confirm(
    "Would you like upper case characters?", 
    "Press okay for 'yes', cancel for 'no'"
);
var confirmLowerCase = confirm(
    "Would you like lower case characters?", 
    "Press okay for 'yes', cancel for 'no'"
);
var confirmNumber = confirm(
    "Would you like number characters?", 
    "Press okay for 'yes', cancel for 'no'"
);
var confirmSymbol = confirm(
    "Would you like symbol characters?", 
    "Press okay for 'yes', cancel for 'no'"
);

var passwordLength = prompt(
    "What character length would be prefered between 8-128?", 
);

if (confirmUpperCase === true) {
    possibleCharacters = possibleCharacters.concat(upperCase);
}
if (confirmLowerCase === true) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
} 
if (confirmNumber === true) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
}
if (confirmSymbol === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
}

for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length); // returns number index
    var indexValue = possibleCharacters[randomIndex]; // converts number index to true character value
    result.push(indexValue);
    console.log(result);
}
    return result.join("");
  };

  // Write password to the #password input
function writePassword() {                         
    var length = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
