import { SearchArrayLinear } from "./linear-search";
import { SearchArrayBinaryIterative, SearchArrayBinaryRecursive } from "./binary-search";
import { InterpolationSearch } from "./interpolation-search";

const search_data: Array<[Array<number>, number, number]> = [
	[ [1, 2, 3, 4], 1, 0],
	[ [1, 2, 3, 4], 4, 3],
	[ [], 25, -1],
	[ [2], 2, 0],
	[ [1, 2, 3, 4], 2, 1],
	[ [1, 2, 3, 4, 5, 6, 7, 8], 1,  0],
	[ [1, 2, 3, 4, 5], 5,  4],
	[ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 2,  1],
]

test("InterpolationSearch",  () => {
	for(const data of search_data) {
		const result = InterpolationSearch(data[0], data[1]);
		expect(result).toEqual(data[2]);
	}
});

test("SearchArrayBinaryRecursive",  () => {
	for(const data of search_data) {
		const result = SearchArrayBinaryRecursive(data[0], data[1]);
		expect(result).toEqual(data[2]);
	}
});

test("SearchArrayBinaryIterative",  () => {
	for(const data of search_data) {
		const result = SearchArrayBinaryIterative(data[0], data[1]);
		expect(result).toEqual(data[2]);
	}
});

test("SearchArrayLinear",  () => {
	for(const data of search_data) {
		const result = SearchArrayLinear(data[0], data[1]);
		expect(result).toEqual(data[2]);
	}
});
