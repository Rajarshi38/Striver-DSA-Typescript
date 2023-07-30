const arr = [3, 1, 2, 5, 3];
function findRepeatAndMissingNumbers(arr: number[]): {
  repeated: number;
  missing: number;
} {
  const len = arr.length;
  const map = new Array(len + 1).fill(0);
  for (let i of arr) {
    map[i] += 1;
  }

  let repeated = -1;
  let missing = -1;
  for (let i = 0; i < len + 1; i++) {
    if (map[i] > 1) {
      repeated = i;
    } else if (map[i] == 0) {
      missing = i;
    }
  }

  return {
    repeated,
    missing,
  };
}

console.log(findRepeatAndMissingNumbers(arr));
