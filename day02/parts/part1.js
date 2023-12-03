import { textFileToArray } from '../../utils/textFileToArray.js';

class handShow {
  constructor(shownRedCubes, shownGreenCubes, shownBlueCubes) {
    this.shownRedCubes = shownRedCubes;
    this.shownGreenCubes = shownGreenCubes;
    this.shownBlueCubes = shownBlueCubes;
  }
}

class game {
  constructor(id, handShows) {
    this.id = id;
    this.handShows = handShows;
  }
}

const maxRedCubes = 12;
const maxGreenCubes = 13;
const maxBlueCubes = 14;

const gamesArray = [];

var idTotal = 0;

function exportGamesToArray(games) {
  games.forEach(game => {
    var id;
    
  });
}

export function part1(filePath) {
  const games = textFileToArray(filePath);
  exportGamesToArray(games);

  return idTotal;
}