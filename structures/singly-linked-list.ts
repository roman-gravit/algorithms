import {  Node } from "./queue.ts";

class SinglyLinkedList {
	private head: Node | null;
	private tail: Node | null;
	private length: number;
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	shift(): Node | null {
		if(!this.head) {
			return null;
		}
		const current = this.head;
		this.head = current.next;
		this.length--;
		return this.head;
	}

	pop(): null | Node {
		console.log("pop->");
		if(!this.tail) {
			return null;
		}

		if(this.head === this.tail) {
			this.head = null;
			this.tail = null;
			this.length--;
			return null;
		}

		let current = this.head;
		let newTail = current;
		while(current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		console.log("head:", this.head);
		return this.tail;
	}

	getLength(): number {
		return this.length;
	}

	unshift(value: number): SinglyLinkedList {
		const node = new Node(value);
		if(!this.head) {
			this.tail = node;
		} else {
			node.next = this.head;
		}
		this.head = node;
		this.length++;
		return this;
	}

	push(value: number): SinglyLinkedList {
		const node = new Node(value);
		if(!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length++;
		return this;
	}
	reverse(): SinglyLinkedList {
		let prev = null;
		let current = this.head;
		this.tail = current;

		while(current) {
			const temp = current.next;
			current.next = prev;
			prev = current;
			current = temp;
		}
		this.head = prev;
		return this;
	}
}

const list = new SinglyLinkedList();
console.log("length:", list.getLength());
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log("length:", list.getLength());

console.log(list.reverse());