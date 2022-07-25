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
var typesCount;
var typesArr;

// displays error alert to screen

function errorPrompt() {
  window.alert("Please enter a valid input.")
}

// validated user input for prompts

function validateUserChoice(userChoice) {
  if (userChoice !== 'yes' && userChoice !== 'YES' && userChoice !== 'no' && userChoice !== 'NO') {

    return false;
  } 
}

// onlyDigits Function from StackOverflow user Scott Evevrden
// https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits 
// will check if user input is only a digit and not a string

function onlyDigits(val) {
  let isnum = /^\d+$/.test(val);
  return isnum;
}

//using fromCharCode to randomize password attributes

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
  const special = '~!@#$%^&*()-_=+{}[];:<>,.?/';
  return special[Math.floor(Math.random() * special.length)];
}



function generatePassword() {

  // key pair object to will get overwritten with random values everytime generatePassword() is called.
  const randomFunc = {
    lowercaseStatus: getRandomLowerCase,
    uppercaseStatus: getRandomUpperCase,
    numberStatus: getRandomNumber,
    specialCharStatus: getRandomSpecial
  }

  //initialized password to empty string
  var generatedPassword = '';


  //beginning of prompts

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
          lowercaseStatus = true;
          break;
        } else if (lowercaseStatusCheck === 'NO' || lowercaseStatusCheck === 'no') {
          lowercaseStatus = false;
          break;  
        } else {
          errorPrompt();
        }
    }
   // console.log(lowercaseStatus);

  while (validateUserChoice(uppercaseStatusCheck) === false) {
    uppercaseStatusCheck = prompt("Would you like your password to contain uppercase letters? Enter YES or NO.");
      if (uppercaseStatusCheck === 'YES' || uppercaseStatusCheck === 'yes') {
        uppercaseStatus = true;
        break;
      } else if (uppercaseStatusCheck === 'NO' || uppercaseStatusCheck === 'no') {
        uppercaseStatus = false;
        break;  
      } else {
        errorPrompt();
      }
    }
  //console.log(uppercaseStatus);

  while (validateUserChoice(numberStatusCheck) === false) {
    numberStatusCheck = prompt("Would you like your password to contain numbers? Enter YES or NO.");
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

  //console.log(numberStatus);

  while (validateUserChoice(specialCharStatusCheck) === false) {
    specialCharStatusCheck = prompt("Would you like your password to contain special characters? Enter YES or NO.");
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
 // console.log(specialCharStatus);

 // END of prompts

 // count the number of attributes that are true
  typesCount = lowercaseStatus + uppercaseStatus + numberStatus + specialCharStatus;

 // array of only TRUE attributes
  typesArr = [{lowercaseStatus}, {uppercaseStatus}, {numberStatus}, {specialCharStatus}].filter(item => Object.values(item)[0])
 // console.log(typesCount)

 // if user doesn't select any attributes besides length, then array will return empty
  if (typesCount === 0) {
    return '';
  }

// loop through user input length

  for(let i=0; i<passwordLength; i+=typesCount) {
    // for each "type" in typesArr
    // append to generatedPassword with its value pair of the associated type.
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}


  // 4. Display generated password to page.
  // .slice is used here to slice keep true user input length even if user choice is a length of 1 < 4 
  return generatedPassword.slice(0, passwordLength);
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
