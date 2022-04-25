// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0","1","2","3","4","5","6","7","8","9"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

function question() {
  var isValid = false;
  do {
    var pwdLength = parseInt(prompt("Please choose a length between 8 and 128 characters"));
    var pwdNumber = confirm("Would you like to include numbers?");
    var pwdLower = confirm("Would you like to include lowercase letters?");
    var pwdUpper = confirm("Would you like to include uppercase letters?");
    var pwdSpecial = confirm("Would you like to include special characters?");
    var responses = { 
      pwdLength: pwdLength,
      pwdLower: pwdLower,
      pwdNumber: pwdNumber,
      pwdUpper: pwdUpper,
      pwdSpecial: pwdSpecial
    }
    if ((pwdLength < 8) || (pwdLength > 128))
    alert ("Choose a number between 8 and 128");
    else if ((!pwdNumber)&&(!pwdLower)&&(!pwdUpper)&&(!pwdSpecial))
    alert ("You must choose at least one option");
    else isValid = true;
    
  } while (!isValid);
    return responses;
  }

  function generatePassword() {
    var options = question();
    var combo = [];
    var securePassword = "";

    if (options.pwdLower) {
      for (var i of lower)
        combo.push(i);
    }
    if (options.pwdNumber) {
      for (var i of number)
        combo.push(i);
    }
    if (options.pwdUpper) {
      for (var i of upper)
        combo.push(i);
    }
    if (options.pwdSpecial) {
      for (var i of special)
        combo.push(i);
    }

    for (var i = 0; i < options.pwdLength; i++) {
      securePassword += combo[Math.floor(Math.random()*combo.pwdLength)];
    }
    return securePassword;
  

  }













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
