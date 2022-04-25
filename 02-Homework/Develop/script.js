// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0123456789"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];
var special = ["!#$%&'()*+,-./:;<=>?@\"[]^_`{|}~"];

function question() {
  var isValid = false;
  do {
    var pwdlength = parseInt(prompt("Please choose a length between 8 and 128 characters"));
    
    
  } while (!isValid);
  return responses;
  }













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
