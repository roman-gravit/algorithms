export { Node };

class Node {
	value: number;
	next: Node | null;
	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	private first: Node | null;
	private last: Node | null;
	private size: number;
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	getSize(): number {
		return this.size;
	}
	enqueue(value: number): number {
		const node = new Node(value);
		if(!this.first) {
			this.first = node;
			this.last = node;
		}
		this.last.next = node; 
		this.last = node;
		return ++this.size;
	}

	dequeue(): null | number {
		if(!this.first) {
			return null;
		}

		const value = this.first.value;
		if(this.first === this.last) {
			this.first = this.last = null;
		} else {
			this.first = this.first.next;
		}

		this.size--;
		return value;
	}
}

function test() {
	const queue = new Queue();
	console.log("size:", queue.getSize());
	queue.enqueue(new Node(1).value);
	console.log("size:", queue.getSize());
	queue.enqueue(new Node(2).value);
	console.log("size:", queue.getSize());
	queue.enqueue(new Node(3).value);
	console.log("size:", queue.getSize());
	console.log(queue.dequeue());
	console.log("size:", queue.getSize());
}