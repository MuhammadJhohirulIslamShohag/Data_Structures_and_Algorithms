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
            break;
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
            break;
        }
    }
    return firstIndex;
}

console.log(firstOccurrenceBrute([3, 4, 13, 13, 13, 20, 40], 13))