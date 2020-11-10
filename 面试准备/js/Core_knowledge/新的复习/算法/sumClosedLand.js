/**
 * 统计封闭岛屿的数目
 */


const grid1 = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]];
const grid2 = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
const grid3 = [[1,1,1,1,1,1,1],
             [1,0,0,0,0,0,1],
             [1,0,1,1,1,0,1],
             [1,0,1,0,1,0,1],
             [1,0,1,1,1,0,1],
             [1,0,0,0,0,0,1],
             [1,1,1,1,1,1,1]];
const grid4 = [[1]];

var closedIsland = function(grid) {
  let result = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === 0 && dfs(grid, i, j)) {
        result++;
      }
    }
  }
  return result;
};

function dfs(grid, i, j) {
  let len1 = grid.length, len2 = grid[0].length;
  if(i < 0 || j < 0 || i >= len1 || j >= len2) {
    return false;
  }
  if(grid[i][j] === 1) return true;
  grid[i][j] = 1;
  let up = dfs(grid, i - 1, j);
  let down = dfs(grid, i + 1, j);
  let left = dfs(grid, i, j - 1);
  let right = dfs(grid, i, j + 1);
  if(up && down && left && right) {
    return true;
  }
  return false;
}

console.log(closedIsland(grid1));
console.log(closedIsland(grid2));
console.log(closedIsland(grid3));
console.log(closedIsland(grid4));