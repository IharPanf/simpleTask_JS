/*
	Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed 
	and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). 
	Do not count y as a vowel for this challenge. 
*/
function VowelCount(str) { 
  var countV = 0;
  var massVowel = ["a","o","e","i","u","A","O","E","I","U"]
  for (var i = 0; i < str.length; i++) {
  		for (var n = 0; n  < 10; n++) {
         	if (str[i] == massVowel[n]) {
              countV++;
            }
        }
  }
  return countV;         
}
//Test
console.log('teststring');