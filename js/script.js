// Assignment Code
var generateBtn = document.querySelector("#generate");


lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numberChars = "1234567890";
specialChars = "!@#$%^&**(){}[]<>/?";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function length () {
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
    var length = length.value;
    var hasLower = lowerCaseChars.checked;
    var hasUpper = upperCaseChars.checked;
    var hasNumber = numberChars.checked;
    var hasSymbols = specialChars.checked;

    generateBtn.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbols);
};

generateBtn.addEventListener("click", writePassword);{

function getRandomLower() {
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    return String.fromCharCode(math.Floor(Math.random() *26)+ 97);
}

function getRandomUpper() {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return String.fromCharCode(math.Floor(Math.random() *26)+ 65);
}

function getRandomNumber() {
    var numbers = "1234567890";
    return String.fromCharCode(math.Floor(Math.random() *10)+ 48);
}

function getRandomSymbol() {
    var symbols = "!@#$%^&**(){}[]<>/?";
    return[math.Floor(math.Random() * symbols.length)]
     String.fromCharCode(math.Floor(Math.random() *10)+ 48);
}
}
