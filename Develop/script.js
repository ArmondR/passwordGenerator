// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var clientResponse= window.confirm("Would you like to create a new password?");
  var length = 0;
  var characters = "";
  var password = "";

  if(clientResponse){
    length = passwordLength();
    characters = chooseCharacters();
  };
  
console.log(length);
console.log(characters);

// randomly iterates through generated string to create random password
for(var i = 0; i < length; i++ ){
  var randomNumber = Math.floor(Math.random() * characters.length);
  var randomChar = characters[randomNumber];
  password = password + randomChar; 
 }

return password
}

// Write password to the #password input
function writePassword() {

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

 
  var chooseCharacters = function() {
    
     var lowerCase = "";
     var upperCase = "";
     var numeric = "";
     var special = "";

     //conditions for lowercase characters
   lowerCase = window.confirm("Would you like to use lowercase characters?");
   if(lowerCase) {
     lowerCase = "abcdefghijklmnopqrstuvwxyz";
   }
   else if (!lowerCase){
    lowerCase = "";
   }

   //conditions for uppercase characters
   upperCase = window.confirm("Would you like to use uppercase characters?");
   if(upperCase) {
     upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }
   else if (!upperCase) {
     upperCase = "";
   }

   // conditions for numeric characters
   numeric = window.confirm("Would you like to include numeric values?");
   if(numeric){
     numeric = "0123456789";
   }
   else if(!numeric) {
     numeric = "";
   }

   // conditions for special characters
   special = window.confirm("Would you like to include special characters?");
   if(special){
     special = "@!#$%^&*=+></";
   }
   else if(!special) {
     special = "";
   }

   return lowerCase + upperCase + numeric + special
 };

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

