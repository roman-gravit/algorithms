describe("test",  () => {
	test("test", () => {
		const str = "One two three";

		function reverseWords(str: string): string {
			const words = str.split(" ");
			return words.reduce((accum: string[], current: string) => {
				current = current.split("").reverse().join("");
				accum.push(current);
				return accum;
			}, []).join(" ");
		}

		console.log(reverseWords(str));

		type Person = {
			name: string;
			age: number;
		};
		
		function printPerson(person: Person): void {
			for (const key in person) {
				console.log(`${key}: ${person[key as keyof Person]}`);
			}
		}
		
		printPerson({name: "Mike", age: 40});
	});
	
	// object  : USE!  Can be any non-primitive type.
	// Object  : Don't use `Object` as a type. The `Object` type actually means "any non-nullish value"
	// {}      : Don't use `{}` as a type. `{}` actually means "any non-nullish value".
	// Object and {} : any value except null | undefined
	let obj: object;
	obj = [];
	console.log(obj);

	type Person = {
		name: string;
		surName: string;
		age: number;
		profession?: string;
	};

	

	type MyPick<Type, Key extends keyof Type> = {
		[Property in Key]: Type[Key]; 
	}

	type pp = MyPick<Person, "name">

});