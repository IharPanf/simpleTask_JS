/*
	Have the function StringScramble(str1,str2) take both parameters being passed and return the string true 
	if a portion of str1 characters can be rearranged to match str2, otherwise return the string false.
	For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. 
	Punctuation and symbols will not be entered with the parameters. 
*/
function SimbolInStr(paramStr,paramSimbol) {
	for ( var i = 0; i < paramStr.length; i++) {
		if (paramSimbol == paramStr[i]) {
			return true;
		}
	}
	return false;
}
function StringScramble(str1,str2) { 
	for (var i = 0; i < str2.length; i++) {
		if (!SimbolInStr(str1,str2[i])) {
			return false;
		}
	} 
	return true;	
}
//Test
console.log(StringScramble("rkqodlw","world"));