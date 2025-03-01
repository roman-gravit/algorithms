/* eslint-disable quotes */
import { FindNonMinOrMax, FindNumberOfPairsForce, FindNumberOfPairsTwoPointers, LeftBinSearch, GetLuckyNumber, 
	QueryObjectify, AddNewCategories, Category, AddNewCategoriesResult, ChangeVowelInString, IsMeetingInsideWorkingDay,
	CreateRange, RangeFunction, SquareEachDigit, getField
} from "./yandex.algo.js";

test('getField', () => {
	expect(getField(1)).toEqual([[null]]);
	expect(getField(2)).toEqual([[null, null], [null, null]]);
	expect(getField(3)).toEqual(
	  [[null, null, null], [null, null, null], [null, null, null]],
	);
});

test("SquareEachDigit", () => {
	expect(SquareEachDigit(31)).toBe(91);
	expect(SquareEachDigit(0)).toBe(0);
	expect(SquareEachDigit(1)).toBe(1);
	expect(SquareEachDigit(22)).toBe(44);
	expect(SquareEachDigit(9119)).toBe(811181);
});

test("CreateRange", () => {
	expect(CreateRange(3, 3)).toEqual([3]);
	expect(CreateRange(3, 8)).toEqual([3, 4, 5, 6, 7, 8]);
	expect(CreateRange(3, 0)).toEqual([]);

	const start3 = CreateRange(3, undefined) as RangeFunction;
	expect(start3(3)).toEqual([3]);
	expect(start3(8)).toEqual([3, 4, 5, 6, 7, 8]);
	expect(start3(0)).toEqual([]);

	const start4 = CreateRange(4, undefined) as RangeFunction;
	expect(start4(6)).toEqual([4, 5, 6]);
});

test("IsMeetingInsideWorkingDay", () => {
	expect(IsMeetingInsideWorkingDay("16:00", 125)).toBe(false);
	expect(IsMeetingInsideWorkingDay("7:00", 15)).toBe(false);
	expect(IsMeetingInsideWorkingDay("07:15", 30)).toBe(false);
	expect(IsMeetingInsideWorkingDay("7:30", 30)).toBe(true);
	expect(IsMeetingInsideWorkingDay("11:30", 60)).toBe(true);
	expect(IsMeetingInsideWorkingDay("17:00", 45)).toBe(true);
	expect(IsMeetingInsideWorkingDay("17:30", 30)).toBe(false);
	expect(IsMeetingInsideWorkingDay("18:00", 15)).toBe(false);
	expect(IsMeetingInsideWorkingDay("16:00", 0)).toBe(true);
	expect(IsMeetingInsideWorkingDay("18:10", 15)).toBe(false);
});

test("ChangeVowelInString", () => {

	let result = ChangeVowelInString("hannah bo fee, fy,. a a!", "i");
	expect(result).toEqual("hinnih bi fii, fy,. i i!");

	result = ChangeVowelInString("adira wants to go to the park", 'o');
	expect(result).toEqual('odoro wonts to go to tho pork');

});

test("AddNewCategories", () => {

	const current: Category = {
		1: { title: "foo", children: [2], level: 0 },
		2: { title: "bar", children: [], level: 1, parent: 1 }
	};

	const root = [1, 2];

	const add: Category = {
		3: { title: "baz", children: [], level: 2, parent: 2 },
		5: { title: "bin2", children: [], level: 1, parent: 1 },
		6: { title: "baz1", children: [], level: 0 },
	};

	const current_copy = {...current};
	const root_copy = [...root];
	const add_copy = {...add};
	const result: AddNewCategoriesResult = AddNewCategories(current, root, add);

	// check for immutable
	expect(current).toEqual(current_copy);
	expect(root).toEqual(root_copy);
	expect(add).toEqual(add_copy);
	expect(result[1]).toEqual([1, 2, 6]);

});


test("increment", () => {

	const data = ["banana", "banana", "grape", "banana", "grape", "orange", "banana"];
	function GetUnique(fruits: string[]): string[] {	
		const map = new Map<string, number>();
		for(const fruit of fruits) {
			map.set(fruit, (map.get(fruit) || 0) + 1);
		}
		
		const array = Array.from(map);
		array.sort(function(item1, item2) {
			return item2[1] - item1[1];
		}); //'[ {"banana": 4}, {"grape": 2}, {"orange": 1} ]

		return [...array.values()].map(item => {
			return item[0];
		});

	}
	expect(GetUnique(data)).toEqual(["banana", "grape", "orange"]);

	const inc = function() {
		let counter = 0;
		return () => {
			return ++counter;
		};
	}();

	expect(inc()).toBe(1);
	expect(inc()).toBe(2);
});

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
		expect(FindNumberOfPairsTwoPointers([1, 2], 3)).toBe(0);
		expect(FindNumberOfPairsTwoPointers([1, 5], 3)).toBe(1);
		expect(FindNumberOfPairsTwoPointers([1, 2, 7], 3)).toBe(2);
		expect(FindNumberOfPairsTwoPointers([1, 3, 7, 8], 4)).toBe(3);
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
		expect(FindNumberOfPairsForce([1, 2], 3)).toBe(0);
		expect(FindNumberOfPairsForce([1, 5], 3)).toBe(1);
		expect(FindNumberOfPairsForce([1, 2, 7], 3)).toBe(2);
		expect(FindNumberOfPairsForce([1, 3, 7, 8], 4)).toBe(3);
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