export { SortArrayInsertion };


/**
 * 1. SORTED  |  UNSORTED arrays
 * 2. Take element from unsorted and put it to sorted
 * 
 * Sorting algorithm in which the given array is divided into a SORTED and an UNSORTED section. 
 * In each iteration, the element to be inserted has to find its optimal position in the sorted subsequence 
 * and is then inserted while shifting the remaining elements to the right.
 * 
 * Start by comparing the SECOND element with the FIRST element, SWAP if necessary
 * For each new element, iterate through the sorted portion of the array, 
 * and insert this element where it needs to be, by making comparisons
 * 
 * 
 * TIME COMPLEXITY: O(n^2)
 *    Best Case:   O(n)  
 *    Worst Case:  O(n^2)
 * 
 * SPACE COMPLEXITY: O(1) 
 * 
 * @param array 
 * @returns sorted array
 */
function SortArrayInsertion(array: Array<number>): Array<number> {
    // first element is already sorted
    for(let i = 1; i < array.length; i++) {
        let j = i;
        while(j > 0 && array[j] < array[j-1]) {
            [array[j-1], array[j]] = [array[j], array[j-1]];
            j--;
        }
    }
    return array;
}