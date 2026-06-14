/*
    Palindrome Number
*/
const palindromeNumber = (n) => {
    let dup = n;
    let reverse = 0;

    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        reverse = ( reverse * 10 ) + lastDigit;
        n = Math.floor( n / 10  );
    }
    if( dup === reverse){
        console.log(true);
    }else{
        console.log(false)
    }
}

palindromeNumber(121)


# Coding Symmetry: Checking for Palindrome Numbers in JavaScript

Now that you have mastered counting digits and reversing a number, you have all the tools you need to tackle a favorite problem of technical interviewers: **Checking if a number is a Palindrome**.

A palindrome is a sequence that reads the same backward as forward—like the word *radar*, or the number *121*. In this post, we will look at how to combine your number-reversal skills with a basic conditional check to solve this efficiently.

## The Core Logic: The Mirror Test

To determine if a number is a palindrome, you essentially want to compare the original number to its flipped counterpart.

 1. **Make a Copy:** Because our division logic will gradually destroy the original number n by shrinking it to 0, we must store its initial value in a duplicate variable (dup) first.

 2. **Reverse It:** Use the mathematical extraction loop to completely reverse the digits of n.

 3. **Compare:** Check if the original copy (dup) perfectly matches our newly built reverse number. If they match, it's a palindrome!

## The JavaScript Code

Here is the clean, math-based approach utilizing a copy variable and a while loop:

```javascript
/*
    Palindrome Number
*/
const palindromeNumber = (n) => {
    let dup = n;        // 1. Keep a copy of the original number
    let reverse = 0;

    // 2. Build the reversed number mathematically
    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        reverse = (reverse * 10) + lastDigit;
        n = Math.floor(n / 10);
    }
    
    // 3. Compare the copy against the reversed result
    if (dup === reverse) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Example Usages:
palindromeNumber(121);  // Output: true
palindromeNumber(7789); // Output: false

```

### Visualizing the Walkthrough: 121 vs 7789

Let's see how two different inputs behave when passed into the logic:

 * **Case 1: palindromeNumber(121)**
   * dup stores 121.
   * The loop runs, strips the digits, and reconstructs them into reverse = 121.
   * The conditional checks: 121 === 121, which is **true**.

 * **Case 2: palindromeNumber(7789)**
   * dup stores 7789.
   * The loop runs, reversing the digits into reverse = 9877.
   * The conditional checks: 7789 === 9877, which evaluates to **false**.

## ⚠️ A Note on Negative Numbers

What happens if you check a negative number like -121?

Mathematically, if you read -121 backward, the negative sign ends up at the end (121-), which means it cannot be a palindrome.
In your current code, passing -121 means the loop while (n > 0) never executes. reverse stays 0. Since dup (-121) does not equal 0, it safely prints false. This works out correctly! However, if you ever optimize your code to handle absolute values, always remember to instantly mark negative numbers as false right at the beginning of the function.

```javascript
// Quick optimization guard clause
if (n < 0) return false;

```
## Wrapping Up

By solving this without reliance on built-in string methods like .split().reverse().join(), you save memory overhead and demonstrate a firm grasp on integer mathematics—something interviewers love to see.
You have just unlocked a massive milestone in basic math algorithms! Are you ready to see how these exact concepts translate into arrays or strings next?


