
//const myArray = string.split(""); //turn string into an array
//const reversed = myArray.reverse() //revers array

    
    
 
const reverseString = function(str) {
    let reversed = '';
    reversed = str.split("").reverse().join("") 
    return reversed
    
    //turn back to string
};

console.log(reverseString("123hehe"))
// Do not edit below this line
module.exports = reverseString;
