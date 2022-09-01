
const sumAll = function(first, second) {
    let result = 0;
    let firstNumber = first
    let secondNumber = second
    if (first > second) {
        firstNumber = second , secondNumber = first;
    }
    if (first < 0 || second < 0 ){return 'ERROR'}
    if (isNaN(first) || isNaN(second)){return 'ERROR'}
    if (typeof first !== 'number' || typeof second !== 'number' ){return 'ERROR'} 
    for( let i = firstNumber; i <= secondNumber; i++){
           result = result + i   
    }
    return result
};
console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
