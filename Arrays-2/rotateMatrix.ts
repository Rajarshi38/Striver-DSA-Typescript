function rotate(matrix: number[][]): void {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = i; j < cols; j++) {
      swap(matrix, { row: i, col: j }, { row: j, col: i });
    }
  }

  for (let i = 0; i < rows; i++) {
    matrix[i].reverse();
  }
}

type Position = {
  row: number;
  col: number;
};

function swap(matrix: number[][], pos1: Position, pos2: Position) {
  let temp = matrix[pos1.row][pos1.col];
  matrix[pos1.row][pos1.col] = matrix[pos2.row][pos2.col];
  matrix[pos2.row][pos2.col] = temp;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
console.log(matrix);
