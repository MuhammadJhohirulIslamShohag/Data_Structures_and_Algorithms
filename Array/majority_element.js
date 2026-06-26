/*
   Find the Majority Element that occurs more      than N/2 times
*/

// Brute Force Approach
const majorityElementBrute = (arr) => {
    let n = arr.length;
    
    // 1. Outer loop: Pick each element one by one to test as a potential majority element
    for (let i = 0; i < n; i++) {
        let count = 0; // Reset counter for the current element
        
        // 2. Inner loop: Scan the whole array to count how many times arr[i] appears
        for (let j = 0; j < n; j++) { // Added 'let' to avoid creating a global variable
            if (arr[i] === arr[j]) {  // Using strict equality (===) for best practice
                count++; // Increment count when a match is found
            }
        }
        
        // 3. Condition Check: If the count is greater than N/2, we found the majority element
        if (count > Math.floor(n / 2)) { 
            return arr[i]; // Return the element immediately
        }
    }
    
    // 4. Return -2 if no majority element exists in the array
    return -2; 
}


console.log(majorityElementBrute([7, 0, 0, 1, 7, 7, 2, 7, 7])); // Output: 7
