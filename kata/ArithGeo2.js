/*
	Have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" 
	if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. 
	If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent,
	where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 
	Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
	Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 
*/
function ArithGeoII(arr) { 
  var returnParam = -1;
  var arithParam = arr[1] - arr[0];
  var geomParam = arr[1] / arr[0];
  for (var i = 2; i < arr.length; i++) {
	if (arr[i] - arr[i-1] == arithParam) {
		returnParam = 'Arithmetic';
	} else {
		if (arr[i] / arr[i-1] == geomParam) {
			returnParam = 'Geometric';
		} else {
			return -1;
		}
	}
  }  
  return returnParam; 
}
  
//Test
console.log(ArithGeoII([2, 4, 6, 8]));
