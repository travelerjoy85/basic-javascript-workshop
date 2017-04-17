function firstLetter(inputString) {
// process of thinking:
// - based on the request in the instruction "If the function receives no parameter...it should", I should have if/else statement:
// 1. if there's parameter pass to it && the parameter is valid, return the first letter;
// 2. if not, return undefined
    if(inputString){
        return inputString[0];
    }
    else{
        return undefined;
    }
}

function lastLetter(inputString) {
    if(inputString){
        return inputString[inputString.length-1]; // the index of last letter in a string is str.length-1
    }
    else{
        return undefined;
    }
}

function letterAtPosition(inputString, position) {
    if(inputString){
        return inputString[position]; // position represents the index number based on the example in the instruction
    }
    else{
        return undefined;
    }
}

function addTwoNumbers(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return undefined; // cause if either of num1 and num2 is not a number, it won't pass
    }
    else{
        return num1+num2;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return undefined;
    }
    else{
        return num1*num2;
    }
}

function calculator(operation, num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return undefined; // forgot to define if num1 is not a number or if num2 is not a number at first. Need to remember fron now on
    }
    else{
        if(operation==="add"){
            return num1+num2;
        }
        else if(operation==="sub"){
            return num1-num2;
        }
        else if(operation==="mult"){
            return num1*num2;
        }
        else if(operation==="div"){
            return num1/num2;
        }
        else{
            return undefined;
        }
    }
}

function repeatString(inputString, numRepetitions) {
    var result = "";
    if(isNaN(numRepetitions)){
        return undefined;
    }
    else{
        if(numRepetitions<=0 || inputString.length===0){
            return result;
        }
        else{
            for(var i = 0; i < numRepetitions; i++){
                result += inputString;
            }
        }
        return result;
    }
}

function reverseString(inputString) {
    var finalString = "";
    for(var i = inputString.length; i > 0; i--){
        finalString += inputString[i-1];
    }
    return finalString;
}

function longestWord(inputString) {
    var splitString = inputString.split(" ");
    var longestString = "";
    if(inputString.length === 0){
        return "";
    }
    else{
        for(var i = 0; i < splitString.length; i++){
            if(splitString[i].length > longestString.length){
                longestString = splitString[i];
            }
        }
        return longestString;
    }
}

function capitalize(inputString) {
    var str = inputString.toLowerCase().split(" ");
    //var temp ="";
    if(inputString.length === 0){
        return "";
    }
    else{
        for(var i = 0; i < str.length; i++){
            str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        }
        return str.join(" ");
    }
}

function sumOfNumbers(arrayOfNumbers) {
   var result = 0;
   if(arrayOfNumbers.length === 0){
       return 0;
   }
   else{
       for(var i = 0; i < arrayOfNumbers.length; i++){
           if(!isNaN(arrayOfNumbers[i])){
               result += arrayOfNumbers[i];
           }
           else{
               return undefined;
           }
       }
       return result;
   }
}

function uniqueElements(array1, array2) {
     var newArr = [];
     if(typeof(array1) != "object" || typeof(array2) != "object"){
         return undefined;
     }
     else{
         for(var i = 0; i < array1.length; i++){
             if(array2.indexOf(array1[i]) < 0){
                 newArr.push(array1[i]);
             }
         }
         for(var j = 0; j < array2.length; j++){
             if(array1.indexOf(array2[j]) < 0){
                 newArr.push(array2[j]);
             }
         }
         return newArr;
     }
}

function isPalindrome(inputString) {
    var strWithoutSpecialCharacter = inputString.replace(/\W/g, '').toLowerCase();
    var reverseStr = reverseString(strWithoutSpecialCharacter);
    if(strWithoutSpecialCharacter === reverseStr){
        return true;
    }
    else{
        return false;
    }
}

function wrapCharacter(inputString) {
    var newStr = "";
}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};