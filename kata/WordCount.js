/*
	Using the JavaScript language, have the function WordCount(str) take the str string parameter
	being passed and return the number of words the string contains (ie.
	"Never eat shredded wheat" would return 4). Words will be separated by single spaces. 
*/
function WordCount(str) { 
  var countWords = 0;	
  var massWords = str.split(" ");
  for (var i = 0; i < massWords.length ; i++) {
    if (massWords[i] != "") {
     	countWords++; 
    }
  }
  return countWords;        
}

//Test
console.log(WordCount('Hello World'));   