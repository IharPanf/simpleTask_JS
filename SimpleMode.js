/*
	Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). 
	For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). 
	If there is no mode return -1. The array will not be empty. 	
*/
function SimpleMode(arr) { 
  var maxCountElem = 1,
	  searchElem,
	  temp;  
  for (var i = 1; i < arr.length; i++) {
	 temp = getAppearElem(arr,arr[i]);
	 if (temp > maxCountElem) {
		maxCountElem = temp;
		searchElem = arr[i]
	 }	
  }
  return maxCountElem > 1 ?  searchElem : -1;        
}
function getAppearElem(arr,num) {
	var countElem = 0;
	for (var i = 0; i < arr.length;i++) {
		if (arr[i] == num) {
			countElem++;
		}
	}
	return countElem;
}
//Test
console.log(SimpleMode([10, 4, 5, 2, 4]));
