/*
	Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 
	if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 
	because the mode (3) equals the mean (3)). 
	The array will not be empty, will only contain positive integers, and will not contain more than one mode. 	
*/
function getMode(arr) {
	var countPopular = 1, maxCount = 0, maxIndex = -1;
	arr = arr.sort(function(a,b){return a-b});
	for (var i = 0; i < arr.length; i++) {
		if ( arr[i] == arr[i+1]) {
			countPopular++;
		} else {
			if (maxCount < countPopular) {
				maxCount = countPopular;
				countPopular = 1;
				maxIndex = i
			}
		}
	}
	return arr[maxIndex];
}

function getMean(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
		sum += arr[i];
  }  
  return sum / arr.length;	
}

function MeanMode(arr) { 
  return getMode(arr) == getMean(arr) ? 1 : 0;          
} 

//Test
console.log(MeanMode([5, 3, 3, 3, 1]));