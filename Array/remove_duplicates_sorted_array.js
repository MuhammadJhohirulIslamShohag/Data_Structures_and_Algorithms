/**
 * Remove Duplicates from Sorted Array
 * 
 * Task:
 * Given a sorted array `nums`, remove the duplicates in-place such that
 * each element appears only once and returns the new length `k`.
 */

/**
*
* Optimal Solution: Two pointer Approach
* Modifies the array directly without allocating extra memory 
* 
* @param {number[]} mums - Sorted array of integers;
* @return {number} - Count of unique elements (k)
*
* Time Complexity: O(N) - Single Pass through the array;
* Space Complexity: O(1) - In-place modifications - constant extra space.
*
**/

const removedDuplicateSortedArray = (nums) => {
    // if it is empty array no duplicate sorted array so return zero.
    if(nums.length === 0) return 0;
    
    // slow pointer which indicates unique values index;
    let k = 0;
     
    // through every element and in place changing element 
    for(let i = 0; i < nums.length; i++){
      
      // checked if it is unique value 
      if(nums[k] !== nums[num]){
          // if it is swapping array 
          nums[k] = nums[i];

         // just move next unique value index 
          k++;
       }
    }

    // return how much unique value in the array.
    return k;

}



