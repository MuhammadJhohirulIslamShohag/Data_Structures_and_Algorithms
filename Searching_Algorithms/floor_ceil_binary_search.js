/* Floor and Ceil in Sorted Array */

const floorAndCeilBinarySearch = (arr, x) => {
    
    // Find the largest value <= x
    const binarySearchFloor = () => {
        let low = 0, high = arr.length - 1;
        let result = -1; // Or null if no floor exists
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] <= x) {
                result = arr[mid]; // This is a candidate
                low = mid + 1;     // Keep looking for a larger one
            } else {
                high = mid - 1;
            }
        }
        return result;
    }

    // Find the smallest value >= x
    const binarySearchCeil = () => {
        let low = 0, high = arr.length - 1;
        let result = -1; // Or null if no ceil exists
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] >= x) {
                result = arr[mid]; // This is a candidate
                high = mid - 1;    // Keep looking for a smaller one
            } else {
                low = mid + 1;
            }
        }
        return result;
    }

    return { floor: binarySearchFloor(), ceil: binarySearchCeil() };
}

const arr = [3, 4, 4, 7, 8, 10];
console.log(floorAndCeilBinarySearch(arr, 5)); 
// Output: { floor: 4, ceil: 7 }

/*

## Finding the "Floor" and "Ceil": The Final Piece of the Binary Search Puzzle

In many real-world applications—such as calculating tax brackets, finding grade thresholds, or determining time-based events—you don't just need an exact match. You need to know the **closest surrounding values**.
That is where **Floor** and **Ceil** algorithms come into play.

 * **Floor:** The largest element in the array that is less than or equal to x.

 * **Ceil:** The smallest element in the array that is greater than or equal to x.

### The All-in-One Solution

By combining these two logic sets, we can find the "neighborhood" of any target value in O(\log n) time.

```javascript
const floorAndCeilBinarySearch = (arr, x) => {
    
    // Find the largest value <= x
    const binarySearchFloor = () => {
        let low = 0, high = arr.length - 1;
        let result = -1; // Or null if no floor exists
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] <= x) {
                result = arr[mid]; // This is a candidate
                low = mid + 1;     // Keep looking for a larger one
            } else {
                high = mid - 1;
            }
        }
        return result;
    }

    // Find the smallest value >= x
    const binarySearchCeil = () => {
        let low = 0, high = arr.length - 1;
        let result = -1; // Or null if no ceil exists
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] >= x) {
                result = arr[mid]; // This is a candidate
                high = mid - 1;    // Keep looking for a smaller one
            } else {
                low = mid + 1;
            }
        }
        return result;
    }

    return { floor: binarySearchFloor(), ceil: binarySearchCeil() };
}

const arr = [3, 4, 4, 7, 8, 10];
console.log(floorAndCeilBinarySearch(arr, 5)); 
// Output: { floor: 4, ceil: 7 }

```

### Visualizing the Search (Target = 5)

Let’s watch how the algorithm narrows down the search space for our array [3, 4, 4, 7, 8, 10]:

| Goal | Iteration | Low | High | Mid | arr[mid] | Is condition met? | New Best |
|---|---|---|---|---|---|---|---|
| **Floor** | 1 | 0 | 5 | 2 | 4 | Yes (4 \le 5) | 4 |
|  | 2 | 3 | 5 | 4 | 8 | No | 4 |
|  | 3 | 3 | 3 | 3 | 7 | No | 4 |
| **Ceil** | 1 | 0 | 5 | 2 | 4 | No | - |
|  | 2 | 3 | 5 | 4 | 8 | Yes (8 \ge 5) | 8 |
|  | 3 | 3 | 3 | 3 | 7 | Yes (7 \ge 5) | 7 |

### Why this is a powerful pattern

 1. **Efficiency:** We achieve two complex lookups in logarithmic time. If you needed to do this for a system with 1,000,000 records, this approach would take about **20 operations** per request, while a linear scan could take up to **1,000,000**.

 2. **Versatility:** This pattern is the foundation for range queries. Need to find all numbers *between* 5 and 15? First find the Ceil of 5, then the Floor of 15, and you have your boundaries.

 3. **Clean Architecture:** Wrapping these inside a single function keeps your code organized and easy to test, following the **Encapsulation** principle of clean code.

### Pro-Tip for your Code

In the implementation above, I changed result to start at -1 (or null). This handles cases where the target is smaller than the smallest number or larger than the largest number, returning a clear indicator that no floor or ceiling was found.

**Now that you’ve mastered the art of searching, what data structure are you thinking of tackling next? Let me know in the comments!**
*Happy coding!* 🚀

*Note: In your provided recursive code, ensure the recursive helper is passed arr.length - 1 initially to avoid index-out-of-bounds errors when calculating mid.*

*/
