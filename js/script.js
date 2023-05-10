// Assignment Code
// Write password to the #password input
//result
var generateBtn = document.querySelector("#generate");     //HERE
var password = document.querySelector("#password");

// add promtps and confirms
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
function generatePassword(){
    return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
};

function passwordGenerator(num) {
    var password = '';
    for (var i = 0; i < num; i++) {
      password += getPasswordCharacter();
    }
    return password;
  };

function writePassword(num) {                         
    var length = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
