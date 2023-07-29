function merge(intervals: number[][]): number[][] {
  const result: number[][] = [];

  const rows = intervals.length;

  intervals.sort((a, b) => a[0] - b[0]);

  let start = intervals[0][0];
  let end = intervals[0][1];

  let count = 1;
  for (let i = 1; i < rows; i++) {
    const [startTime, endTime] = intervals[i];
    if (startTime <= end) {
      end = Math.max(end, endTime);
    } else {
      result.push([start, end]);
      start = startTime;
      end = endTime;
      count++;
    }
  }
  if (count > result.length) result.push([start, end]);

  return result;
}

const intervals = [
  [1, 4],
  [0, 1],
];

const result = merge(intervals);
console.log(result);
