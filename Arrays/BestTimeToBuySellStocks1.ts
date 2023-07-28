function maxProfit2(prices: number[]): number {
  let left = 0;
  let right = 0;

  let profit = prices[right] - prices[left];

  for (let i = 1; i < prices.length; i++) {
    if (i > right && prices[i] < prices[left]) {
      left = i;
      right = i;
    }
    if (prices[i] > prices[right]) {
      right = i;
    }

    profit = Math.max(profit, prices[right] - prices[left]);
  }

  return profit;
}

function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let profit = Number.MIN_SAFE_INTEGER;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice);
  }
  return profit;
}

const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
