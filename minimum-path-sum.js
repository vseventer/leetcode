/**
 * Time complexity: O(m*n)
 * Space complexity: O(m*n)
 */

// Helper to find path.
const findMinPath = (grid, row, col, targetRow, targetColumn, memo) => {
  // Out-of-bounds conditions.
  if(row > targetRow) return Infinity;
  if(col > targetColumn) return Infinity;

  // Destination reached condition.
  if(row === targetRow && col === targetColumn) return grid[row][col];

  // Use memo-table to avoid calculating the same cell twice.
  const key = row + '-' + col; // Index by <row>-<col>.
  if(!(key in memo)) {
    // Return minimum cost from current cell to destination.
    const cost = grid[row][col];
    memo[key] = cost + Math.min(
      findMinPath(grid, row + 1, col, targetRow, targetColumn, memo),
      findMinPath(grid, row, col + 1, targetRow, targetColumn, memo)
    );
  }
  return memo[key];
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // Calculate destination coordinates, and return the minimum path.
  const targetRow = grid.length - 1;
  const targetColumn = grid[targetRow].length - 1;
  return findMinPath(grid, 0, 0, targetRow, targetColumn, { });
};

console.log(minPathSum([[1,2],[1,1]]));