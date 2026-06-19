/*
    *** Selection Sort ***
        => Selection Sort is the one kind of Sorting Algorithms, which works like we find the minimum swap at the end and put it at the beginning.
        => Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.
*/
/*
    *** Selection Sort Pseudocode ***
        => Store the first element as the smallest value you have seen so far.
        => Compare this item to the next item in the array until you find a smaller number.
        => If a smaller number is found, designate that smaller number to be the new miniumn and continue until the end of the array.
        => If the minimum is not the value(index) you iniitally began with, swap the two values.
        => Repeat this with the next element until the array is sorted.
*/
const array = [13, 30, 5, 6, 20];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        // 1. store the first element as the smallest value you have seen so far.
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            // 2. compare this item to the next item in the array until you find a smaller number.
            if (array[lowest] > array[j]) {
                // 3. if a smaller number is found, designate that smaller number to be the new miniumn and continue until the end of the array.
                lowest = j;
            }
        }
        // 4. if the minimum is not the value(index) you iniitally began with, swap the two values.
        let temp = array[i];
        array[i] = array[lowest];
        array[lowest] = temp;
    }
    return array;
}
selectionSort(array);

function selectionSortES6(array) {
    const swap = (array, index1, index2) => {
        // let a =  [array[index1], array[index2]] ;
        // let b = [array[index2], array[index1]];
        // console.log(a, b)
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };
    for (let i = 0; i < array.length; i++) {
        // 1. store the first element as the smallest value you have seen so far.
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            // 2. compare this item to the next item in the array until you find a smaller number.
            if (array[lowest] > array[j]) {
                // 3. if a smaller number is found, designate that smaller number to be the new miniumn and continue until the end of the array.
                lowest = j;
            }
        }
        // 4. if the minimum is not the value(index) you iniitally began with, swap the two values.
        if(i !== lowest) swap(array, lowest, i);
    }
    return array;
}
selectionSortES6(array);

/*
    *** Time Complexity of Bubble Sort ***
        => O(n * 2);
        => O(n) is the best case, if the array is sorted already.
*/

function selectionSortBigONotation(array) {
    for (let i = 0; i < array.length; i++) {
        // Outer loop is O(n)
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            // Inner loop is O(n)
            if (array[lowest] > array[j]) {
                lowest = j;
            }
        }
        let temp = array[i];
        array[i] = array[lowest];
        array[lowest] = temp;
    }
    return array;
    // Bubble Sorting is Time Complexity -> O(n * 2)
}
selectionSortBigONotation(arr);

# Sorting Step-by-Step: Mastering Selection Sort in JavaScript

You have smoothly transitioned from number theory right into **Arrays and Sorting Algorithms**!

Your Selection Sort implementation is spot-on. Selection Sort is a foundational algorithm that builds your intuition for how data is moved, swapped, and organized inside system memory.
Let's break down exactly how this sorting strategy scans an array, trace your specific input code, and analyze its performance metrics.

## The Core Logic: Finding the Minimum

The fundamental idea behind Selection Sort is division of labor. The algorithm conceptually splits your array into two segments:

 1. A **sorted** section at the front.
 2. An **unsorted** section at the back.

During every pass of the outer loop, the algorithm scans the unsorted section to find the absolute **minimum value**. Once found, it swaps that minimum value with the element at the beginning of the unsorted section.
Each swap expands your sorted section by exactly one element from left to right.

## Analyzing your Code Implementation
Here is your clean implementation tracking the minimum index through a nested loop:

```javascript
/*
  Selection Sort
*/
const selectionSorted = (arr) => {
    let n = arr.length;
    
    // Outer loop: Tracks the boundary of the sorted section
    for (let i = 0; i < n - 1; i++) {
        let min = i; // Assume the first unsorted item is the smallest
        
        // Inner loop: Scans the remaining unsorted items
        for (let j = i + 1; j < n; j++) { 
            if (arr[min] > arr[j]) { 
                min = j; // Found a smaller element, update index
            }
        }
        
        // Swap the found minimum element with the current position 'i'
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    
    console.log(arr);
}

// Example Execution:
selectionSorted([13, 45, 9, 30]); 
// Output: [9, 13, 30, 45]

```

> **Note:**

 In your original inner loop layout, let j = i works perfectly fine, but starting at let j = i + 1 saves a tiny bit of execution work by preventing the element from checking against itself on the first step!
> 

### Step-by-Step Trace for [13, 45, 9, 30]

Let's look at exactly how the positions change with each outer loop increment i:

#### **Pass 1 (i = 0)**

 * **Unsorted Sub-array:** [13, 45, 9, 30]

 * The inner loop scans and finds that 9 (at index 2) is the minimum.

 * Swap index 0 (13) with index 2 (9).

 * **Array state:** [9 | 45, 13, 30] *(9 is now locked in place)*

#### **Pass 2 (i = 1)**

 * **Unsorted Sub-array:** [45, 13, 30]

 * The inner loop scans and finds that 13 (at index 2) is the smallest of the remaining items.

 * Swap index 1 (45) with index 2 (13).

 * **Array state:** [9, 13 | 45, 30]

#### **Pass 3 (i = 2)**

 * **Unsorted Sub-array:** [45, 30]

 * The inner loop scans and finds that 30 (at index 3) is the smallest.

 * Swap index 2 (45) with index 3 (30).

 * **Final Array State:** [9, 13, 30, 45]

## 📊 Performance Breakdown

While Selection Sort is highly intuitive to write, it's vital to recognize its performance costs:

 * **Time Complexity:** 

O(n^2) across **all cases** (Best, Average, and Worst). Even if the array is already perfectly sorted, the inner loop still insists on scanning the remaining elements to confirm there isn't a smaller one hidden at the end.

 * **Space Complexity:** O(1) (In-place). It is highly memory efficient because it sorts the items directly within the existing structure without creating replica storage arrays.
