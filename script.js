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
var mainSelection = [];
var finalSelection = [];

// Initial password ask to user to initiate input process
function writePassword() {
  var password = userSelection();
  var passwordText = document.querySelector("#password");

  function userSelection() {
    var pwdLength = prompt(
      "This generators allows only a number of charaters starting from 8 to 128 -- How long is your password?"
    );
    console.log(pwdLength);
    pwdLength = parseInt(pwdLength);
    console.log(pwdLength);

    // checking that the number is less than 8 but greater than 128
    if (pwdLength < 8 || pwdLength > 128) {
      alert(
        "This generators allows only a number of charaters starting from 8 to 128 -- How long is your password?"
      );
      console.log(pwdLength);
    }

    var allCharacters = [
      "lower case",
      "upper case",
      "number",
      "special character"
    ];

    for (var i = 0; i < allCharacters.length; i++) {
      var kindResult = confirm("Do you want a " + allCharacters[i] + " value?");
      console.log(kindResult);

      //concatinate all arrays to generate a group of arrays

      if (allCharacters[i] === "lower case" && kindResult) {
        mainSelection = mainSelection.concat(lowercaseCharacters); // array3=array2.concat(array1)
        console.log(mainSelection);
        finalSelection = finalSelection.concat(
          lowercaseCharacters[
            Math.floor(Math.random() * lowercaseCharacters.length)
          ]
        ); // array3=array2.concat(array1[function])
        console.log(finalSelection);
      } else if (allCharacters[i] === "upper case" && kindResult) {
        mainSelection = mainSelection.concat(uppercaseCharacters);
        console.log(mainSelection);
        finalSelection = finalSelection.concat(
          uppercaseCharacters[
            Math.floor(Math.random() * uppercaseCharacters.length)
          ]
        );
        console.log(finalSelection);
      } else if (allCharacters[i] === "number" && kindResult) {
        mainSelection = mainSelection.concat(numericalCharacters);
        console.log(mainSelection);
        finalSelection = finalSelection.concat(
          numericalCharacters[
            Math.floor(Math.random() * numericalCharacters.length)
          ]
        );
        console.log(finalSelection);
      } else if (allCharacters[i] === "special character" && kindResult) {
        mainSelection = mainSelection.concat(specialCharacters);
        console.log(mainSelection);
        finalSelection = finalSelection.concat(
          specialCharacters[
            Math.floor(Math.random() * specialCharacters.length)
          ]
        );
        console.log(finalSelection);
      }
    }

    for (let i = finalSelection.length; i < pwdLength; i++) {
      finalSelection = finalSelection.concat(
        mainSelection[Math.floor(Math.random() * mainSelection.length)]
      );
      console.log(finalSelection);
    }

    finalSelection = finalSelection.join("");
    return finalSelection;
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
