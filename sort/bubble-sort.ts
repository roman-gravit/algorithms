export { SortArrayBubble, SortArrayModifiedBubble };

/**
 * Compare two elements at time and swap if the 2nd element is larger than the first.
 * If a given array of elements has to be sorted in ascending order, 
 * bubble sorting will start by comparing the first element of the array with the second element 
 * and immediately SWAP them if it turns out to be greater than the second element, 
 * and then move on to compare the second and third element, and so on.
 * 
 * ADD FLAG if there was no swap - we can BREAK the loop, sort is complete
 * 
 * TIME COMPLEXITY: O(N^2)
 *    Best Case: O(N^2)  
 *    Worst Case: O(N^2)
 * 
 * SPACE COMPLEXITY: O(logN) 
 * 
 * @param array 
 * @returns sorted array
 */
function SortArrayModifiedBubble(array: number[]): number[] {
    let was_swapped = false;
    for(let i = 0; i < array.length; i++) {
        for(let j=0; j < array.length - 1; j++) {
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                was_swapped = true;
            }
        }

        if(!was_swapped) {
            break;
        }
    }

    return array;
}


/**
 * Compare two elements at time and swap if the 2nd element is larger than the first.
 * If a given array of elements has to be sorted in ascending order, 
 * bubble sorting will start by comparing the first element of the array with the second element 
 * and immediately SWAP them if it turns out to be greater than the second element, 
 * and then move on to compare the second and third element, and so on.
 * 
 * TIME COMPLEXITY: O(n^2)
 *    Best Case: O(n^2)  
 *    Worst Case: O(n^2)
 * 
 * SPACE COMPLEXITY: O(1) 
 * 
 * @param array 
 * @returns sorted array
 */
function SortArrayBubble(array:  Array<number>): Array<number> {
    for(let i = 0; i < array.length; i++) {
        for(let j=0; j < array.length - i - 1; j++) {
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}