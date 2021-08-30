// Assignment code here
const randomPass = {
  small: lowerCase,
  big: upperCase,
  number: numberCase,
  symbol: specialCase
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
generateBtn.addEventListener("click", writePassword) {
  const length = 
}

function lowerCase() {
   return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
}

function upperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
}
function numberCase() {
  return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
}
function specialCase() {
  const special = '@!%^&*$)#*><?/:;[]{}|';
  return special[Math.floor(Math.random() * special.length)];
}
console.log(specialCase());