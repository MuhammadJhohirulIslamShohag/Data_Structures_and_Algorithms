/*
  Removed Duplicate Element From Array
*/

// Brute Force --- Time: O(n log n) (Set internally), Space: O(n) extra

const removeArrayDuplicate = (arr) => {
    let set = new Set();
    let n = arr.length;
    for(let i = 0; i < n; i++){
        set.add(arr[i])
    }
    return [...set]
}
console.log(removeArrayDuplicate([1,1,2,2,3])); 

// Optimal (Two Pointer — sorted array, in-place)

const removeArrayDuplicate = (arr) => {
    let i = 0; // points to last unique element
    let n = arr.length;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    /*
      let result = [];
      for(let k = 0; k <= i; k++){
        result[k] = arr[k]
      }
      
      return result;
    */
    return arr.slice(0, i + 1);
}
console.log(removeArrayDuplicate([1,1,2,2,3])); 



