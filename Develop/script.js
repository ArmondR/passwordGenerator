// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // ask client to confirm and records answer
  var clientResponse= window.confirm("Would you like to create a new password?");
  var length = 0;
  var characters = "";

  if(clientResponse){
    length = passwordLength();
    characters = chooseCharacters();
  };
  
console.log(length);
console.log(characters);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// password length option prompts
var passwordLength = function(){
  var lengthInput = window.prompt("How many characters would you like to have? You must choose a value between 8 and 128.")
  if(lengthInput >= 8 && lengthInput <= 128){
    return lengthInput;
  }
  else {
    window.alert("You must choose a value between 8 and 128.");
    passwordLength();
  }
};

// characters option prompts
  var chooseCharacters = function() {

    
     var lowerCase = "";
     var upperCase = "";
     var numeric = "";
     var special = "";

   lowerCase = window.confirm("Would you like to use lowercase characters?");
   if(lowerCase) {
     lowerCase = "abcdefghijklmnopqrstuvwxyz";
   }
   upperCase = window.confirm("Would you like to use uppercase characters?");
   if(upperCase) {
     upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }
   numeric = window.confirm("Would you like to include numeric values?");
   if(numeric){
     numeric = "0123456789";
   }
   special = window.confirm("Would you like to include special characters?");
   if(special){
     special = "@!#$%^&*=+></";
   }
   return lowerCase + upperCase + numeric + special
 };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

