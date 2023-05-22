var maxProfit = function(prices) {
    let result = [];
    
    for(let i = 0; i < prices.length - 1; i++){
        prices.slice(i+1).forEach((item, index) => {
            result.push(item - prices[i]);
        })
    }
    
    return Math.max.apply(null, result) > 0 ? Math.max.apply(null, result) : 0;
};