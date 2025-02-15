export { SortArrayBucket };

import { SortArrayInsertion } from "./insertion-sort.js";



/**
 * Bucket Sort is a comparison-based sorting technique that operates on array elements 
 * by dividing them into multiple buckets recursively and then sorting these buckets 
 * individually using a separate sorting algorithm altogether. 
 * Finally, the sorted buckets are re-combined to produce the sorted array.
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
function SortArrayBucket(array: Array<number>):  Array<number> {
    if (array.length === 0) {
        return array;
    }

    // Determine min and max values of input array
    let min = array[0];
    let max = array[0];
    array.forEach(function (current: number) {
        if (current < min) {
            min = current;

        } else if (current > max) {
            max = current;
        }
    });

    // Create buckets depending in min and max and sinlge bucket size
    const bucket_size = 50;
    const bucket_count = Math.floor((max - min) / bucket_size) + 1;
    const all_buckets = new Array<number[]>(bucket_count);
    for (let i = 0; i < all_buckets.length; i++) {
        all_buckets[i] = [];
    }

    // put values to backets depending on value
    array.forEach(function (current: number) {
        all_buckets[Math.floor((current - min) / bucket_size)].push(current);
    });

    array.length = 0;

    // Insert sort of each bucket and concat the sorted resulted buckets
    all_buckets.forEach(function(bucket: Array<number>) {
        SortArrayInsertion(bucket);
        bucket.forEach(function (element) {
            array.push(element);
        });
    });
    return array;
}


