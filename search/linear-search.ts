export { SearchArrayLinear };

/**
 * Do linear search in UNSORTED array
 * 
 * TIME COMPLEXITY: O(N)
 *    Best Case: O(1)
 *    Worst Case: O(N)
 *    Average Case: O(N)  
 * 
 * SPACE COMPLEXITY: O(1) 
 *    The amount of memory required by the algorithm remains constant regardless of the size of the input array.
 *    Does not requier and additional data structures or recursion calls 
 * 
 * @param array 
 * @param value_to_search 
 * @returns [index in array of the searched value]
 */
function SearchArrayLinear(array: Array<number>, value_to_search: number): number {
    for(let i = 0; i < array.length; i++) {      
        if(array[i]===value_to_search) {
            return i;
        }
    }
    return -1;
}