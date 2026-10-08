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
    // if ihe array is empty, there are no unique elements to count so return 0;.
    if(nums.length === 0) return 0;
    
    // 'k' is the slow pointer which are tracking the index of the last unique element.
    let k = 0;
     
    // Iterate through every element with the first pointer 'i'
    for(let i = 0; i < nums.length; i++){
      
      // check if the current element is unique compared to the last unique one.
      if(nums[k] !== nums[num]){

          // Move the slow pointer forward to the next slot.
          k++

         // Place the new unique value at the current position in-place.  
         nums[k] = nums[i];
       }
    }

    // return the count of unique values (k+1 because k is the zero based index.
    return k;

}



