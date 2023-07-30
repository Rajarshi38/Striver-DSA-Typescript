/** Find duplicate but with extra space */
function findDuplicate2(arr: number[]): number {
  const map = new Map<number, number>();
  for (let i of arr) {
    if (map.has(i)) {
      map.set(i, map.get(i)! + 1);
    } else {
      map.set(i, 1);
    }
  }
  let result: number = -1;
  for (let [key, value] of map) {
    if (value > 1) {
      result = key;
      break;
    }
  }
  return result;
}
/** optimal solution using two-pointer slow-fast */
function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  fast = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return fast;
}

const nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
