/*
Using the JavaScript language, have the function BinaryConverter(str) return the decimal form of the binary value. 
For example: if 101 is passed return 5, or if 1000 is passed return 8. 

*/

function BinaryConverter(str) { 
  var num = 0,
	  strLength =  str.length - 1;	
 
  for(var i = strLength; i >= 0; i--) {
	 num += parseInt(str[strLength - i]) * Math.pow(2,i);
  }  
  return num; 
         
}
//Test
console.log(BinaryConverter('11111111111'));   
