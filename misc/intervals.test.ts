import { intersection } from "./intervals";

describe("intersection", () => {
	test("intersection",  () => {
		expect(intersection([], [])).toEqual([]);

		expect(intersection([[9, 15], [18, 21]], 
			[[10, 14], [21, 22]])).toEqual(
				[[10, 14]]);

		expect(intersection([[8, 12]], [[5, 11]])).toEqual([[8, 11]]);
		
		expect(intersection([[8, 12], [17, 22]], 
							[[5, 11], [14, 18], [20, 23]])).toEqual(
								[[8, 11], [17, 18], [20, 22]]);
	});
});
