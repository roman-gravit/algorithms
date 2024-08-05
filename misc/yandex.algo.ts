export { FindNonMinOrMax, FindNumberOfPairsForce, FindNumberOfPairsTwoPointers, LeftBinSearch, GetLuckyNumber, QueryObjectify, AddNewCategories, 
	CategoryData, Category, AddNewCategoriesResult, ChangeVowelInString
};


function ChangeVowelInString(input: string, vowel: string): string {
	const vowels = /[aeuio]/gi;
	const array = input.split("");
	const res = array.reduce((accumulator ,item) => {
		const match = item.match(vowels)?.length || 0;
		if(match) {
			accumulator.push(vowel);
		} else {
			accumulator.push(item);
		}
		return accumulator;
	  }, Array<string>());

	const result = res.join("");
	return result;
}


interface CategoryData {
	title: string;
	level: number;
	parent?: number;
	children?: Array<number>;
}

type Category = {
	[key: number]: CategoryData;
}

type AddNewCategoriesResult = [Category,  Array<number>];


function AddNewCategories(categories: Readonly<Category>, 
						  root: ReadonlyArray<number>, 
						  categories_to_add: Readonly<Category>
						 ): AddNewCategoriesResult
{
	const new_categories = {... categories};
	const new_root = [...root];

	for (const [key, category_data] of Object.entries(categories_to_add)) {

		const key_int = parseInt(key);

		new_categories[key_int] = category_data;

		if(category_data.level === 0) {
			new_root.push(key_int);
		} else {
			new_categories[category_data.parent || 0].children?.push(key_int);
		}
	}

	return [new_categories, new_root];
} 

// user.name.firstname=Bob&user.name.lastname=Smith&user.color=Light%20Blue&experiments.theme=dark
// user.name.firstname=Bob
// user.name.lastname=Smith
// user.color=Light%20Blue
// experiments.theme=dark
function QueryObjectify(str: string): object {
	let res: object = {};

	const parts = str.split("&");

	for(let part of parts) {
		
		const propety_value = part.split("=");  // user.name.firstname |  Bob

		const properties = propety_value[0].split(".");  // user name firstname

		let inner_object = res;
		for(let prop=0; prop<properties.length; prop++) {
			const name = properties[prop];
			let new_property_value = 
				prop!==properties.length -1 ? {} : decodeURIComponent(propety_value[1]);

			if(!inner_object.hasOwnProperty(name)) {
				Object.defineProperty(inner_object, name, {
						value: new_property_value,
						writable: true
				});
				inner_object = new_property_value;

			} else {
				const descriptor = Object.getOwnPropertyDescriptor(inner_object, name);
				inner_object = descriptor?.value;
			}

		}
	}

	return res;
}

function GetLuckyNumber(nums: number): number {
	const nums_string = String(nums);	
	const map = new Map<string, number>();

	for(let s of nums_string) {
		let value = map.get(s);
		if(value===undefined) {
			value = 0;
		}
		map.set(s, ++value);
	}

	let result = 0;
	for (const entry of map.entries()) {
		if(parseInt(entry[0]) === entry[1]) {
			result = Math.max(result, entry[1]);
		}
	}

	return result;
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