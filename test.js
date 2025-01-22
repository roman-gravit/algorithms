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