export { searchRange };

function searchRange(nums: number[], target: number): number[] {
	const result: [number, number] = [-1, -1];

	let leftIndex = 0;
	let rightIndex = nums.length - 1;
	while(leftIndex <= rightIndex && resultNotReady(result)) {
		if(valueNotSet(result[0])) {
			nums[leftIndex] === target
				 ? result[0] = leftIndex
				 : leftIndex++;
		}

		if(valueNotSet(result[1])) {
			nums[rightIndex] === target
				? result[1] = rightIndex
				: rightIndex--;
		}

	}

	return result;
}

function valueNotSet(value): boolean {
	return value === -1;
}
function resultNotReady(arr: [number, number]): boolean {
	return arr[0] === -1 || arr[1] === -1;
}