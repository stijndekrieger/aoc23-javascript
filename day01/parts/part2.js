import { textFileToArray } from '../../utils/textFileToArray.js';

class lineResult {
  constructor(number, index) {
    this.number = number;
    this.index = index;
  }
}

function swapTextToNumber(text) {
  var number = 0;

  switch(text) {
    case 'one':
      number = 1;
      break;
    case 'two':
      number = 2;
      break;
    case 'three':
      number = 3;
      break;
    case 'four':
      number = 4;
      break;
    case 'five':
      number = 5;
      break;
    case 'six':
      number = 6;
      break;
    case 'seven':
      number = 7;
      break;
    case 'eight':
      number = 8;
      break;
    case 'nine':
      number = 9;
      break;
  }

  return number;

}

function filterResults(results) {
  const result = results.reduce((acc, curr) => {
    if (!acc.min || curr.index < acc.min.index) {
      acc.min = curr;
    }
  
    if (!acc.max || curr.index > acc.max.index) {
      acc.max = curr;
    }
  
    return acc;
  }, {});
  
  const filteredArray = [result.min, result.max];
  
  return filteredArray;
}

function getLineResult(line) {
  var firstNumber;
  var lastNumber;
  var possibleResults = [];
  var resultOfLine = "";

  //Add all numbers to possibleResults
  line.split('').forEach((char, index) => {
    if(!isNaN(char)) {
      var result = new lineResult(parseInt(char), index);
      possibleResults.push(result);
    }
  })

  //Check strings for possible results
  const stringsArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i < stringsArray.length; i++) {
    const currentString = stringsArray[i];
    let index = -1;
  
    while ((index = line.indexOf(currentString, index + 1)) !== -1) {
      possibleResults.push(new lineResult(swapTextToNumber(currentString), index));
    }
  }

  possibleResults = filterResults(possibleResults);

  possibleResults.forEach(result => {
    resultOfLine += result.number.toString();
  })

  return resultOfLine;
}

function getFinalResult(allResults) {
  var finalResult = 0;

  allResults.forEach(result => {
    finalResult += parseInt(result);
  });

  return finalResult;
}

export function part2(filePath) {
  const lines = textFileToArray(filePath);

  var allResults = [];
  lines.forEach(line => {
    // console.log(line);
    allResults.push(getLineResult(line));
  });

  return getFinalResult(allResults);
}