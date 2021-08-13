// Variable arrays for all catergores need to create a password
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var numericalCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Initial password ask to user to initiate input process 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

function generatePassword() {
    var pwdLength = prompt("This generators allows only a number of charaters starting from 8 to 128 -- How long is your password?");
    console.log(pwdLength);

while(pwdLength < 8 || pwdLength > 128) {
    var pwdLength = prompt("This generators allows only a number of charaters starting from 8 to 128 -- How long is your password?");
    console.log(pwdLength);
    }
}
passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
  
// themeSwitcher.addEventListener("click", function() {
//     // If mode is dark, apply light background
//     if (mode === "dark") {
//       mode = "light";
//       container.setAttribute("class", "light");
//     }
//     // If mode is light, apply dark background 
//     else {
//       mode = "dark";
//       container.setAttribute("class", "dark");
//     }
//   });