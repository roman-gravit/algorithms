export { FindNonMinOrMax, FindNumberOfPairsForce, FindNumberOfPairsTwoPointers, LeftBinSearch, GetLuckyNumber, QueryObjectify, AddNewCategories, 
	CategoryData, Category, AddNewCategoriesResult, ChangeVowelInString, IsMeetingInsideWorkingDay, CreateRange, RangeFunction,
	SquareEachDigit
};


function SquareEachDigit(num: number): number {

	{

		interface BuildableRequest {
			data?: object
			method: 'get' | 'post'
			url: string
		}

		class RequestBuilder2 {
			data?: object
			method?: 'get' | 'post'
			url?: string
		  
			setData(value: object): this & Pick<BuildableRequest, 'data'> {
			  return Object.assign(this, { data: value })
			}
		  
			setMethod(value: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
			  return Object.assign(this, { method: value })
			}
		  
			setURL(value: string): this & Pick<BuildableRequest, 'url'> {
			  return Object.assign(this, { url: value })
			}
		  
			build(this: BuildableRequest) {
			  return this
			}
		}

		const obj1 = new RequestBuilder2()
		    .setData({})
		    .setMethod('post') 
		    .setURL('bar') 
		    .build()  

		const obj2 = new RequestBuilder2()
		    .setURL('foo') 
			.setData({})
		    .setMethod('get')
		    .build()

	}


	// pattern Factory
	{

		interface Shoe {
			purpose: string;
		}

		class BalletFlat implements Shoe {
			purpose = "dancing";
		}

		class Boot implements Shoe {
			purpose = "woodcutting";
		}

		class Sneaker implements Shoe {
			purpose = "walking";
		}

		type ShoeCreator = {
			create(type: "balletFlat"): BalletFlat
			create(type: "boot"): Boot
			create(type: "sneaker"): Sneaker
		  }

		let ShoeFactory: ShoeCreator = {
			create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
				switch (type) {
					case "balletFlat": return new BalletFlat();
					case "boot": return new Boot();
					case "sneaker": return new Sneaker();
				}
			}
		}

		let shoe = ShoeFactory.create("balletFlat");
		let check = shoe instanceof BalletFlat;
		console.log(check);

		shoe = ShoeFactory.create("boot");
		check = shoe instanceof Boot;
		console.log(check);
		check = shoe instanceof BalletFlat;
		console.log(check);

		shoe = ShoeFactory.create("sneaker");
		check = shoe instanceof Sneaker;
		console.log(check);

	}	

	{
		type Reserve = { 
			(from: Date, to: Date, destination: string): void 
			(from: Date, destination: string): void
			(destination: string): void
		};


		let reserve: Reserve = (from: Date | string, to?: Date | string, destination?: string) => {
			console.log(`Vacation from: ${from} to: ${to} country: ${destination}`);
		}

		reserve(new Date(), new Date(), "Spain");
		reserve(new Date(), "Italy");
		reserve("US");
	}

	{

		function Is<T>(a: T, ...args: [T, ...T[]]): boolean {
			console.log(`1: ${args}`);
			return args[0] === args[1];
		}

		let result = Is("str", "str1");
		result = Is(true, false);
		result = Is(42, 42);
		//result = Is(42, true);
		result = Is(42, 42, 58);
	}

	// types tests
	{
		// unknown: ANY
		type UnkAny = unknown extends any ? true : false;       // TRUE
		type UnkStr = unknown extends string ? true : false;    // false
		type UnkVoid = unknown extends void ? true : false;     // false
		type UnkUnd = unknown extends undefined ? true : false; // false
		type UnkNull = unknown extends null ? true : false;     // false
		type UnkNever = unknown extends never ? true : false;   // false

		// Any: UNKNOWN
		type AnyUnky = any extends unknown ? true : false;      // TRUE
		type AnyStr = any extends string ? true : false;        // false
		type AnyVoid = any extends void ? true : false;         // false
		type AnyUnd = any extends undefined ? true : false;     // false
		type AnyNull = any extends null ? true : false;         // false
		type AnyNever = any extends never ? true : false;       // false

		// null   UNKNOWN  ANY
		type NullUnk = null extends unknown ? true : false;    // TRUE
		type NullAny = null extends any ? true : false;        // TRUE
		type NullStr = null extends string ? true : false;     // false
		type NullUnd = null extends undefined ? true : false;  // false
		type NullVoidNull = null extends void ? true : false;  // false
		type NullNever = null extends never ? true : false;    // false

		// Void:   UNKNOWN  ANY
		type VoidAny = void extends any ? true : false;         // TRUE
		type VoidStr = void extends string ? true : false;      // false
		type VoidUnk = void extends unknown ? true : false;     // TRUE
		type VoidUnd = void extends undefined ? true : false;   // false
		type VoidNull = void extends null ? true : false;       // false
		type VoidNever = void extends never ? true : false;     // false

		// undefined   UNKNOWN  ANY  VOID
		type UndUnk = undefined extends unknown ? true : false;  // TRUE
		type UnddAny = undefined extends any ? true : false;     // TRUE
		type UndVoidUnd = undefined extends void ? true : false; // TRUE
		type UndStr = undefined extends string ? true : false;   // false
		type UndNull = undefined extends null ? true : false;    // false
		type UndNever = undefined extends never ? true : false;  // false

		// string   UNKNOWN  ANY  
		type StrUnk = string extends unknown ? true : false;     // TRUE
		type StrAny = string extends any ? true : false;         // TRUE
		type StrVoid = string extends void ? true : false;       // false
		type StrObj = string extends object ? true : false;      // false
		type StrNull = string extends null ? true : false;       // false
		type StrNever = string extends never ? true : false;     // false

		// never   UNKNOWN  ANY  
		type nevUnk = never extends unknown ? true : false;     // TRUE
		type nevAny = never extends any ? true : false;         // TRUE
		type nevVoid = never extends void ? true : false;       // TRUE
		type nevund = never extends undefined ? true : false;   // TRUE
		type nevNull = never extends null ? true : false;       // TRUE
		type nevObj = never extends object ? true : false;      // TRUE
		type nevStr = never extends string ? true : false;      // TRUE
	}

	// union intersection
	{
		let str1: string = 'foo'
		let any1: any = str1; 
		console.log(any1);
	
		let unk1: unknown = str1; 
		console.log(unk1);
	
		let any2: any;
		let unk2: unknown; 
		let stringA: string = any2;
		//let stringB: string = unk2;
	
		if(void 2 === undefined) {
			console.log("true");
		}
	
		type Dog = {
			name: string;
			barks: boolean;
		}
	
		type Cat = {
			name: string;
			purrs: boolean;
		}
	
	
		// Union
		// Dog | Cat | Dog+Cat
		type DogOrCat = Dog | Cat;
		let b1: DogOrCat = { name: "DogAndCat", purrs: true, barks: true };
		console.log(b1);
	
		let b2: DogOrCat = { name: "DogAndCat", purrs: true };
		console.log(b2);
	
		let b3: DogOrCat = { name: "DogAndCat", barks: true };
		console.log(b3);
	
		let h = null;
		
		// Intersection
		// Only Dog+Cat
		type DogAndCat = Dog & Cat;
		let a1: DogAndCat = { name: "DogAndCat", purrs: true, barks: true };
		console.log(a1);
	}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	const str = num.toString().split("");

	return parseInt(str.map(elem => parseInt(elem)**2).join(""));
}

