// Brute Force Approach
// Time Complexity: O(n²)
// Space Complexity: O(1)
//
// Compare every possible buying day with every possible selling day
// and keep track of the maximum profit.
const maxProfitBrute = (prices) => {
    // Stores the highest profit found so far
    let maxProfit = 0;
    let n = prices.length;

    // Choose each day as the buying day
    for (let i = 0; i < n; i++) {

        // Compare it with every later day as the selling day
        for (let j = i + 1; j < n; j++) {

            // Calculate profit if bought on day i and sold on day j
            let currentProfit = prices[j] - prices[i];

            // Update the maximum profit if this transaction is better
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }

    // Return the best profit found
    return maxProfit;
};

console.log(maxProfitBrute([6, 8, 1, 2, 30, 19])); // Output: 29



// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// Traverse the array once while tracking:
// 1. The lowest price seen so far (best buying price)
// 2. The maximum profit that can be made
const maxProfitOptimal = (prices) => {

    // Stores the highest profit found so far
    let maxProfit = 0;

    // Lowest stock price encountered so far
    let minPrice = prices[0];

    let n = prices.length;

    // Visit each price only once
    for (let i = 0; i < n; i++) {

        // Profit if we sell today
        let currentProfit = prices[i] - minPrice;

        // Update maximum profit if today's profit is higher
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }

        // Update the minimum buying price if a lower price is found
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }

    // Return the maximum profit possible
    return maxProfit;
};

console.log(maxProfitOptimal([6, 8, 1, 2, 30, 19])); // Output: 29