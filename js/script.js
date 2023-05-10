// Assignment Code
// Write password to the #password input

var generateBtn = document.querySelector("#generate");   
var password = document.querySelector("#password");

// add promtps and confirms for user to make character choices
alert("Please, choose password options!");

confirm(
    "Would you like upper case characters?", 
    "Press okay for 'yes', cancel for 'no'"
);
confirm(
    "Would you like lower case characters?", 
    "Press okay for 'yes', cancel for 'no'"
);
confirm(
    "Would you like number characters?", 
    "Press okay for 'yes', cancel for 'no'"
);
confirm(
    "Would you like symbol characters?", 
    "Press okay for 'yes', cancel for 'no'"
);
prompt(
    "What character length would be prefered between 8-128?", 
);

// choose chacters at random func
function generatePassword() {
    {return String.fromCharCode(Math.floor(Math.random() * 77) + 34)};

    {return String.fromCharCode(Math.floor(Math.random() * 26) + 97)};

    {return String.fromCharCode(Math.floor(Math.random() * 10) + 48)};
    
    {const symbols = "!@#$%^&*(){}[]=<>/,.";
        return symbols[Math.floor(Math.random() * symbols.length)]};
};

// allow password to be generated and returned
function passwordGenerator(num) {
    var result = '';
    for (var i = 0; i < num; i++) {
      result += generatePassword();
    }
    return result;
  };

  // Write password to the #password input
function writePassword() {                         
    var length = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
