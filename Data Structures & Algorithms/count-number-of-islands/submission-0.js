class Solution {
  getNeighbourIslands(grid, i, j) {
    const res = [];
    const rows = grid.length;
    const columns = grid[0].length;
    if (j - 1 >= 0) {
      res.push([i, j - 1]);
    }
    if (j + 1 < columns) {
      res.push([i, j + 1]);
    }
    if (i + 1 < rows) {
      res.push([i + 1, j]);
    }
    if (i - 1 >= 0) {
      res.push([i - 1, j]);
    }
    return res.filter(([rI, rJ]) => grid[rI][rJ] === "1");
  }

  /**
   * @param {string[][]} grid
   * @return {number}
   */
  numIslands(grid) {
    let islands = 0;
    const dfs = (i, j) => {
      const neighbours = this.getNeighbourIslands(grid, i, j);
      grid[i][j] = "0";
      for (const [nI, nJ] of neighbours) {
        if (grid[nI][nJ] === "1") {
          dfs(nI, nJ);
        }
      }
    };
    for (let i = 0; i < grid.length; i++) {
      const row = grid[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === "0") {
          continue;
        }
        if (row[j] === "1") {
          dfs(i, j);
          islands++;
        }
      }
    }
    return islands;
  }
}