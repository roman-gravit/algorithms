/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-return */


const garbage_pattern = 170;
const garbage_length = 3;
function write() {
	const result = [];
	let pattern = garbage_pattern;
	for(let index = 0; index < garbage_length; index++) {
		let garbage_byte = GenerateRandomUInt(256);
		if((garbage_byte ^ pattern) === 0) {
			garbage_byte = GenerateRandomUInt(256);
			if((garbage_byte ^ pattern) === 0) {
				garbage_byte++;
			}
		}
		result.push(garbage_byte);
		pattern = pattern ^ garbage_byte;
	}
	result.push(pattern);
	return result;
}

function read(input) {
	const result = [];
	const max_garbage_bytes = 1024 * 1024;
	let pattern = garbage_pattern;
	let garbage_bytes_read = 0;
	for(; garbage_bytes_read < max_garbage_bytes; garbage_bytes_read++) {
		const garbage_byte = input[garbage_bytes_read];
		if((garbage_byte ^ pattern) === 0) {
			break;
		}
		pattern = (pattern ^ garbage_byte);
	}

	return input.slice(++garbage_bytes_read);
}

const encr = write();
console.log("WRITE Pattern , result", garbage_pattern, encr);

// add data
encr.push(1, 2, 3, 4, 5);
const decr = read(encr);
console.log("READ Pattern , result", garbage_pattern, decr);

function GenerateRandomUInt(range_max) {
    return Math.floor(Math.random() * Math.floor(range_max));
}


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