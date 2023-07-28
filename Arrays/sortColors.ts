function sortColors(arr: number[]): void {
  const len = arr.length;
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}

let arr: number[] = [1, 1, 0, 0, 2, 1, 0, 2, 1];
sortColors(arr);
console.log(arr);
