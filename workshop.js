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

}

function multiplyTwoNumbers(num1, num2) {

}

function calculator(operation, num1, num2) {

}

function repeatString(inputString, numRepetitions) {

}

function reverseString(inputString) {

}

function longestWord(inputString) {

}

function capitalize(inputString) {

}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

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