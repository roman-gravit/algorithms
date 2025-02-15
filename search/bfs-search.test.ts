import { BreadthFirstSearch } from "./bfs-search.js";
describe("BreadthFirstSearch",  () => {

	test("functionExists", () => {
		expect(typeof BreadthFirstSearch).not.toBe(undefined);
	});

	test("singleVertex", () => {
		expect(BreadthFirstSearch(
			{ value: "root"}, "root")).toEqual("root");
	});


	test("searchInlevel1", () => {
		expect(BreadthFirstSearch(
			{ 
				value: "root",
				children: [ { value: "a" }, { value: "b" } ]
			}, "a")).toEqual("a");

		expect(BreadthFirstSearch(
			{ 
				value: "root",
				children: [ { value: "a" }, { value: "b" } ]
			}, "b")).toEqual("b");
	});
	
	test("searchInlevel2", () => {
		expect(BreadthFirstSearch(
			{ 
				value: "root",
				children: [ { 
					value: "a", 
					children: [
						{ value: "c" }, { value: "d" }
					]
				}, { value: "b" } ]
			}, "c")).toEqual("c");

		expect(BreadthFirstSearch(
			{ 
				value: "root",
				children: [ { 
					value: "a", 
					children: [
						{ value: "c" }, { value: "d" }
					]
				}, { value: "b" } ]
			}, "d")).toEqual("d");

		expect(BreadthFirstSearch(
			{ 
				value: "root",
				children: [ { 
					value: "a", 
					children: [
						{ value: "c" }, { value: "d" }
					]
				}, { value: "b",
					children: [
						{ value: "e" }, { value: "f" }
					]
				 } ]
			}, "e")).toEqual("e");

	});
	
});