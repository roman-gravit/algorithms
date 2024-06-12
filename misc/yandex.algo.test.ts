import { FindNonMinOrMax, FindNumberOfPairsForce, FindNumberOfPairsTwoPointers, LeftBinSearch, GetLuckyNumber, 
	QueryObjectify
} from "./yandex.algo";

test("QueryObjectify", () => {
	// user.name.firstname=Bob&user.name.lastname=Smith&user.color=Light%20Blue&experiments.theme=dark
	const result = QueryObjectify("user.name.firstname=Bob&user.name.lastname=Smith&user.color=Light%20Blue&experiments.theme=dark");
	expect(result).toMatchObject({
		"user": {
			"name": {
				"firstname": "Bob",
				"lastname": "Smith"
			},
			"color": "Light Blue"
		},
		"experiments": {
			"theme": "dark"
		}
	});
});


test("GetLuckyNumber", () => {
	expect(GetLuckyNumber(112333455555)).toBe(5);
	expect(GetLuckyNumber(123345)).toBe(1);
	expect(GetLuckyNumber(55555)).toBe(5);
	expect(GetLuckyNumber(5555)).toBe(0);
});

test("LeftBinSearch", () => {
	expect(LeftBinSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(7);
});


describe("FindNumberOfPairsTwoPointers",  () => {

	test("empty array input", () => {
		expect(FindNumberOfPairsTwoPointers([], 1)).toBe(0);
	});
	test("single element in array", () => {
		expect(FindNumberOfPairsTwoPointers([1], 1)).toBe(0);
	});

	test("two elements in array", () => {
		expect(FindNumberOfPairsTwoPointers([1,2], 3)).toBe(0);
		expect(FindNumberOfPairsTwoPointers([1,5], 3)).toBe(1);
		expect(FindNumberOfPairsTwoPointers([1,2,7], 3)).toBe(2);
		expect(FindNumberOfPairsTwoPointers([1,3,7,8], 4)).toBe(3);
	});

});

describe("FindNumberOfPairsForce",  () => {

	test("empty array input", () => {
		expect(FindNumberOfPairsForce([], 1)).toBe(0);
	});
	test("single element in array", () => {
		expect(FindNumberOfPairsForce([1], 1)).toBe(0);
	});

	test("two elements in array", () => {
		expect(FindNumberOfPairsForce([1,2], 3)).toBe(0);
		expect(FindNumberOfPairsForce([1,5], 3)).toBe(1);
		expect(FindNumberOfPairsForce([1,2,7], 3)).toBe(2);
		expect(FindNumberOfPairsForce([1,3,7,8], 4)).toBe(3);
	});

});


describe("FindNonMinOrMax",  () => {

	test("empty array input", () => {
		expect(FindNonMinOrMax([])).toBe(-1);
	});

	test("single element in array", () => {
		expect(FindNonMinOrMax([1])).toBe(-1);
	});

	test("two elements in array", () => {
		expect(FindNonMinOrMax([1, 2])).toBe(-1);
	});

	test("three and more elements in array #1", () => {
		expect(FindNonMinOrMax([1, 2, 3])).toBe(2);
		expect(FindNonMinOrMax([1, 3, 2])).toBe(2);
		expect(FindNonMinOrMax([2, 1, 3])).toBe(2);
		expect(FindNonMinOrMax([2, 3, 1])).toBe(2);
		expect(FindNonMinOrMax([3, 2, 1])).toBe(2);
		expect(FindNonMinOrMax([3, 1, 2])).toBe(2);
	});

	test("three and more elements in array #2", () => {
		expect(FindNonMinOrMax([3, 1, 2, 4])).toBeLessThanOrEqual(3);
		expect(FindNonMinOrMax([3, 1, 2, 4])).toBeGreaterThanOrEqual(2);
		expect(FindNonMinOrMax([4, 1, 2, 3])).toBeLessThanOrEqual(3);

	});
});