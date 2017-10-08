/**
 * Time complexity: O(n^n)
 * Space complexity: O(n)
 */

// Instead of keeping track of the entire board, simply maintain a stack with
// current queens placed - this makes for easier isQueenSafe checking.

/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function(n) {
  return nQueens(n);
};

/**
 * Solves N Queens problem for specified row.
 */
const nQueens = (n, row = 1, queensPlaced = [ ]) => {
  let result = 0; // Init.
  for(let i = 1; i <= n; i += 1) {
    if(isQueenSafe(queensPlaced, row, i)) {
      queensPlaced.push({ row, col: i }); // Place queen.
      if(row === n) result += 1; // Solution found.
      else result += nQueens(n, row + 1, queensPlaced); // Place next queen.
      queensPlaced.pop(); // Remove queen.
    }
  }
  return result;
};

/**
 * Returns whether a queen can be placed at row, col.
 */
const isQueenSafe = (queensPlaced, targetRow, targetCol) => {
  // Walk through current queens placed.
  for(let i = 0; i < queensPlaced.length; i += 1) {
    const { row, col } = queensPlaced[i];
    if(targetCol === col || Math.abs(targetRow - row) === Math.abs(targetCol - col)) {
      return false;
    }
  }

  // OK.
  return true;
};