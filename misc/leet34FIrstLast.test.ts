import { searchRange } from "./leet34FIrstLast";

describe("searchRange", () => {

	test("test empty",  () => {
		expect(searchRange([], 0)).toEqual([-1, -1]);
	});

	test("test many elements include",  () => {
		expect(searchRange([1, 2, 3], 1)).toEqual([0, 0]);
	});

	test("test one element include",  () => {
		expect(searchRange([1], 1)).toEqual([0, 0]);
	});
	test("test one element not include",  () => {
		expect(searchRange([1], 2)).toEqual([-1, -1]);
	});

	test("test two elements include",  () => {
		expect(searchRange([1, 1], 1)).toEqual([0, 1]);
	});
	test("test two elements not include",  () => {
		expect(searchRange([1, 1], 2)).toEqual([-1, -1]);
	});

	test("test three elements include1",  () => {
		expect(searchRange([1, 1, 2], 1)).toEqual([0, 1]);
	});
	test("test three elements include2",  () => {
		expect(searchRange([1, 1, 1], 1)).toEqual([0, 2]);
	});
	test("test three elements include3",  () => {
		expect(searchRange([0, 1, 1], 1)).toEqual([1, 2]);
	});

	test("test many elements include",  () => {
		expect(searchRange([0, 1, 3, 3, 4, 5, 6], 3)).toEqual([2, 3]);
	});

	test("test many elements not include",  () => {
		expect(searchRange([0, 1, 3, 3, 4, 5, 6], 7)).toEqual([-1, -1]);
	});

});
