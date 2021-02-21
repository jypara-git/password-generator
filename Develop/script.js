// Assignment code here
var generatePassword = function() {
  var promptLength = window.prompt("How long would you like your password to be? Provide a number between 8 and 128.");
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("You need to provide the valid answer. Please try again.");
    return generatePassword();
  }
  var special = window.confirm("Click OK to confirm you would like to include special characters.");
  var lowercase = window.confirm("Click OK to confirm you would like to include lowercase characters.");
  var uppercase = window.confirm("Click OK to confirm you would like to include uppercase characters.");
  var numbers = window.confirm("Click OK to confirm you would like to include numbers.");
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