// Функция получает в первом аргументе число, представляющее первое числовое значение в диапазоне. 
// Второй аргумент также является числом, представляющим вторую границу диапазона (включительно). 
// Если второй аргумент опущен, должна возвращаться другая функция, которая рассчитывает получить этот аргумент.
type RangeFunction = (end: number) =>  Array<number>;

function CreateRange(start: number, end: number | undefined): Array<number> | RangeFunction {
	if(end !== undefined) {
		return _CreateRangeArray(start, end);
	} 
	
	return function GetRangeEnd(second: number) {
		return _CreateRangeArray(start, second);
	}
}

function _CreateRangeArray(start: number, end: number):  Array<number> {
	const range =  Array<number>();
	for(let i = start; i <= end; i++) {
		range.push(i);
	}
	return range;
}

function IsMeetingInsideWorkingDay(startTime: string, durationMinutes: number): boolean {
	// parse start time 
	// check if it starts earlier than dayStart
	// check if it starts after dayEnd
	// add duration to the startTime 
	// check if it ends after dayEnd

	const dayStart = "07:30";
	const dayEnd = "17:45";

	const [ , meetingStartHour, meetingStartMinutes ] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];

	const durationHours = Math.floor(durationMinutes / 60);
	durationMinutes = durationMinutes - (durationHours * 60);

	let meetingEndHour = parseInt(meetingStartHour) + durationHours;
	let meetingEndMinutes = parseInt(meetingStartMinutes) + durationMinutes;

	if (meetingEndMinutes >= 60) {
		meetingEndHour = meetingEndHour + 1;
		meetingEndMinutes = meetingEndMinutes - 60;
	}

	const meetingStart = `${ meetingStartHour.padStart(2,"0") }:${meetingStartMinutes.padStart(2,"0")}`;

	const meetingEnd = `${String(meetingEndHour).padStart(2,"0")}:${String(meetingEndMinutes).padStart(2,"0")}`;

	const isStartsAfter = meetingStart >= dayStart;
	const isEndsBefore = meetingEnd <= dayEnd;

	return isStartsAfter && isEndsBefore;
}

function ChangeVowelInString(input: string, vowel: string): string {
	const vowels = /[aeuio]/gi;
	const array = input.split("");
	const res = array.reduce((accumulator ,item) => {
		const match = item.match(vowels)?.length || 0;
		if(match) {
			accumulator.push(vowel);
		} else {
			accumulator.push(item);
		}
		return accumulator;
	  }, Array<string>());

	const result = res.join("");
	return result;
}


