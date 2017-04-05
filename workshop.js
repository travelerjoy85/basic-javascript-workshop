function firstLetter(inputString) {
    if (inputString) {
        return inputString[0];
    }
    else {
        return undefined;
    }
}

function lastLetter(inputString) {
   if(inputString){
       return inputString.slice(-1);
   }
   else {
       return undefined;
   }
}

function letterAtPosition(inputString, position) {
    if(inputString){
        return inputString[position];
    }
    else{
        return undefined;
    }
}

function addTwoNumbers(num1, num2) {
   var result = num1 + num2;
    if(isNaN(num1)||isNaN(num2)){
          return undefined;
     }
     else {
         return num1 + num2;
     }
}

function multiplyTwoNumbers(num1, num2) {
    var result = num1 * num2;
    if(isNaN(num1)||isNaN(num2)){
        return undefined;
    }
    else {
        return num1 * num2;
    }
}

function calculator(operation, num1, num2) {
    var resultAdd = num1 + num2;
    var resultSub = num1 - num2;
    var resultMult = num1 * num2;
    var resultDiv = num1 / num2;
    if(isNaN(num1)||isNaN(num2)){
        return undefined;
    }
    else{
        if(operation === "add"){
            return resultAdd;
        }
        else if(operation === "sub"){
            return resultSub;
        }
        else if(operation === "mult"){
            return resultMult;
        }
        else if(operation === "div"){
            return resultDiv;
        }
        else{
            return undefined;
        }
    }
}

function repeatString(inputString, numRepetitions) {
    if(numRepetitions<=0){
        return "";
    }
    else if(numRepetitions){
        return inputString.repeat(numRepetitions);
    }
    else{
        return undefined;
    }
}

function reverseString(inputString) {
    var splitString = inputString.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    
    return joinArray;
}

function longestWord(inputString) {
    var strSplit = inputString.split(" ");
    var longestWord = "";
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit.length >= longestWord.length){
            longestWord = strSplit[i];
        }
    }
    return longestWord;
}

function capitalize(inputString) {
  var str = inputString.toLowerCase().split(" ");
  for(var i = 0; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

function sumOfNumbers(arrayOfNumbers) {
    var total = 0;
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

function uniqueElements(array1, array2) {
   if(typeof(array1)==="object" && typeof(array2)==="object"){
       var unique = [];
        
        array1.forEach(function(val){
           if(array2.indexOf(val)<0) unique.push(val);
        });
        
        array2.forEach(function(val){
            if(array1.indexOf(val)<0) unique.push(val);
        });
        return unique;
   }
   else{
       return undefined;
   }
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