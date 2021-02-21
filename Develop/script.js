
// Assignment code here
var generatePassword = function() {
  var specialCharacters = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var lowercaseCharacters = "qwertyuiopasdfghjklzxcvbnm".split("");
  var uppercaseCharacters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  var numbersCharacters = "1234567890".split("");

  var promptLength = window.prompt("How long would you like your password to be? Provide a number between 8 and 128.");
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("You need to provide the valid answer. Please try again.");
    return generatePassword();
  }
  var special = window.confirm("Click OK to confirm you would like to include special characters.");
  var lowercase = window.confirm("Click OK to confirm you would like to include lowercase characters.");
  var uppercase = window.confirm("Click OK to confirm you would like to include uppercase characters.");
  var numbers = window.confirm("Click OK to confirm you would like to include numbers.");
  var characters = [];
  if (special) {
     characters.push("special");
  }
  if (lowercase) {
    characters.push("lowercase");
  }
  if (uppercase) {
    characters.push("uppercase");
  }
  if (numbers) {
    characters.push("numbers");
  } 
  if (characters.length === 0) {
    window.alert("Your password must contain at least one of the character types! Please try again.");
    return generatePassword();
  }
  var currentPassword = "";
  while(currentPassword.length < promptLength) {
    var randomCharacterType = characters[randomNumber(0, characters.length - 1)];
    if (randomCharacterType === "special") {
      var value = specialCharacters[randomNumber(0, specialCharacters.length - 1)];
      currentPassword = value.concat(currentPassword);
    }
    if (randomCharacterType === "lowercase"){
      var value = lowercaseCharacters[randomNumber(0, lowercaseCharacters.length - 1)];
      currentPassword = value.concat(currentPassword);
    }
    if (randomCharacterType === "uppercase") {
      var value = uppercaseCharacters[randomNumber(0, uppercaseCharacters.length - 1)];
      currentPassword = value.concat(currentPassword);
    }
    if (randomCharacterType === "numbers") {
      var value = numbersCharacters[randomNumber(0, numbersCharacters.length - 1)];
      currentPassword = value.concat(currentPassword);
    }
  }
  return currentPassword;
};

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
