/*
	Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
	For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 
*/
function DashInsert(str) { 
  var str = ''+str;	
  var returnStr = str[0];
  var massOddNumber = ["1","3","5","7","9"];
  for (var i = 1; i < str.length; i++){
   	if (massOddNumber.indexOf(str[i]) > 0 && massOddNumber.indexOf(str[i-1]) > 0) {
     	returnStr += '-' + str[i];
    } else {
     	returnStr += str[i]; 
    }
  }
  return returnStr;        
}

//Test
console.log(DashInsert(454793));