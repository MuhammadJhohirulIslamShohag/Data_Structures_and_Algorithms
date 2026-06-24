/*
   Find Missing Number
*/

// Brute Force 
const findMissingNumber = (arr) => {
    let n = arr.length;
    
    for(let i = 0; i <= n; i++){
        let found = false;
        
        for(let j = 0; j < n; j++){
            if(arr[j] === i){
                found = true;
                break;
            }
        }
        if(!found){
            return i
        }
        
    }
    return -1
}
const arr = [8, 2, 4, 5, 3, 7, 1, 0];
console.log(findMissingNumber(arr))