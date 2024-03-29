import { SortArrayBubble, SortArrayModifiedBubble } from "./bubble-sort";


const sort_data = [
    [ [64, 34, 25, 12, 22, 11, 90, 100, 5],   [5, 11, 12, 22, 25, 34, 64, 90, 100] ],
    [ [11, 2, 3, 1, 213, 101],   [1, 2, 3, 11, 101, 213] ],
    [ [1, 41, 3, 101],   [1, 3, 41, 101] ],
    [ [109, 41, 3, 101, 2, 5, 9, 1, 54, 98],   [1, 2, 3, 5, 9, 41, 54, 98, 101, 109] ],
    [ [109, 41, 3, 200, 101, 2, 5, 9, 1, 54, 98, 4, 42, 10, 6, 8, 53],   [1, 2, 3, 4, 5, 6, 8, 9, 10, 41, 42, 53, 54, 98, 101, 109, 200] ]
];


test("SortArrayBubble", async () => {
	for(const data of sort_data) {
		const result = SortArrayBubble([...data[0]]);
		expect(result).toEqual(data[1]);
	}
});

test("SortArrayModifiedBubble", async () => {
	for(const data of sort_data) {
		const result = SortArrayModifiedBubble([...data[0]]);
		expect(result).toEqual(data[1]);
	}
});
