// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userInput = window.prompt("Enter the length of your desired password. Length must be at least 8 up to 128 ( 8>= <=128 )")
  

  while (userInput >= 8 && userInput <= 128){
    var specialChars = "!@#$%^&*()_+<>:[]{}\|/?`~";
    var charNumb = userInput;
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRTUVWXYZ";
    var numbers = "0123456789";
    console.log(charNumb);
    var passwordString = "";

    var wantLower = window.confirm("If you want lowercase letters click ok, if not click cancel");
    console.log(wantLower);
    if (wantLower == true){
      passwordString += lowerCase;
    };
    var wantUpper = window.confirm("If you want uppercase letters click ok, if not click cancel");
    console.log(wantUpper);
    if (wantUpper == true){
      passwordString += upperCase;
    };
    var wantSpec = window.confirm("If you want special characters click ok, if not click cancel");
    console.log(wantSpec);
    if (wantSpec == true){
      passwordString += specialChars;
    };
    var wantNumbs = window.confirm("If you want numbers click ok, if not click cancel");
    console.log(wantNumbs);
    if (wantNumbs == true){
      passwordString += numbers;
    };
    console.log(passwordString);
    
    const stringArray = passwordString.split("");
    stringArray.sort();
    stringArray.reverse();
    stringArray.sort(function(a, b){return 0.5 - Math.random()});
    const newArray = stringArray.slice(0,userInput);
    console.log(stringArray);
    console.log(newArray);

    const genPassword = newArray.join("");
    console.log(genPassword);
    window.alert("Your new password is " + genPassword);
    userInput = 7;
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
