// Assignment Code
// Write password to the #password input
//result
var generateBtn = document.querySelector("#generate");     //HERE
var password = document.querySelector("#password");
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "1234567890";
var symbolChars = "!@#$%^&**(){}[]<>/?";
var length = "length";
var result = "result"


var random = {
    "lower" : getRandomLower,
    "upper" : getRandomUpper,
    "number" : getRandomNumber,
    "symbol" : getRandomSymbol,
}

//define length
(function() {
    ("password").html(length.val());
    length.on("change", function(){
        ("password").html((this).val())
    });

})

// need to create function for genpass
// add promtps and confirms for user choice in characters for password
//validate input 
//gen password off criteria
generateBtn("click", function){
    var length = length.valueOf;
    var lowerCaseChars = lowerCaseChars.checked;
    var upperCaseChars = upperCaseChars.checked;
    var numberChars = numberChars.checked;
    va
    symbolChars 
    symbolChars.checked;

generateBtn.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbols,
        length
        );
};

function generatePassword(hasLower, hasUpper, hassymbol, hasNumber) {
    var generatePasswordStr = "";
    var typeArr = {
        "lower" : lower,
        "upper" : upper,
        "number" : number,
        "symbol" : symbol,
    }
};

for(let i = 0; i < length; i++) {
        each(typesArr, function(key, value)) {
            if(value != false){
                var functionname = key;
                generatePasswordSTr += random{functionName}();
            }
        }
      var finalPassword = generatePasswordStr.slice(0, length);
      return finalPassword;
        
    };

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26)+ 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26)+ 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10)+ 48);
}
function getRandomSymbol() {
    var symbolChars = "!@#$%^&**(){}[]<>/?";
    // return[math.Floor(Math.random() * symbols.length)]
     String.fromCharCode[Math.floor(Math.random)() = symbols.length];
}

function writePassword() {                          //HERE
    var length = generatePassword();
    var passwordText = document.querySelector("#password");
    document.querySelector("password").textContentext = password;    //blue is extra
}



// add promtps and confirms
alert ("Please, choose password options!");

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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);        // HERE
