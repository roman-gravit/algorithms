import { BreadthFirstSearch, Vertex} from "./bfs-search";

type User = {
	first: string;
	age: number;
}	

const users: User[] = [
	{ first: "1" , age: 50 },
	{ first: "2" , age: 51 },
	{ first: "3" , age: 10 },
	{ first: "4" , age: 50 }
]

function filterByProperty<Type, Key extends keyof Type>(array: Type[], 
														property: Key, 
														value: Type[Key]
													    ): Type[] 
{
	return  array.filter(user => user[property] === value) 
} 

console.log(filterByProperty(users, "age", 50));


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