export { SearchArrayBinaryIterative, SearchArrayBinaryRecursive };

/**
 * Do binary search in sorted array: repeatedly dividing the search interval in half
 * 
 * TIME COMPLEXITY: O(logN)
 *    Best Case: O(1)  
 *    Worst Case: O(log N)
 *    Average Case: O(log N)
 *    8 elements = 3 attempts max, 24 elements = 5 attempts max, 1002 elements = 10 attempts max
 * 
 * SPACE COMPLEXITY: O(1) 
 * The amount of memory required by the algorithm remains constant regardless of the size of the input array.
 * Does not requier and additional data structures or recursion calls 
 * 
 * @param sorted_array 
 * @param value_to_search 
 * @returns [index in array of the searched value, number of attempts]
 */
function SearchArrayBinaryIterative(sorted_array: Array<number>, value_to_search: number):  number {    
    if(sorted_array.length === 0) {
        return -1;
    }

    if(sorted_array.length ===1) {
        return 0;
    }

    let from = 0;
    let to = sorted_array.length -1;

    while(from<=to) {

        const middle_index = Math.floor((to + from)/2);
        const middle_value = sorted_array[middle_index];
        
        if(middle_value===value_to_search) {
            return middle_index;
        
        } else if(middle_value < value_to_search) {
            // Forget about the left path of the array
            // Search only in the right part
            from = middle_index + 1;
        
        } else {
            // Forget about the right part of the array
            // Search only in the left part 
            to = middle_index - 1;
        }
    }

    return -1;
}

/**
 * TIME:   O(log N)
 * SPACE:  O(log N) ( stack of functions calls)
 * @param sorted_array 
 * @param target 
 * @param low 
 * @param high 
 * @returns 
 */
function SearchArrayBinaryRecursive(sorted_array: Array<number>, 
                                    target: number, 
                                    low = 0, 
                                    high = sorted_array.length - 1   
                                    ): number
{
    if( low > high) {
        return -1;
    }

    const mid = Math.floor((low + high)/2);

    if(sorted_array[mid] === target) {
        return mid; 
    
    } else if (sorted_array[mid] < target) {
        return  SearchArrayBinaryRecursive(sorted_array, target, mid+1, high);
    
    } else {
        return  SearchArrayBinaryRecursive(sorted_array, target, low, mid-1);
    }
}