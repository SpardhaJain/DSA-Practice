function maxProfit(stocks) {
    let globalProfit = 0;
    const sortedStockVal = stocks.sort();
    for (i=1; i<sortedStockVal.length; i++) {
        const profit = sortedStockVal[i] - sortedStockVal[0];
        if (profit > globalProfit) globalProfit = profit;
    }
    return globalProfit;
};

console.log(maxProfit([7,1,5,6,3,4]));