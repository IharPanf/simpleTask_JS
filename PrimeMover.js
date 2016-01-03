/*
	Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4.
	For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 
*/

function isPrime(num) {
	for (var i = 2; i < num; i++) {
		if (num % i == 0){
			return false;
		}
	}
	return true;
}

function PrimeMover(num) { 
  var countPrime = 2, n = 2;
  while (countPrime <= num) {
	n++;
	if (isPrime(n)) {
		countPrime++
	}  
  }		
  return n;      

//Test
console.log(PrimeMover(16));