/*
  GCD (Greatest Common Divisor) - Linear Search
*/

const GCDNumber = (n1, n2) => {
    let gcd = 1;
    
    // The GCD can never be larger than the smaller of the two numbers
    let limit = Math.min(n1, n2); 
    
    for (let i = 1; i <= limit; i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            gcd = i; // Continually update with the larger common divisor
        }
    }
    
    console.log(gcd);
}

// Example Usage:
GCDNumber(12, 9); // Output: 3


---



