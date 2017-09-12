/**
 * Time complexity: O(n^2)
 * Space complexity: O(n^3)
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rowMap = [ ];
  const colMap = [ ];
  const boxMap = [ ];

  // Loop through cells.
  const rows = board.length;
  for(let row = 0; row < rows; row += 1) {
    const cols = board[row].length;
    for(let col = 0; col < cols; col += 1) {
      const val = board[row][col];

      // Skip empty cells.
      if(val === '.') continue;

      // Validate row.
      if(rowMap[row] == null) rowMap[row] = [ ]; // Init.
      if(rowMap[row][val] === true) return false;
      rowMap[row][val] = true;

      // Validate col.
      if(colMap[col] == null) colMap[col] = [ ]; // Init.
      if(colMap[col][val] === true) return false;
      colMap[col][val] = true;

      // Validate box.
      const index = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if(boxMap[index] == null) boxMap[index] = [ ]; // Init.
      if(boxMap[index][val] === true) return false;
      boxMap[index][val] = true;
    }
  }
  return true;
};
