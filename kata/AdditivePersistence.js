/*
	Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer 
	and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit.
	For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 
*/
function sumDigit(num) {
  var sum = 0;
  while (num > 0) {
	sum += num % 10;
	num = Math.floor(num / 10);
  }  
  return sum;	
}

var step = 0;
function AdditivePersistence(num) { 
  if (num < 10) {return 0};
  step++;
  num = sumDigit(num);
  if (num > 9) {AdditivePersistence(num)}; 
  return step;	
}
//Test
console.log(AdditivePersistence(2718));   