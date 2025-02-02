export { SortArraySelection };

/**
 * 1. TAKE the FIRST [0] element compare to others(to the end of the array) and FIND the SMALLEST. 
 * 2. Put the SMALLEST to the 0 position...
 * 3. TAKE [1] and repeat step 1-2
 * 
 * Sorting algorithm in which the given array is divided into a SORTED and an UNSORTED section. 
 * In each iteration, the element to be inserted has to find its optimal position in the sorted subsequence 
 * and is then inserted while shifting the remaining elements to the right.
 * 
 * Initially, the sorted portion is EMPTY and the unsorted part is the entire list. 
 * In each iteration, we fetch the MINIMUM element from the unsorted list and push 
 * it to the end of the sorted list thus building our sorted array.
 * 
 * TIME COMPLEXITY: O(n^2)
 * 
 * SPACE COMPLEXITY: O(1) 
 * 
 */
function SortArraySelection(array: Array<number>): Array<number> {
	for(let i=0; i < array.length; i++) {
		let min = i;
		for(let j = i+1; j<array.length; j++) {
			if(array[j] < array[min]) {
				min = j;
			}
		}
		if(i!==min) {
			[array[i], array[min]] = [array[min], array[i]];
		}
	}
	return array;
}