// Enables random password generate 
// multiple screen sizes.
// The password can include special characters. 
// (https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.
// Assignment Code
//upper, lower, numbers and special
//ALERTS!!!!! for the window pop ups
const generateBtn = document.querySelector("#generate");
const generateText = document.querySelector("#password");
const result = document.querySelector("#result");
const passLength = document.querySelector("#length");
const includeUpperCase = document.querySelector("#uppercase");
const includeLowerCase = document.querySelector("#lowercase");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");

passLength.addEventListener("change", (event) => {
    passLengthResult.innerText = event.target.value;
});

function getRandomLower() {
    return String.fromCharCode(math.Floor(Math.random() *26)+ 97);
}

function getRandomUpper() {
    return String.fromCharCode(math.Floor(Math.random() *26)+ 65);
}

function getRandomNumber() {
    return String.fromCharCode(math.Floor(Math.random() *10)+ 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]<>"
    return[math.Floor(math.Random() * symbols.length)]
     String.fromCharCode(math.Floor(Math.random() *10)+ 48);
}
 console.log(String.fromCharCode(math.Floor(Math.random() *26)+ 97));

