/*
	Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
*/
function FirstReverse(str) { 
  var reverseStr = '';		
  for (var i = str.length - 1; i >= 0; i--){
     reverseStr += str[i]; 
  }  
  return reverseStr;         
}

//Test
console.log(FirstReverse("example string"));