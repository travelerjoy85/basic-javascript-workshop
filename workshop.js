function firstLetter(inputString) {
    if(inputString){
        return inputString[0];
    }
    else{
        return undefined;
    }
}

function lastLetter(inputString) {
    if(inputString){
        return inputString[inputString.length - 1];
    }
    else{
        return undefined;
    }
}

function letterAtPosition(inputString, position) {
   if(!inputString || isNaN(position) || position < 0){
       return undefined;
   }
   else{
       return inputString[position];
   }
}

function addTwoNumbers(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return undefined;
    }
    else{
        return num1 + num2;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return undefined;
    }
    else{
        return num1 * num2;
    }
}

function calculator(operation, num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return undefined;
    }
    else{
        switch(operation){
            case "add":
                return num1 + num2;
            case "sub":
                return num1 - num2;
            case "mult":
                return num1 * num2;
            case "div":
                return num1 / num2;
            default:
                return undefined;
        }
    }
}

function repeatString(inputString, numRepetitions) {
    if(isNaN(numRepetitions)){
        return undefined;
    }
    else{
        if(inputString.length === 0 || numRepetitions <= 0){
            return "";
        }
        else{
            return inputString.repeat(numRepetitions);
        }
    }
}

function reverseString(inputString) {
    var finalStr = "";
    for(var i = inputString.length; i > 0; i--){
        finalStr += inputString[i - 1];
    }
    return finalStr;
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
    var total = 0;
    if(arrayOfNumbers.length === 0){
        return 0;
    }
    else{
        for(var i = 0; i < arrayOfNumbers.length; i++){
            if(!isNaN(arrayOfNumbers[i])){
                total += arrayOfNumbers[i];
            }
            else{
                return undefined;
            }
        }
        return total;
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
    var reversedStrWithoutSpecialCharacter = reverseString(strWithoutSpecialCharacter);
    if(strWithoutSpecialCharacter === reversedStrWithoutSpecialCharacter){
        return true;
    }
    else{
        return false;
    }
}

function wrapCharacter(inputString) {

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