/*
	Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true 
	if any combination of numbers in the array can be added up to equal the largest number in the array,
	otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true
	because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
*/	

function ArrayAdditionI(arr) { 
	arr = arr.sort(function(a,b){return a - b});
	var maxEl = arr[arr.length - 1];
	var CountKomb = 1;
	for (var i = 1; i < arr.length; i++) {
		CountKomb+=Math.pow(2,i);
	}
	for(var i = 1; i <= CountKomb; i++) {
		var j = i;
		var S = d = k =0;
		while(j > 0){
			if ( j%2 == 1) { k++;}
			S += j%2 * arr[d];
			d += 1;
			j = Math.floor(j / 2);
			if((S == maxEl) && (k > 1)){
				return true;
			}
		}
	}
	return false;         
}

//Test
console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));