// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }

// module.exports = wordSearch


const horizontalSearch = function (wordSearch, word) {
  const horizontalJoin = wordSearch.map((character) => character.join(""));
  for (length of horizontalJoin) {
    if (length.includes(word)) return true;
  }
};

const wordSearch = (letters, word) => {
  if (!letters.length) {
    return "The array given is empty";
  }

  let rotatedArr = [];

  for (let row of letters[0]) {
    rotatedArr.push([]);
  }

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      rotatedArr[j][i] = letters[i][j];
    }
  }

  const horizontalHorizontalSearch = horizontalSearch(letters, word);

  const verticalHorizontalSearch = horizontalSearch(rotatedArr, word);

  if (horizontalHorizontalSearch) return true;
  if (verticalHorizontalSearch) return true;

  return false;
};

module.exports = wordSearch;