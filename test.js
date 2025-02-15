/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-return */

const map = {"{": "}", "(": ")", "[": "]"};
const reg = /[{}()[\]]/g;
function validateBrackets(brackets) {
	if(!brackets) {
		return true;
	}
	const test = [];
	for(const bracket of brackets) {
		if(!bracket.match(reg)) {
			console.log("false", bracket);
			continue;
		}
		if(map[bracket]) {
			test.push(map[bracket]);
		} else {
			if(bracket!==test.pop()) {
				return false;
			}
		}
	}
	return test.length === 0;
}

//console.log(validateBrackets("{}") === true);  // 
//console.log(validateBrackets("}") === false); // 
//console.log(validateBrackets("{[}]") === false);
//console.log(validateBrackets("[{[]}()]") === true);
console.log(validateBrackets("(]{qw}e)"));

if (false) {
const test1 ="ABCDEFG";

function testStr(str) {
	const hash = {};
	for(const char of str) {
		hash[char] = 1;
	}
	
	for(const char of test1) {
		if(!hash[char]) {
			return false;
		}
	}
	return true;
}

console.log(testStr("ABCDEFG"));
console.log(testStr("ABCDEG"));

}

function callLimit(fn, limit, callback) {
	let count = limit;
	const inner = function(...args) {
		if(count--){
			if(!count && callback){
				setTimeout(() => {
					callback();
				}, 0);
			}
			return fn(...args);
		} 
	};
	inner.reset = () => {
		count = limit;
	};
	return inner;
}

function log(title, message) {
	console.log(title + ":" + message);
}

const loglimit = callLimit(log, 3);
loglimit("title1", "desc");
loglimit("title2", "desc");
loglimit("title3", "desc");
loglimit("title4", "desc");  //skip

loglimit.reset();
loglimit("title5", "desc");
loglimit("title6", "desc");
loglimit("title7", "desc");
loglimit("title8", "desc");

if(false) {

	function quickSort(arr) {
		if(arr.length <= 1) {
			console.log("BASE case:", arr);
			return arr;
		}
	
		const middle = Math.floor((arr.length / 2));
		const pivot = arr[middle];
	
		const left = [];
		const right = [];
	
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] < pivot) {
				left.push(arr[i]);
			}
			if(arr[i] > pivot) {
				right.push(arr[i]);
			}
		}
	
		return [...quickSort(left), pivot, ...quickSort(right)];
	}
	
	console.log(quickSort([1, 5, 2, 3, 7, 0, 4, 6]));

	function mergeSort(arr) {
	if(arr.length === 1) {
		console.log("BASE case split:", arr);
		return arr;
	}

	console.log("recursive split:", arr);
	const middle = Math.floor((arr.length / 2));
	const left  = mergeSort(arr.slice(0, middle));
	const right  = mergeSort(arr.slice(middle));


	const res =  merge(left, right);
	//console.log(res);
	return res;

	function merge(left, right) {
		console.log("merge->", left, right);
		let result = [];
		let leftIndex = 0;
		let rightIndex = 0;
		while(leftIndex < left.length && rightIndex < right.length) {
			if(left[leftIndex] <= right[rightIndex]) {
				result.push(left[leftIndex++]);
			} else {
				result.push(right[rightIndex++]);
			}
		}
		result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
		console.log("merge <-", result);
		return result;
	}

}

mergeSort([1, 5, 2, 3, 7, 0, 4, 6]);
}

if(false) {
	function sum(a, b, c) {
		return a + b + c; 
	}

	function min(a, b) {
		return a - b;
	}

	function curry(fn) {
		const elem = [];
		const f = function(...args) {
			elem.push(...args);
			if(elem.length >= fn.length) {
				return fn(...elem);
			}
			return f;
		}
		return f;
	}

	console.log(curry(sum)(1, 2, 3)); //6
	console.log(curry(sum)(1, 2)(3)); //6
	console.log(curry(sum)(1)(2)(3)); //6
	console.log(curry(min)(5)(3)); //2
	console.log(curry(min)(5, 3)); //2
}

if(false) {
	class Stack {
		constructor() { this.storage = []; }
		push(data) { this.storage.push(data); }
		pop() { return this.storage.pop(); }
		size() { return this.storage.length; }
	}

	class Queue {
		constructor() {
			this.stack1 = new Stack();
			this.stack2 = new Stack();
		}

		enqueue(data) {
			this.stack1.push(data);
		}

		dequeue() {
			while(this.stack1.size() > 0) {
				this.stack2.push(this.stack1.pop());
			}
			const result = this.stack2.pop();
			while(this.stack2.size() > 0) {
				this.stack1.push(this.stack2.pop());
			}
			return result;
		}

		count() {
			return this.stack1.size();
		}
	}

	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	console.log(queue.count()); //3
	console.log(queue.dequeue()); //1
	queue.enqueue(4);
	queue.enqueue(5);

	console.log(queue.dequeue()); //2
	console.log(queue.dequeue()); //3
	console.log(queue.count()); //2
}