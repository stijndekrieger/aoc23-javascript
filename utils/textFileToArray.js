import fs from 'fs';

export function textFileToArray(filePath) {
  var text = fs.readFileSync(filePath);
  return text.toString().split("\n").map(x => x.trim());
}