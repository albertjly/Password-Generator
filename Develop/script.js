// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/*
/!**
 * Generate Password Automatically
 * @returns {string}
 *!/
function generatePassword(){
  var new_pwd = "";
  var pwdChar = 0;
  var char = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-{}[]+=\|/.!@#$%^&()_*';
  for (var i = 0; i < getRndInteger(8, 128); i++) {
    pwdChar = Math.floor(Math.random() * char.length);
    new_pwd += char.charAt(pwdChar);
  }
  return new_pwd;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
*/

function generatePassword(){
  // record the length of the password
  var pwdLength = window.prompt('Please type the length of the password: (Between 8 to 128)');
  var pwdLc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var pwdUc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var pwdN = ['0','1','2','3','4','5','6','7','8','9'];
  var pwdSc = ['-','{','}','[',']','+','=','|','/','.','!',"@","#","$","%","^","&","(",")","_","*"];
  // set a blank Array to contain what customer selects
  var pwdArr = [];
  // if custom chooses less than 8 or greater than 128
  if (pwdLength < 8 || pwdLength > 128){
    alert('At least 8 characters and no more than 128 characters!');
    return;
  }

  window.confirm('Please choose the character types: ');

  if (window.confirm('Do you choose: Lowercase? (like: j, v, d, e, z)')){
    pwdArr.push.apply(pwdArr, pwdLc);
  }
  if (window.confirm('Do you choose: Uppercase? (like: H, Z, E, T, Q)')){
    pwdArr.push.apply(pwdArr, pwdUc);
  }
  if (window.confirm('Do you choose: Numeric? (like: 2, 3, 8, 6, 0)')){
    pwdArr.push.apply(pwdArr, pwdN);
  }
  if (window.confirm('Do you choose: Special Characters? (like: $, ], -, \, ^)')){
    pwdArr.push.apply(pwdArr, pwdSc);
  }
  // if the customer didn't select any character type
  if (pwdArr.length === 0){
    alert('Please select at least one character type!');
    return;
  }
  // set a new blank variable for containing 0every random items
  var newPwd = '';
  // because the customer set the length for looping over the selected pwdArr, add every selected item to newPwd
  for (var i = 0; i < pwdLength; i++) {
    var pwdItem = pickArrItem(pwdArr);
    newPwd += pwdItem;
  }

  return newPwd;

  /**
   * pick random item from an array
   * @param arr{Array}
   */
  function pickArrItem(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
