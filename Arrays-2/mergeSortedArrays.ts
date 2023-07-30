/** Approach - 1 using extra space */
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  let k = 0;
  let result = [];
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result[k++] = nums1[i];
      i++;
    } else {
      result[k++] = nums2[j];
      j++;
    }
  }

  while (i < m) {
    result[k++] = nums1[i++];
  }
  while (j < n) {
    result[k++] = nums2[j++];
  }

  result.forEach((el, idx) => {
    nums1[idx] = el;
  });
}
/** Approach - 2 O(m + n) log(m + n) space - O(1) */
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let left = m - 1, right = 0; left >= 0 && right < n; left--, right++) {
    if (nums1[left] > nums1[right]) {
      let temp = nums1[left];
      nums1[left] = nums2[right];
      nums2[right] = temp;
    } else {
      break;
    }
  }

  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let size = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[size--] = nums1[i--];
    } else {
      nums1[size--] = nums2[j--];
    }
  }

  while (i >= 0) {
    nums1[size--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[size--] = nums2[j--];
  }
}

let nums1 = [
  -10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -5, -5,
  -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5,
  6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];
let nums2 = [
  -10, -10, -9, -9, -9, -9, -8, -8, -8, -8, -8, -7, -7, -7, -7, -7, -7, -7, -7,
  -6, -6, -6, -6, -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -3, -3, -3, -2, -2,
  -2, -2, -2, -2, -2, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2,
  2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7,
  7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9,
];
merge(nums1, 55, nums2, 99);
console.log(nums1);