interface CategoryData {
	title: string;
	level: number;
	parent?: number;
	children?: Array<number>;
}

type Category = {
	[key: number]: CategoryData;
}

type AddNewCategoriesResult = [Category,  Array<number>];


function AddNewCategories(categories: Readonly<Category>, 
						  root: ReadonlyArray<number>, 
						  categories_to_add: Readonly<Category>
						 ): AddNewCategoriesResult
{
	const new_categories = {... categories};
	const new_root = [...root];

	for (const [key, category_data] of Object.entries(categories_to_add)) {

		const key_int = parseInt(key);

		new_categories[key_int] = category_data;

		if(category_data.level === 0) {
			new_root.push(key_int);
		} else {
			new_categories[category_data.parent || 0].children?.push(key_int);
		}
	}

	return [new_categories, new_root];
} 

// user.name.firstname=Bob&user.name.lastname=Smith&user.color=Light%20Blue&experiments.theme=dark
// user.name.firstname=Bob
// user.name.lastname=Smith
// user.color=Light%20Blue
// experiments.theme=dark
function QueryObjectify(str: string): object {
	let res: object = {};

	const parts = str.split("&");

	for(let part of parts) {
		
		const propety_value = part.split("=");  // user.name.firstname |  Bob

		const properties = propety_value[0].split(".");  // user name firstname

		let inner_object = res;
		for(let prop=0; prop<properties.length; prop++) {
			const name = properties[prop];
			let new_property_value = 
				prop!==properties.length -1 ? {} : decodeURIComponent(propety_value[1]);

			if(!inner_object.hasOwnProperty(name)) {
				Object.defineProperty(inner_object, name, {
						value: new_property_value,
						writable: true
				});
				inner_object = new_property_value;

			} else {
				const descriptor = Object.getOwnPropertyDescriptor(inner_object, name);
				inner_object = descriptor?.value;
			}

		}
	}

	return res;
}

function GetLuckyNumber(nums: number): number {
	const nums_string = String(nums);	
	const map = new Map<string, number>();

	for(let s of nums_string) {
		let value = map.get(s);
		if(value===undefined) {
			value = 0;
		}
		map.set(s, ++value);
	}

	let result = 0;
	for (const entry of map.entries()) {
		if(parseInt(entry[0]) === entry[1]) {
			result = Math.max(result, entry[1]);
		}
	}

	return result;
}

/**
 * left pointer, right pointer
 * @param nums 
 * @param searched_value
 * 
 * Return index of searched element
 */
function LeftBinSearch(nums: Array<number>, searched_value: number): number {
	if(nums.length===0) {
		return -1;
	}

	if(nums.length===1) {
		return 0;
	}

	let left = 0;
	let right = nums.length - 1;
	let middle = -1; 
	while (left < right) {
		middle = Math.floor((left + right)/2);
		if(nums[middle] === searched_value) {
			return middle;
		}

		if(nums[middle] > searched_value) {
			right = middle;
		} else {
			left = middle +1;
		}

	}
	return middle;
}

/**
 * Input:  sorted sequence of numbers length of N and number K
 * Output: number of pairs of numbers A and B where B-A > K
 * 
 * @param nums  sorted sequence of numbers
 * @param K  
 * 
 * Ex: nums:1 3 7 8   K: 4
 * Output:  1-7 1-8 3-8 = 3 pairs  
 */

function FindNumberOfPairsTwoPointers(nums: Array<number>, k: number): number {
	let cnt_pairs = 0;
	let last = 0;
	for (let first =0; first < nums.length; first++) {
		while ((last < nums.length) && (nums[last] - nums[first] <=k)) {
			last+=1;
		}
		cnt_pairs += nums.length - last;
	}

	return cnt_pairs;
}


function FindNumberOfPairsForce(nums: Array<number>, k: number): number {
	let cnt_pairs = 0;

	for (let first =0; first < nums.length; first++) {
		for (let last =+1; last < nums.length; last++) {
			if(nums[last] - nums[first] > k) {
				cnt_pairs++;
			}
		}	
	}

	return cnt_pairs;
}

/**
 * 2733. Neither Minimum nor Maximum
 * Given an integer array nums containing distinct positive integers, 
 * find and return any number from the array that is neither the minimum nor 
 * the maximum value in the array, or -1 if there is no such number.
 *
 * Return the selected integer.
 * 
 * Constraints:
 *    1 <= nums.length <= 100
 *    1 <= nums[i] <= 100
 *    All values in nums are distinct
 */
function FindNonMinOrMax(nums: Array<number>): number {
	if(nums.length < 3) {
		return -1;
	}

	let min = Math.min(nums[0], nums[1]);
	let max = Math.max(nums[0], nums[1]);

	let result = -1;
	
	for(let i=2; i < nums.length; i++) {
		if(nums[i] < min) {
			result = min;
			min = nums[i];
		} else if(nums[i] > max ) {
			result = max;
			max = nums[i];
		} else {
			result = nums[i];
		}
	}

	return result;
};