// Assignment code here

  // initialize arrays of characters (numbers, letters, special char)
var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //length = 26
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]; //length = 13
var number = ["1","2","3","4","5","6","7","8","9","0"]; //length = 10
var password = [""];

//ask questions in order and save the userinput values
function generatePassword(){
  //tell user what questions they are going to be asked to start thinking about beforehand
  window.confirm("Welcome to password generator! You are going to be asked for a desired password length and what characters you would like to include.");
  var lengthPassword = function(){
    //ask user to specify their desired length
    var length = window.prompt("Choose a size between 8 and 128 characters for your password.");
    length = parseInt(length); //convert to integer from string

    // make sure password length is within the required sizes
    if(length >7 && length < 129){ 
      console.log(length); //show answer in log to make sure it is working
      return length;
    } else{
      alert("Please enter a valid answer!");
      lengthPassword();
    }
  }
  length = lengthPassword(); //outputs desired password length as an integer

  var confirmSpecial = window.confirm("Would you like special characters to be included?");
  var confirmCapital = window.confirm("Would you like capital letters to be included?");
  var confirmLower = window.confirm("Would you like lower case letters to be included?");
  var confirmNumber = window.confirm("Would you like numbers to be included?");
  

  //take user input and create password based off of their answers
    if (confirmSpecial && confirmCapital && confirmLower && confirmNumber){
      console.log("use all cases");
      for (i = 0;i < length; i++){
        var charChooser = Math.floor(Math.random()*4) + 1; //pick a number for the case
        console.log(charChooser);
        switch(charChooser){
          case 1: //assign special to password
            password[i] = special[Math.floor(Math.random()*13)+1];
            break;
          case 2: //assign capital letter to password
            password[i] = letter[Math.floor(Math.random()*13)+1].toUpperCase();
            break;
          case 3: //assign lower case letter to password
            password[i] = letter[Math.floor(Math.random()*13)+1];
            break;
          case 4: //assign number to password
            password[i] = number[Math.floor(Math.random()*13)+1];
            break;
        }
      }
      console.log(password);
    }
    else if (!confirmSpecial && confirmCapital && confirmLower && confirmNumber){
      console.log("use everything except specials");
    }
    else if(confirmSpecial && !confirmCapital && confirmLower && confirmNumber){
      console.log("use all except capital");
    }
    else if (confirmSpecial && confirmCapital && !confirmLower && confirmNumber){
      console.log("use all except Lower");
    }
    else if (confirmSpecial && confirmCapital && confirmLower && !confirmNumber){
      console.log("use all except number");
    }

    password = password.join("");
    console.log("the final answer is " + password);
    return password;
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
