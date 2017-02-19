/*
	Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters
	being passed and return the string true if num2 is greater than num1, otherwise return the string false. 
	If the parameter values are equal to each other then return the string -1. 
*/
function CheckNums(num1, num2) { 
  var dif = num2 - num1;
  var returnStr = '';
  if (dif > 0)  { returnStr = "true";}
  if (dif < 0)  { returnStr = "false";}
  if (dif == 0) { returnStr = "-1";}
 return returnStr;        
}

//Test
console.log(12,9);
console.log(30,15);