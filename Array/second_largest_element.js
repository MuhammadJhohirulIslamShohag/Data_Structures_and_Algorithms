/*
  Second Largest Element 
*/

// Brute Force — O(n log n)

const findSecondLargestElement = (arr) => {
    arr.sort((a, b) => a - b);
    let firstLargest = arr[arr.length - 1];
    for(let i = arr.length - 2; i >= 0; i--){
        if(arr[i] !== firstLargest){
            return arr[i];
        }
    }
    return -1; // no second distinct largest exists
}

// Better — O(n), two passes
const findSecondLargestElement = (arr) => {
    let firstLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest) firstLargest = arr[i];
    }
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}


// Optimal — O(n), single pass

const findSecondLargestElement = (arr) => {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}