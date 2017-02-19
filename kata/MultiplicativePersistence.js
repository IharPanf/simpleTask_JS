/*
	Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer
	and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. 
	For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 
*/
function multiplyDigit(num) {
  var multiply = 1;
  while (num > 0) {
	multiply *= num % 10;
	num = Math.floor(num / 10);
  }  
  return multiply;	
}

var step = 0;
function MultiplicativePersistence(num) { 
 if (num < 10) {return 0};
  step++;
  num = multiplyDigit(num);
  if (num > 9) {MultiplicativePersistence(num)}; 
  return step;	
}

//Test
console.log(MeanMode(MultiplicativePersistence(39));