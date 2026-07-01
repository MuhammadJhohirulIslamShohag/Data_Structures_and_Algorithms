/* 
  First and Last Occurrence in a Sorted Array 
*/

// Brute Force 
function lastOccurrenceBrute(arr, target) {
    
    let n = arr.length;
    let lastIndex = -1;
    
    for(let i = n - 1; i >= 0; i--){
        if(arr[i] == target){
            lastIndex = i;
        }
    }
    return lastIndex;
}

console.log(lastOccurrenceBrute([3, 4, 13, 13, 13, 20, 40], 13))

function firstOccurrenceBrute(arr, target) {
    
    let n = arr.length;
    let firstIndex = -1;
    
    for(let i = 0; i < n; i++){
        if(arr[i] == target){
            firstIndex = i;
        }
    }
    return firstIndex;
}

console.log(firstOccurrenceBrute([3, 4, 13, 13, 13, 20, 40], 13))

// Optimal 
function lastOccurrenceOptimal(arr, target) {
    let n = arr.length;
    let lastIndex = -1;
    let high = n - 1;
    let low = 0;
    
    while (low <= high){
        const mid = Math.floor((low+high )/2)
        if(arr[mid] == target){
            lastIndex = mid
            low = mid + 1;
        } else if (arr[mid] > target){
            high = mid -1;
        } else {
            low = mid + 1
        }
    }
    
    return lastIndex;
}

console.log(lastOccurrenceOptimal([3, 4, 13, 13,12, 13, 20, 40], 13))

function firstOccurrenceOptimal(arr, target) {
    let n = arr.length;
    let firstIndex = -1;
    let high = n - 1;
    let low = 0;
    
    while (low <= high){
        const mid = Math.floor((low + high ) / 2)
        if(arr[mid] === target){
            firstIndex = mid;
            high = mid - 1;
        } else if(arr[mid] > target){
            high= mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return firstIndex;
}

console.log(firstOccurrenceOptimal([3, 4,5, 13, 13, 13, 20, 40], 13))