const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 
    'FRANK'
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch(
     [
       ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
       ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
       ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
       ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
       ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
       ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
       ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
       ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
       ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
    ], 
    'SEINFELD'
    );

    assert.isTrue(result);
  });
});

it('should return true if the word is present vertically', function () {
  const result = wordSearch(
    [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'S', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'A', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'D', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'P', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
    ],
    'SEINFELD'
  );

  assert.isTrue(result);
});

it('should return true if the word is present vertically in reverse', function () {
  const result = wordSearch(
    [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'X', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'P', 'E', 'E', 'D', 'N', 'A', 'S'],
      ['H', 'Z', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'N', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'D', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'P', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
    ],
    'SEINFELD'
  );

  assert.isTrue(result);
});

it('should return true if the word is present horizantly in reverse', function () {
  const result = wordSearch(
    [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'X', 'I', 'N', 'P', 'E', 'L', 'D'],
      ['Y', 'X', 'Y', 'Z', 'E', 'Z', 'E', 'D'],
      ['H', 'Z', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'N', 'C', 'S', 'D', 'E', 'R', 'L'],
      ['B', 'D', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'P', 'C', 'A', 'S', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
    ],
    'SEINFELD'
  );

  assert.isTrue(result);
});

it('should return false if input 2d array for letters is empty ', function () {
  const result = wordSearch([], 'garbase');

  assert.isFalse(result);
});

it('should return false if the input word is not passed', function () {
  const result = wordSearch([
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D']
]);

assert.isFalse(result);
  });

  const transpose = function (matrix) {
    let newMatrix = [];
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!newMatrix[j]) {
          newMatrix[j] = [];
        }
        newMatrix[j].push(matrix[i][j]);
      }

    }
    return newMatrix;
  };
  
  const wordSearch = (letters, word) => {
    if (letters.length === 0 || !word) return false;
    let reverseWord = word.split('').reverse().join('');
    const horizontalJoin = letters.map((ls) => ls.join(''));
  
    for (const line of horizontalJoin) {
      if (line.includes(word) || line.includes(reverseWord)) return true;
    }
  
    const transposeMatrix = transpose(letters);
    const verticalJoin = transposeMatrix.map((ls) => ls.join(''));
  
    for (const line of verticalJoin) {
      if (line.includes(word) || line.includes(reverseWord)) return true;
    }
    return false;
  };
  
  let result = wordSearch(
    [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
    ],
    'SEINFELD'
  );
  
  console.log(result);
  module.exports = wordSearch;
