/*
  Removed Duplicate Element From Array
*/

// Brute Force --- Time: O(n log n) (Set internally), Space: O(n) extra

const removeArrayDuplicateBrute = (arr) => {
    let set = new Set();
    let n = arr.length;
    for(let i = 0; i < n; i++){
        set.add(arr[i])
    }
    return [...set]
}
console.log(removeArrayDuplicateBrute([1,1,2,2,3])); 