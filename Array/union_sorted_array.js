/*
  Union of Two Sorted Arrays
*/

// Better
const unionSortedArrayBetter = (arr, arr1) => {
    let n1 = arr.length;
    let n2 = arr1.length;
    let unionArr = new Set();
    
    for(let i = 0; i < n1; i++){
        unionArr.add(arr[i])
    }
    for(let j = 0; j < n2; j++){
        unionArr.add(arr1[j])
    }
    
    return [...unionArr].sort((a,b) => a - b );
}

console.log(unionSortedArray([2, 3, 4, 4, 5, 11, 12],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))