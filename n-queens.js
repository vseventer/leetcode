/**
 * Time complexity: O(n^n)
 * Space complexity: O(n)
 */

/**
 * Creates a 2D array of n rows / cols.
 */
const create2DArray = (n, val = 0) => {
  return Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => val);
  });
};

/**
 * Returns snapshot of the provided array.
 */
const createSnapshot = (arr) => {
  return arr.concat().map((row) => row.join(''));
};

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const board = create2DArray(n, '.');
  return nQueens(board);
};

/**
 * Solves N Queens problem for specified row.
 */
const nQueens = (board, row = 0, result = [ ]) => {
  const length = board.length;
  for(let i = 0; i < length; i += 1) {
    if(isQueenSafe(board, row, i)) {
      board[row][i] = 'Q'; // Place queen.
      if(row === length - 1) result.push(createSnapshot(board)); // Solution found.
      else nQueens(board, row + 1, result); // Place next queen.
      board[row][i] = '.'; // Remove queen.
    }
  }
  return result;
};

/**
 * Returns whether a queen can be placed at row, col.
 */
const isQueenSafe = (board, row, col) => {
  // Verify row / col. Note that we only have to check up until row.
  for(let i = 0; i < row; i += 1) {
    if(board[i][col] === 'Q') return false;
  }

  // Verify diagonals.
  for(let i = row, j = col; i >= 0 && j >= 0; i -=1, j -= 1) {
    if(board[i][j] === 'Q') return false;
  }
  for(let i = row, j = col; i >= 0 && j < board.length; i -= 1, j += 1) {
    if(board[i][j] === 'Q') return false;
  }

  // OK.
  return true;
};
