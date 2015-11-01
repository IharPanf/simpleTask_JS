/*
	Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed
	and capitalize the first letter of each word. Words will be separated by only one space. 
*/
function LetterCapitalize(str) { 
  var returnStr = '';	
  var massWords = str.split(' ');
  for (var i = 0; i < massWords.length; i++) {
    returnStr += massWords[i][0].toUpperCase() + massWords[i].substring(1) + ' ';
  }
  return returnStr;        
}

console.log("i ran there");