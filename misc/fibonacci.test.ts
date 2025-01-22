import { fib_Recursive, fib_While } from "./fibonacci";

describe("Fibonacci", () => {

	const cases: number[][] = 
	[ 
		[0, 0], [1, 1], [2, 1], [3, 2], [4, 3],
		[5, 5], [6, 8], [7, 13], [8, 21], [9, 34],
		[10, 55], [11, 89], [12, 144], [13, 233], [14, 377],
		[15, 610] 
	];

	test("test fib_Recursive",  () => {
		for(let i = 0; i < cases.length; i++) {
			const caseToTest: number[] = cases[i];
			const input = caseToTest[0];
			const output = caseToTest[1];
			expect(fib_Recursive(input)).toBe(output);
		}
	});

	test("test fib_While",  () => {
		for(let i = 0; i < cases.length; i++) {
			const caseToTest: number[] = cases[i];
			const input = caseToTest[0];
			const output = caseToTest[1];
			expect(fib_While(input)).toBe(output);
		}
	});
});
