// Best time to buy and sell a stock

// [7, 1, 5, 3, 6, 4]

//Brute force
function buy_and_sell_stock(prices) {
    let max_profit = 0;
    for (let i=0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            max_profit = Math.max(max_profit, prices[j] - prices[i]);
        }
    }
    console.log("Max ===>", max_profit);
}



// Optimal
function buy_and_sell_stock_optimal(prices) {
    let max_profit = 0;
    let min = prices[0];
    for (let i= 1; i < prices.length; i++) {
       const cost = prices[i] - min;
       max_profit = Math.max(cost, max_profit);
       min = Math.min(min, prices[i]);
    }
    console.log("Max ===>", max_profit);
}

buy_and_sell_stock_optimal( [7, 1, 5, 3, 6, 4])