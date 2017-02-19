/*
Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed
and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) 
and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces
*/

function LetterCount(str) { 
	var arrWords = str.split(' ');	
	var tempWords,
		tempArr = {},
		maxCount = 0,
		maxWords = '',
		maxCountChar = 0;
		
	for (var i = 0; i < arrWords.length; i++) {
		tempArrWords = arrWords[i].split('').sort();
		for(var j = 1; j < tempArrWords.length; j++) {
			if(tempArrWords[j] == tempArrWords[j-1]) {
				maxCountChar++;
			}			
		}
		tempArr[arrWords[i]] = maxCountChar;
		maxCountChar = 0;		
	}
	for(prop in tempArr) {
		if (tempArr[prop] > maxCount) {
			maxCount = tempArr[prop];
			maxWords = prop;
		}
	}
    return maxWords == 0 ? -1 : maxWords;        
}
console.log(LetterCount("Today, is the greatest day ever!"));
