/*
	Have the function SwapCase(str) take the str parameter and swap the case of each character. 
	For example: if str is "Hello World" the output should be hELLO wORLD. 
	Let numbers and symbols stay the way they are
*/

function SwapCase(str) { 
  var returnStr = '';
  var charlittle_a = 97;
  for( var i = 0; i < str.length; i++) {
   	if (str[i].charCodeAt(0) < charlittle_a ) {
    	returnStr += str[i].toLowerCase();  
    } else {
      	returnStr += str[i].toUpperCase();  
    }
  }
  return returnStr;         
}

 //Test
 
 console.log(SwapCase("Hello World"));