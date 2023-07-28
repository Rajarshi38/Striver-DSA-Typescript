function generate(numRows: number): number[][] {
  const triangle = [];
  triangle.push([1]);
  if (numRows == 1) {
    return triangle;
  }
  for (let i = 1; i < numRows; i++) {
    const tempArr = new Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) tempArr[j] = 1;
      else {
        tempArr[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
      }
    }
    triangle.push(tempArr);
  }
  return triangle;
}

const numRows = 5;
console.log(generate(numRows));
