/*
	Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
	Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
	Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
*/
function LetterChanges(str) { 

  var returnStr = '';
  var charTemp ='';
  for (var i = 0; i < str.length; i++) {
    if (!str[i].search(/^[a-zA-Z]+$/)) {
      charTemp = String.fromCharCode(str[i].charCodeAt(0)+1);		
      if (     charTemp == 'a' 
         	|| charTemp == 'e' 
         	|| charTemp == 'i' 
         	|| charTemp == 'o' 
         	|| charTemp == 'u' 
         ) 
	  {
        charTemp = charTemp.toUpperCase();
      }  
      	returnStr = returnStr + charTemp;
    } else {
     	returnStr = returnStr + str[i]; 
    }    
  }
  return returnStr;        
}
                              
// Tests
console.log(LetterChanges('hello*3'));