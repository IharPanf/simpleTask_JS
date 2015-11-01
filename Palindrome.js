/*
	Using the JavaScript language, have the function Palindrome(str) take the str parameter 
	being passed and return the string true if the parameter is a palindrome, (the string is the same forward 
	as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. 
	Punctuation and numbers will not be part of the string. 
*/
function Palindrome(str) { 
  var newStr = "";
  str = str.replace(/\s/g, "")
  str = str.replace(/[0-9]/g, "")
  for (var i = str.length - 1; i >= 0; i--) {
   	newStr += str[i]; 
  }
   return str == newStr ? true : false;        
}

//Test
console.log(Palindrome('never odd or even'));   