// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Function to show prompts and confirm boxes for the user
function questions() {
  var isValid = false;
  do { //ParseInt to convert letters to integers
    var length = parseInt(prompt("Please choose a password length between 8 and 128 characters"));
    var pwdNumber = confirm("Would you like your password to include numbers?");
    var pwdLower = confirm("Would you like your password to include lower case letters?");
    var pwdUpper = confirm("Would you like your password to include upper case letters?");
    var pwdSpecial = confirm("Would you like your password to include special characters?");
    var responses = {
      //List of all input values
      length: length,
      pwdNumber: pwdNumber,
      pwdLower: pwdLower,
      pwdUpper: pwdUpper,
      pwdSpecial: pwdSpecial

    } 
    if((length < 8)||(length > 128))
    alert("Please choose number between 8 and 128");//Textbox to tell user to pick a valid number between 8 and 128 if an option outside is picked

    else if((!pwdNumber)&&(!pwdLower)&&(!pwdUpper)&&(!pwdSpecial))
    alert("Must choose at least one type.");
    
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {

  var options = questions();
  var combo = [];
  var finalPassword = "";



  if (options.pwdNumber) {
    for (var i of number)
      combo.push(i);
  }

  if (options.pwdLower) {
    for (var i of lower)
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




  for (var i = 0; i < options.length; i++) {
    finalPassword += combo[Math.floor(Math.random() * combo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
