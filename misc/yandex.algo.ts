export { FindNonMinOrMax, FindNumberOfPairsForce, FindNumberOfPairsTwoPointers, LeftBinSearch};

/**
 * Concatenation of Array
 * Given an integer array nums of length n, 
 * you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * 
 * Specifically, ans is the concatenation of two nums arrays.
 * 
 * Return the array ans.
 * 
 * Constraints:
 * n == nums.length
 * 1 <= n <= 1000
 * 1 <= nums[i] <= 1000
 * 
 * Example: 
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: The array ans is formed as follows: 
 * ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
 * ans = [1,2,1,1,2,1]
 */
function ConcatArray(nums: Array<number>): Array<number> {
	// Constraints: 1 <= n <= 1000
	
	let ans = new Array<number>(nums.length * 2);

	return ans;
}

/**
 * left pointer, right pointer
 * @param nums 
 * @param searched_value
 * 
 * Return index of searched element
 */
function LeftBinSearch(nums: Array<number>, searched_value: number): number {
	if(nums.length===0) {
		return -1;
	}

	if(nums.length===1) {
		return 0;
	}

	let left = 0;
	let right = nums.length - 1;
	let middle = -1; 
	while (left < right) {
		middle = Math.floor((left + right)/2);
		if(nums[middle] === searched_value) {
			return middle;
		}

		if(nums[middle] > searched_value) {
			right = middle;
		} else {
			left = middle +1;
		}

	}
	return middle;
}

/**
 * Input:  sorted sequence of numbers length of N and number K
 * Output: number of pairs of numbers A and B where B-A > K
 * 
 * @param nums  sorted sequence of numbers
 * @param K  
 * 
 * Ex: nums:1 3 7 8   K: 4
 * Output:  1-7 1-8 3-8 = 3 pairs  
 */

function FindNumberOfPairsTwoPointers(nums: Array<number>, k: number): number {
	let cnt_pairs = 0;
	let last = 0;
	for (let first =0; first < nums.length; first++) {
		while ((last < nums.length) && (nums[last] - nums[first] <=k)) {
			last+=1;
		}
		cnt_pairs += nums.length - last;
	}

	return cnt_pairs;
}


function FindNumberOfPairsForce(nums: Array<number>, k: number): number {
	let cnt_pairs = 0;

	for (let first =0; first < nums.length; first++) {
		for (let last =+1; last < nums.length; last++) {
			if(nums[last] - nums[first] > k) {
				cnt_pairs++;
			}
		}	
	}

	return cnt_pairs;
}

/**
 * 2733. Neither Minimum nor Maximum
 * Given an integer array nums containing distinct positive integers, 
 * find and return any number from the array that is neither the minimum nor 
 * the maximum value in the array, or -1 if there is no such number.
 *
 * Return the selected integer.
 * 
 * Constraints:
 *    1 <= nums.length <= 100
 *    1 <= nums[i] <= 100
 *    All values in nums are distinct
 */
function FindNonMinOrMax(nums: Array<number>): number {
	if(nums.length < 3) {
		return -1;
	}

	let min = Math.min(nums[0], nums[1]);
	let max = Math.max(nums[0], nums[1]);

	let result = -1;
	
	for(let i=2; i < nums.length; i++) {
		if(nums[i] < min) {
			result = min;
			min = nums[i];
		} else if(nums[i] > max ) {
			result = max;
			max = nums[i];
		} else {
			result = nums[i];
		}
	}

	return result;
};