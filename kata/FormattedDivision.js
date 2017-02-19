/*
 Using the JavaScript language, have the function FormattedDivision(num1,num2) take both parameters being passed,
 divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. 
 For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". 
 The output must contain a number in the one's place even if it is a zero. 
*/
function FormattedDivision(num1,num2) { 
	var roundNumer = (num1 / num2).toFixed(4);
	var arrStr =  roundNumer.split('.');
	var temp = 0;
	var tempStr = '';
	for (var i = arrStr[0].length - 1; i >= 0; i-- ) {
		temp++;
		tempStr += 	arrStr[0][i];
		if (temp % 3 == 0) {
			tempStr += ','
		}	
	}
  return tempStr.split('').reverse().join('') + '.' + arrStr[1];        
}
//Test
console.log(FormattedDivision(10,10));
