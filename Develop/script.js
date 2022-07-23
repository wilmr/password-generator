// Assignment code here
var passwordLength = 0;
var passwordLengthOK = false;
var lowercaseStatus;
var lowercaseStatusCheck;
var uppercaseStatus = false;
var uppercaseStatusCheck;
var numberStatus = false;
var numberStatusCheck;
var specialCharStatus = false;
var specialCharStatusCheck;


function errorPrompt() {
  window.alert("Please enter a valid input.")
}

function validateUserChoice(userChoice) {
  if (userChoice !== 'yes' && userChoice !== 'YES' && userChoice !== 'no' && userChoice !== 'NO') {

    return false;
  } 
}

// onlyDigits Function from StackOverflow user Scott Evevrden
// https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits 

function onlyDigits(val) {
  let isnum = /^\d+$/.test(val);
  return isnum;
}

function userPrompts() {
  passwordLength = prompt("Enter a length for your password [8 - 128]");
  while (passwordLengthOK === false) { 
    var isDigit = onlyDigits(passwordLength);
    if (passwordLength < 8 || passwordLength > 128 || isDigit === false) {
      errorPrompt();
      passwordLength = prompt("Enter a length for your password [8 - 128]");
    } else {
      passwordLengthOK = true;
      break;
    }
  }

    while (validateUserChoice(lowercaseStatusCheck) === false) {
      lowercaseStatusCheck = prompt("Would you like your password to contain lowercase letters? Enter YES or NO.");
        if (lowercaseStatusCheck === 'YES' || lowercaseStatusCheck === 'yes') {
          return lowercaseStatus = true;
          
          break;
        } else if (lowercaseStatusCheck === 'NO' || lowercaseStatusCheck === 'no') {
          lowercaseStatus = false;
          break;  
        } else {
          errorPrompt();
        }
    }
    console.log(lowercaseStatus);

  while (validateUserChoice(uppercaseStatusCheck) === false) {
    uppercaseStatusCheck = prompt("Would you like your password to contain lowercase letters? Enter YES or NO.");
      if (uppercaseStatusCheck === 'YES' || uppercaseStatusCheck === 'yes') {
        uppercaseStatus = true;
        break;
      } else if (uppercaseStatusCheck === 'NO' || uppercaseStatusCheck === 'no') {
        lowercaseStatus = false;
        break;  
      } else {
        errorPrompt();
      }
    }
  console.log(uppercaseStatus);

  while (validateUserChoice(numberStatusCheck) === false) {
    numberStatusCheck = prompt("Would you like your password to contain lowercase letters? Enter YES or NO.");
      if (numberStatusCheck === 'YES' || numberStatusCheck === 'yes') {
        numberStatus = true;
        break;
      } else if (numberStatusCheck === 'NO' || numberStatusCheck === 'no') {
        numberStatus = false;
        break;  
      } else {
        errorPrompt();
      }
  }

  console.log(numberStatus);

  while (validateUserChoice(specialCharStatusCheck) === false) {
    specialCharStatusCheck = prompt("Would you like your password to contain lowercase letters? Enter YES or NO.");
      if (specialCharStatusCheck === 'YES' || specialCharStatusCheck === 'yes') {
        specialCharStatus = true;
       
        break;
      } else if (specialCharStatusCheck === 'NO' || specialCharStatusCheck === 'no') {
        specialCharStatus = false;
        break;  
      } else {
        errorPrompt();
      }
  }
  console.log(specialCharStatus);

}

console.log(lowercaseStatus)

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  const special = '`~!@#$%^&*()-_=+{}[];:<>,.?/';
  return special[Math.floor(Math.random() * special.length)];
}

const randomFunc = {
  lowercase: getRandomLowerCase,
  uppercase: getRandomLowerCase,
  number: getRandomNumber,
  special: getRandomSpecial
}

function generatePassword(lowercaseStatus, uppercaseStatus, numberStatus, specialCharStatus, length) {
  userPrompts();

 lowercaseStatus = lowercaseStatus;   
  const typesCount = lowercaseStatus + uppercaseStatus + numberStatus + specialCharStatus;

  console.log('typesCount:', typesCount);

  console.log(lowercaseStatus);


  var generatedPassword = '';




 



  

  // 4. Display generated password to page.
  return generatedPassword;
}



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
