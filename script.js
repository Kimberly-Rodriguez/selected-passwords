var generateBtn = document.querySelector("#generate");

// Variable arrays for all catergores need to create a password
var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "‘",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var generatePassword = [];
var finalSelection = [];

// Initial password ask to user to initiate input process
function writePassword() {
  var password = userSelection();
  var passwordText = document.querySelector("#password");
  //
  // User answering the prompt

  var solution = (passwordText.value = password);
}

function userSelection() {
  var pwdLength = prompt(
    "This generators allows only a number of charaters starting from 8 to 128 -- How long is your password?"
  );
  console.log(pwdLength);
  // find a way to change pwdLength to a number datatype
  // user confirming all possible criterias
  if (pwdLength < 8 || pwdLength > 128) {
    alert(
      "This generators allows only a number of charaters starting from 8 to 128 -- How long is your password?"
    );
    console.log(pwdLength);
    return;
  }
        var allCharacters = ["lower case", "upper case", "number", "special character"] 
        
        for (let i = 0; i < allCharacters.length; i++) {
            var kindResult = confirm("Do you want " + allCharacters[i]+ "value?");
            console.log(kindResult);
           
            //concatinate all arrays to generate a group of arrays

            if (allCharacters[i] === "lower case" && kindResult) {
                mainSelection = [].concat(lowercaseCharacters);
                console.log(mainSelection);
                finalSelection = [].concat(lowercaseCharacters[Math.floor(Math.ramdom() * lowercaseCharacters.length)]);
                console.log(finalSelection);
            }
            else if (allCharacters[i] === "upper case" && kindResult) {
                mainSelection = wholeSelector.concat(uppercaseCharacters);
                console.log(mainSelection);
                finalSelection = [].concat(uppercaseCharacters[Math.floor(Math.ramdom() * uppercaseCharacters.length)]);
                console.log(finalSelection);
            } 
            else if (allCharacters[i] === "number" && kindResult) {
                mainSelection = wholeSelector.concat(numericalCharacters);
                console.log(mainSelection);
                finalSelection = [].concat(numericalCharacters[Math.floor(Math.ramdom() * numericalCharacters.length)]);
                console.log(finalSelection);
            }
            else (allCharacters[i] === "special character" && kindResult) 
                mainSelection = wholeSelector.concat(specialCharacters);
                console.log(mainSelection);
                finalSelection = [].concat(specialCharacters[Math.floor(Math.ramdom() * specialCharacters.length)]);
                console.log(finalSelection);
        }

  // THEN my input should be validated and at least one character type should be selected

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


