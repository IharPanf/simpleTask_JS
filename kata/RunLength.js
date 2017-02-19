/*
 Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string
 using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting 
 that number along with a single character of the repeating sequence. 
 For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 
*/
function RunLength(str) { 
	var returnStr = '', tempChar = "", countSimbol = 0;
    for (var i = 0; i <= str.length; i++) {
		if (str[i] != tempChar && i != 0) {
			returnStr += countSimbol + tempChar; 
			countSimbol = 1;
		} else {
			countSimbol++;
		}
		tempChar = str[i];	
	}
	return returnStr;  
}

//Test
console.log(RunLength("wwwggopp"));   