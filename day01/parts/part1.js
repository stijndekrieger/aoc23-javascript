import { textFileToArray } from '../../utils/textFileToArray.js';

function getLineResult(line) {
  var firstNumber;
  var lastNumber;
  var lineResult;

  line.split('').forEach(char => {

    if(!isNaN(char)) {
      if(!firstNumber) {
        firstNumber = parseInt(char)
      } else {
        lastNumber = parseInt(char)
      }
    }

  })

  if(lastNumber) {
    lineResult = (firstNumber.toString() + lastNumber.toString());
  } else {
    lineResult = firstNumber.toString() +firstNumber.toString();
  }
  
  return lineResult;
}

function getFinalResult(allResults) {
  var finalResult = 0;

  allResults.forEach(result => {
    finalResult += parseInt(result);
  });

  return finalResult;
}

export function part1() {
  const filePath = 'day01/data/calibration.txt';
  const lines = textFileToArray(filePath);

  var allResults = [];
  lines.forEach(line => {
    allResults.push(getLineResult(line));
  });

  return getFinalResult(allResults);
}