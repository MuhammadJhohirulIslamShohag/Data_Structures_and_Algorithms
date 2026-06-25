/*
  Two Sum
*/

// brute force 
const twoSumBrute = (arr, target) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        // Start j from i + 1 to avoid checking the same element twice
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};
console.log(twoSumBrute([2, 6, 5, 8, 11], 14)); // Output: [1, 3] (6 + 8 = 14)


// better 
const twoSumBetter = (arr, target) => {
    let n = arr.length;
    let hashMap = new Map(); // Stores: key = element value, value = element index
    
    for (let i = 0; i < n; i++) {
        let currentNum = arr[i];
        let rem = target - currentNum;
        
        // Check if the complement exists in our map
        if (hashMap.has(rem)) {
            return [hashMap.get(rem), i];
        }
        
        // Otherwise, store the current number and its index
        hashMap.set(currentNum, i);
    }
    return [-1, -1];
};
console.log(twoSumBetter([2, 6, 5, 8, 11], 14)); // Output: [1, 3]

// optimal 
const twoSumOptimal = (arr, target) => {
    // We sort the array first. (Note: This ruins original indices!)
    arr.sort((a, b) => a - b); 
    
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        
        if (sum === target) {
            return true; // Or return the sorted values [arr[left], arr[right]]
        } else if (sum < target) {
            left++; // Need a larger sum, move left pointer right
        } else {
            right--; // Need a smaller sum, move right pointer left
        }
    }
    return false;
};
console.log(twoSumOptimal([2, 6, 5, 8, 11], 14)); // Output: true

