/*
	Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed
	and return the largest word in the string. If there are two or more words that are the same length, 
	return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
*/

  function LongestWord(sen) { 
  var masWords = sen.split(/([.,&!?:… ])/);
  var longWord = masWords[0];	
  for (var i = 1; i < masWords.length; i++) {
    if (masWords[i].length > longWord.length ) {
    	longWord = masWords[i]; 
    }
  }
  sen = longWord;
  return sen;      
} 
//Test
console.log(LongestWord("Long longer longest");