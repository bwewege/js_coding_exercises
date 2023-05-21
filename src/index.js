function findWinner(board) {
  if (board === undefined) throw new Error("board is required");

  for (let i = 0; i < board.length; i++) {
    const rows = board[i];
    if (rows.every((value) => value === "X")) {
      return "X";
    } else if (rows.every((value) => value === "0")) {
      return "0";
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    const columns = board.map((row) => row[i]);
    if (columns.every((value) => value === "X")) {
      return "X";
    } else if (columns.every((value) => value === "0")) {
      return "0";
    }
  }

  const diag00to22 = [board[0][0], board[1][1], board[2][2]];
  const diag02to20 = [board[0][2], board[1][1], board[2][0]];

  if (
    diag00to22.every((value) => value === "X") ||
    diag02to20.every((value) => value === "X")
  ) {
    return "X";
  } else if (
    diag00to22.every((value) => value === "0") ||
    diag02to20.every((value) => value === "0")
  ) {
    return "0";
  }

  return null;
}
