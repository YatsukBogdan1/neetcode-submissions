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
    return res.filter(([rI, rJ]) => grid[rI][rJ] === 1);
  }

  /**
   * @param {string[][]} grid
   * @return {number}
   */
  maxAreaOfIsland(grid) {
    let maxArea = 0;
    const dfsArea = (i, j) => {
      let area = 1;
      const neighbours = this.getNeighbourIslands(grid, i, j);
      grid[i][j] = 0;
      for (const [nI, nJ] of neighbours) {
        if (grid[nI][nJ] === 1) {
          area += dfsArea(nI, nJ);
        }
      }
      return area;
    };
    for (let i = 0; i < grid.length; i++) {
      const row = grid[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === 0) {
          continue;
        }
        if (row[j] === 1) {
          const area = dfsArea(i, j);
          if (area > maxArea) {
            maxArea = area;
          }
        }
      }
    }
    return maxArea;
  }
}