/**
 * 统计岛屿的数目
 */

const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
const grid1 =  [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

function numIslands(grid) {
  const len1 = grid.length, len2 = grid[0].length;  //  记录长度
  let land = 0; //  记录岛屿数

  function resolve(i, j) {
    if(grid[i][j] === '0') {
      return 0;
    }
    grid[i][j] = '0';
    if(i < len1 - 1 && grid[i+1][j] === '1'){
      resolve(i+1, j);
    }
    if(i - 1 > 0 && grid[i-1][j] === '1') {
      resolve(i - 1, j);
    }
    if(j < len2 - 1 && grid[i][j+1] === '1') {
      resolve(i, j+1);
    }
    if(j - 1 > 0 && grid[i][j-1] === '1') {
      resolve(i, j-1);
    }
    return 1;
  }
  for(let i = 0; i < len1; i++) {
    for(let j = 0; j < len2; j++) {
      if(grid[i][j] === '1') {
        land += resolve(i, j);
      }
    }
  }
  return land;
}


console.log(numIslands(grid));
console.log(numIslands(grid1));

