/*
	Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, 
	then return that final number. For example: if str is "88Hello 3World!" the output should be 91. 
	You will have to differentiate between single digit numbers and multiple digit numbers like in the example above.
	So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 
*/
function NumberAddition(str) { 
  var massNumber = [];
  var tempNumber = '';	
  for (var i = 0; i <= str.length; i++) {
	 if (+str[i] || str[i] =='0'){
		tempNumber = tempNumber+str[i]; 
	 } else {
		massNumber.push(+tempNumber);
		tempNumber = '';
	 }
  } 
  tempNumber = 0;
  for (var i = 0; i < massNumber.length; i++ ) {
	tempNumber += massNumber[i];    
  }  
  return tempNumber;         
}
//Test
console.log(NumberAddition("88Hello 3World!"));   