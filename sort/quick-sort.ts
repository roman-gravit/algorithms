export { SortQuickArray,  SortQuickArrayMutation, SortQuickArrayMutation2 };


/**
 * Divide and Conquer approach (NOT STABLE!!!)
 *  
 * Algorithm 
 * 1. Pick a PIVOT element
 * 2. Partition the array into two sub-arrays: less elements got the left sub-array,
 *    elements greater to the right sub-array
 * 3. Call quicksort recursively on the two sub-arrays
 * 
 * 
 * !!!Chrome .sort uses quickSort - so its NOT stable: it can change the positions of the equal elements
 * NOT STABLE!!!
 * 
 * TIME COMPLEXITY: O(log n * n) 
 *    Worst Case:   O(n*n)
 * Depends on which index we choose the PIVOT.
 * 
 * SPACE COMPLEXITY: O(n) 
 *  
 */
function SortQuickArray(array: Array<number>): Array<number> {
    // base case
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0];
  
    const left = Array<number>(); 
    const right = Array<number>();

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...SortQuickArray(left), pivot, ...SortQuickArray(right)];
}

function SortQuickArrayMutation(arr: Array<number>, left=0, right=arr.length-1): Array<number> {
    if(left < right) {
        const pivot_index = pivot(arr, left, right);
        SortQuickArrayMutation(arr, left, pivot_index-1);
        SortQuickArrayMutation(arr, pivot_index+1, right);
    }
    return arr;
}

function pivot(arr: Array<number>, start=0, end=arr.length-1): number {
    // get first element
    let pivot = arr[start];
    let swap_index = start;

    for(let i = start+1; i <= end; i++) {
        // if the element is smaller than pivot
        if(arr[i] < pivot) {
            swap_index++;
            if(swap_index!==i) {
                [arr[swap_index], arr[i]] = [arr[i], arr[swap_index]];
            }
        }
    }

    // swap pivot with the element with swap_index
    if(start!==swap_index) {
        [arr[start], arr[swap_index]] = [arr[swap_index], arr[start]];
    }

    return swap_index;
}


/**
 *  Algorithm 
 *  1. Find the PIVOT 
 *  2. Start the left pointer at first element
 *  3. Start the right pointer at last element
 *  4. Compare the element pointing with the left pointer and if it less than the pivot,
 *     then move the left pointer to the right(add 1 to the left index).
 *     Continue this until left side element is greater than or equal to the pivot
 *  5. Compare the element pointing with the right pointer and if it greater than the pivot,
 *     then move the right pointer to the left(substract 1 to the right index) 
 *     Continue this until right side element is less than or equal to the pivot
 *  6. Check if left pointer is less than or equal to right pointer, then swap the elements
 *     in locations of these pointers
 *  7. Increment the left pointer and decrement the right pointer
 *  8. If index of left pointer is still less than the index of the right pointer, then 
 *     repeat the process, else return the index of the left pointer
 */
function SortQuickArrayMutation2(arr: Array<number>): Array<number> {

    // 2. Start the left pointer at first element
    // 3. Start the right pointer at last element
    return _SortHelper(arr, 0, arr.length-1); 
}

function _SortHelper(arr: Array<number>, left: number, right: number): Array<number> {
    if(arr.length < 2) {
        return arr;
    }

    const index = _DoPartition(arr, left, right);
    if(left < index -1) {
        _SortHelper(arr, left, index - 1);
    }

    if(index < right) {
        _SortHelper(arr, index, right);
    }

    return arr;
}

function _DoPartition(arr: Array<number>, left: number, right: number): number {

    //1. Find the PIVOT: middle
    const pivot = arr[Math.floor((left+ right)/2)];
    
    while (left<=right) {
        //  4. Compare the element pointing with the left pointer and if it less than the pivot,
        //     then move the left pointer to the right(add 1 to the left index).
        //     Continue this until left side element is greater than or equal to the pivot
        while (arr[left] < pivot) {
            left++;
        }

        //  5. Compare the element pointing with the right pointer and if it greater than the pivot,
        //     then move the right pointer to the left(substract 1 to the right index) 
        //     Continue this until right side element is less than or equal to the pivot
        while (arr[right] > pivot) {
            right--;
        }


        if(left<=right) {
            //  6. Check if left pointer is less than or equal to right pointer, then swap the elements
            //     in locations of these pointers
            [arr[left], arr[right]] = [arr[right], arr[left]];
            //  7. Increment the left pointer and decrement the right pointer
            left++;
            right--;
        }
    }

    //  8. If index of left pointer is still less than the index of the right pointer, then 
    //     repeat the process, else return the index of the left pointer
    return left;
}