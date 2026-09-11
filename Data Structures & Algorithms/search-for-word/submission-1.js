class Solution {
  adjecent(pos, rows, cols) {
    console.log(pos);
    const [i, j] = pos;
    const res = [];
    if (i + 1 < rows) {
      res.push([i + 1, j]);
    }
    if (i - 1 >= 0) {
      res.push([i - 1, j]);
    }
    if (j + 1 < cols) {
      res.push([i, j + 1]);
    }
    if (j - 1 >= 0) {
      res.push([i, j - 1]);
    }
    return res;
  }

  /**
   * @param {character[][]} board
   * @param {string} word
   * @return {boolean}
   */
  exist(board, word) {
    const path = Array.from({ length: board.length }, (_) =>
      Array.from({ length: board[0].length }, (_) => false),
    );
    console.log(path);
    let found = false;

    const backtrack = (board, word, start) => {
      if (word === "") {
        found = true;
        return;
      }
      if (found) {
        return;
      }
      if (start) {
        const adj = this.adjecent(start, board.length, board[0].length);
        for (const [i, j] of adj) {
          if (board[i][j] !== word[0]) {
            continue;
          }
          if (path[i][j] === true) {
            continue;
          }
          path[i][j] = true;
          backtrack(board, word.slice(1), [i, j]);
          path[i][j] = false;
        }
        return;
      }
      for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
          if (word[0] === board[i][j]) {
            if (path[i][j] === true) {
              continue;
            }
            path[i][j] = true;
            backtrack(board, word.slice(1), [i, j]);
            path[i][j] = false;
            // backtrack(board, word.slice(1), [i, j]);
          }
        }
      }
    };
    backtrack(board, word);
    return found;
  }
}