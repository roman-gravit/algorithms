export { InterpolationSearch };

/**
 *  Interpolation search
 *  Estimate the position of the item
 *  Interpolation search is an improved variant of binary search. 
 *  This search algorithm works on the probing position of the required value. 
 *  For this algorithm to work properly, the data collection should be in a sorted form and equally distributed.
 * 
 *  Interpolation search estimates the position of a search item based on the value of the key. 
 *  In other words, it uses the distribution of values in the array to narrow down the search range. 
 *  This can make it more efficient than binary search for certain types of data.
 */

function InterpolationSearch(arr: Array<number>, target: number) : number {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high && target>=arr[low] && target <=arr[high]) {
		if (low===high) {
			if(arr[low]===target) {
				return low;
			} else {
				return -1;
			}
		}

		let pos = low + Math.floor( ((high-low)/(arr[high]-arr[low])) * (target-arr[low]) );

		if(arr[pos] === target) {
			return pos;
		}

		if(arr[pos] < target) {
			low = pos+1;
		} else {
			high = pos-1;
		}
	}

	return -1; 
}