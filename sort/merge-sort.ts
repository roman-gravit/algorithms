export { SortArrayMerge };


/**
 * Divide and Conquer approach 
 * 
 * Break an array into a smaller arrays (arrays of 1 element), then merge the arrays together while sorting them.
 * 
 * TIME COMPLEXITY: O(N*logN)
 *    Best Case: O(N*logN)  
 *    Worst Case: O(N*logN)
 * 
 * SPACE COMPLEXITY: O(N) 
 * 
 * @param array 
 * @returns sorted array
 */
function SortArrayMerge(array: Array<number>): Array<number> {
    if (array.length === 1) {
        return array;
    }

    // Break the array into two sub-arrays 
    const middle = Math.floor(array.length / 2);
    const left_array = SortArrayMerge(array.slice(0, middle));
    const right_array = SortArrayMerge(array.slice(middle));
    return merge(left_array, right_array);

    
    /*
        Compare the first elements of the 2 subarrays, and push the smaller of the two, to the result.
        Compare the 2nd element of the first array to the 1st element of the 2nd array, and so on.
        If we have exhausted the array elements in any of the 2 subarrays, 
        then just push the other subarray to the result
    */
    function merge(left: number[], right: number[]): number[] {
        let result: number[] = []; 
        let left_index = 0;
        let right_index = 0;
    
        while (left_index < left.length && right_index < right.length) {
            if (left[left_index] < right[right_index]) {
                result.push(left[left_index]);
                left_index++;

            } else {
                result.push(right[right_index]);
                right_index++;
            }
        }
    
        return result.concat(left.slice(left_index)).concat(right.slice(right_index));
    }

}
