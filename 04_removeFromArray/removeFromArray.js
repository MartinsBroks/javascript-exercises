
/*

const removeFromArray = function(...remove) {
    const array = remove[0];
    const removedArray = [];
    
    array.forEach((item) => {
        if (!remove.includes(item)){
         removedArray.push(item);
    
    
    }});
    return removedArray;
}
console.log(removeFromArray)([123], 2)
*/
const removeFromArray = function(...args) {
       const array = args[0]
       return array.filter(val => !args.includes(val))
    }
    



// Do not edit below this line
module.exports = removeFromArray;
