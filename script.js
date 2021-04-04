// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLen;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var upperPrompt;
var numPrompt;
var symbolPrompt;

function passwordLength() {
  passwordLen = prompt("Password Length (8-128 Charaacters)");
    if (passwordLen<8) {
      alert("Password Length (8-128 Charaacters)");
      passwordLength();
    } else if (passwordLen>128) {
      alert("Password Length (8-128 Charaacters)");
      passwordLength;
    } else if (isNaN(passwordLen)) {
      alert("Password Length (8-128 Charaacters)");
      passwordLength;
    } else {
      alert("Next: Answer Y or N if you want Uppercase, numbers, and symbols in your password.")
    }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
