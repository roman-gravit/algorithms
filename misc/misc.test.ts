import { FindNonRepeatingNumberInArrayBitwise, CountSetBitsBitwise, FindComplementBitwise, IsNumberPowerOfTwo,
    IsNumberPowerOfTwoBitwise, SwapNumbersXOR, RangeBitwiseAND } from "./bitwise.js";


test("FindNonRepeatingNumberInArrayBitwise",  () => {
	const test_data: Array<[Array<number>, number]> = [
		[ [2, 2, 3, 3, 5], 5],
		[ [1, 2, 1, 2, 3], 3,]	
	];

	for(const data of test_data) {
		const result = FindNonRepeatingNumberInArrayBitwise(data[0]);
		expect(result).toEqual(data[1]);
	}
});

test("CountSetBitsBitwise",  () => {
	const test_data: Array<[number, number]> = [
		[ 5, 2], [7, 3], [2147483645, 30]
	];

	for(const data of test_data) {
		const result = CountSetBitsBitwise(data[0]);
		expect(result).toEqual(data[1]);
	}
});

test("FindComplementBitwise",  () => {
	const test_data: Array<[number, number]> = [
		[ 5, 2], [1, 0], [8, 7]
	];

	for(const data of test_data) {
		const result = FindComplementBitwise(data[0]);
		expect(result).toEqual(data[1]);
	}
});

test("IsNumberPowerOfTwo",  () => {
	const test_data: Array<[number, boolean]> = [
		[ 1, true], [16, true], [18, false]
	];

	for(const data of test_data) {
		const result = IsNumberPowerOfTwo(data[0]);
		expect(result).toEqual(data[1]);
	}
});

test("IsNumberPowerOfTwoBitwise",  () => {
	const test_data: Array<[number, boolean]> = [
		[ 1, true], [16, true], [18, false]
	];

	for(const data of test_data) {
		const result = IsNumberPowerOfTwoBitwise(data[0]);
		expect(result).toEqual(data[1]);
	}
});

test("SwapNumbersXOR",  () => {
	const test_data: Array<[Array<number>, Array<number>]> = [
		[ [3, 5],  [5, 3]], [[13, 15],  [15, 13]], [ [33, 35],  [35, 33]],
	];

	for(const data of test_data) {
		const result = SwapNumbersXOR(data[0][0], data[0][1]);
		expect(result).toEqual(data[1]);
	}
});

test("RangeBitwiseAND",  () => {
	const test_data: Array<[Array<number>, number]> = [
		[ [5, 7], 4], [ [0, 1], 0], [ [10, 15], 8]
	];

	for(const data of test_data) {
		const result = RangeBitwiseAND(data[0][0], data[0][1]);
		expect(result).toEqual(data[1]);
	}
});