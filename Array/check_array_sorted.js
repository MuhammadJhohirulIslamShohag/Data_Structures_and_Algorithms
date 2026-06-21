/*
   Check Array Sorted 
*/

// Brute Force — O(n²)
const checkArraySorted = (arr) => {
    let n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = i+1; j < n; j++){
            if(arr[i] > arr[j]){
                return false;
            }
        }
    }
    return true;
}

// Optimal — O(n)
const checkArraySorted = (arr) => {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}
checkArraySorted([5,1,6,4,9]); // false