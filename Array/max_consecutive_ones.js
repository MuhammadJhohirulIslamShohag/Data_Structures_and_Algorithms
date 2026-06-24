/*
 Count Maximum Consecutive One's in the array
*/

// Brute Force — O(n²)
const maxConsecutiveOnesBrute = (arr) => {
    let n = arr.length;
    let maxCount = 0;
    let count = 0;
    
    for(let i = 0; i < n; i++){
        if(arr[i] == 1) {
            count += 1;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }
    return maxCount;
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(maxConsecutiveOnesBrute(arr)); // 3

// Optimal — O(n)
const maxConsecutiveOnesOptimal = (arr) => {
    return Math.max(...arr.join('').split('0').map(s => s.length))
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(maxConsecutiveOnesOptimal(arr)); // 3