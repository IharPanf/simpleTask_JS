/*
	Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging 
	from 1...n and the letter "E" and return the correct subset based on the following rules. 
	The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers 
	and the E means take out the smallest integer currently in the whole set.
	When finished, your program should return that new set with integers separated by commas. 
	For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. 
*/

function getIndexMinElem(tempMass) {
	var minElem = Infinity;
	var indexMinElem = 0;
	for (var n = 0; n < tempMass.length; n++) {
		if (tempMass[n] < minElem) {
			minElem      = tempMass[n];
			indexMinElem = n
		}
	}
	return indexMinElem;
}

function OffLineMinimum(strArr) { 
  var returnMass     = [], // Output array elements
      tempMass       = [], // Temp array elements
      indexElement   = 0;
	  
  for (var i = 0; i < strArr.length; i++) {
	if (strArr[i] =='E') {
		indexElement = getIndexMinElem(tempMass);
		// "E" => Infinity
		strArr[i] = Infinity;
		returnMass.push(strArr[indexElement]);
		//Current min element =>Infinity
		tempMass[indexElement] = Infinity;
	}
	tempMass.push(strArr[i]);
  }   
  return returnMass.join(',');          
}

//Test
console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]));