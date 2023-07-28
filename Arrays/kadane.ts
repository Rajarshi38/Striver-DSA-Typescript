
function maxSubArray(arr: number[]): number {
  const len = arr.length;

  let maxSum = Number.MIN_SAFE_INTEGER;
  let currSum = 0;
  for (let i = 0; i < len; i++) {
    currSum += arr[i];
    maxSum = Math.max(currSum, maxSum);
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return maxSum;
};

let arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr));