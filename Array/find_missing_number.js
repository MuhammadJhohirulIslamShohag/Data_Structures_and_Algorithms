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

// better 
const findMissingNumber = (arr) => {
    let n = arr.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    return expectedSum - actualSum
}
const arr = [8, 2, 4, 5, 3, 7, 1,0];
console.log(findMissingNumber(arr))

// optimal 
const findMissingNumber = (arr) => {
    let n = arr.length;
    let xor1 = 0;
    let xor2 = 0;
    
    for (let i = 0; i <= n; i++) xor1 ^= i
    for (let i = 0; i < n; i++) xor2 ^= arr[i]
    
    return xor1 ^ xor2;
}
const arr = [8, 2, 4, 5, 3, 7, 1, 0];
console.log(findMissingNumber(arr))

