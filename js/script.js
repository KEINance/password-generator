// Enables random password generate 
// multiple screen sizes.
// The password can include special characters. 
// (https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.
// Assignment Code
//upper, lower, numbers and special
//ALERTS!!!!! for the window pop ups
const generateBtn = document.querySelector("#generate");
const generateText = document.querySelector("#password");
const resultEl = document.querySelector("result");
const lengthEL = document.querySelector("length");
const upperCaseEL = document.querySelector("uppercase");
const lowerCaseEL = document.querySelector("lowercase");
const numbersEL = document.querySelector("numbers");
const symbolsEL = document.querySelector("symbols");

const retrievefunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

generateBtn.addEventListener("click",() => {
    const length = length.value;
    const hasLower = lowerCaseEl.checked;
    const hasUpper = upperCaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;

    resultEl.innerText = generateBtn(
        hasLower, 
        hasUpper, 
        hasNumbers, 
        hasSymbols,
        length);
});

// password criteria
// length between 8 - 128 chara
// character types
// lower, upper case, symbols, and numbers
// once answered, at least one prompt should be answered
// must answer all ** my choice

const userChoice = window.alert("Choose password criteria for a strong password!")

resultEl = confirm("Would you like upper case included? Okay = 'yes' Cancel = 'no'");
resultEl = confirm("Would you like lower case included? Okay = 'yes' Cancel = 'no'");
resultEl = confirm("Would you like symbols/special characters included?Okay = 'yes' Cancel = 'no'");
resultEl = confirm("Would you like numbers included? Okay = 'yes' Cancel = 'no'");

// generate password in alert ortext box

const generateText = document.querySelector("password");

function generateText() {
    const chars =
    "1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 8;
    const password = "";

    for (const i = 0; i <= passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length);
        passwoord += chars.substring(randomNumber, randomNumber +1)
    }
    document.querySelector("password").value = password;
}


function generateBtn(lower, upper, number, symbol, length) {
    let generatedText = '';

    const typesCount = lower + upper + number + symbol;
    console.log('typesCount:', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
         item => Object.values(item)[0] 
    );
if (typesCount === 0) {
        return '';
}
for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];
    generateText += randomFunc[funcName]();
    });
}
const finalText = generatedText.slice[0, length];
return finalText;
}

function getRandomLower() {
    lowecaseChars = "abcdefghijklmnopqrstuvwxyz";
    return String.fromCharCode(math.Floor(Math.random() *26)+ 97);
}

function getRandomUpper() {
    uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return String.fromCharCode(math.Floor(Math.random() *26)+ 65);
}

function getRandomNumber() {
    numberChars = "0123456789";
    return String.fromCharCode(math.Floor(Math.random() *10)+ 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>,.';
    return[math.Floor(math.Random() * symbols.length)]
     String.fromCharCode(math.Floor(Math.random() *10)+ 48);
}