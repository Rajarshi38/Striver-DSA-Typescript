function nextPermutation(nums: number[]): void {
  let pivot: number = -1;
  const len = nums.length;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivot = i;
      break;
    }
  }

  if (pivot == -1) {
    nums = nums.reverse();
    return;
  }
  let greaterThanPivotElement = Number.MAX_SAFE_INTEGER;
  let greaterThanPivotElementIndex = -1;
  for (let i = pivot + 1; i < len; i++) {
    if (nums[i] > nums[pivot] && nums[i] <= greaterThanPivotElement) {
      greaterThanPivotElement = nums[i];
      greaterThanPivotElementIndex = i;
    }
  }

  [nums[greaterThanPivotElementIndex], nums[pivot]] = [
    nums[pivot],
    nums[greaterThanPivotElementIndex],
  ];

  // reverse(nums, pivot + 1, len - 1);

  nums.splice(pivot + 1, len - pivot, ...nums.slice(pivot + 1, len).reverse());
}

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

let arr: number[] = [1, 3, 2];
nextPermutation(arr);
console.log(arr);
