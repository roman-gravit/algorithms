export {};

class Node {
	value: number;
	left: Node | null;
	right: Node | null;
	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	root: Node | null;
	constructor() {
		this.root = null;
	}

	insert(value: number): BinaryTree {
		const node = new Node(value);
		if(!this.root) {
			this.root = node;
			return this;
		}
		let current = this.root;
		while(true) {
			if(value < current.value) {
				if(!current.left) {
					current.left = node;
					return this;
				} else {
					current = current.left;
				}
			} else {
				if(!current.right) {
					current.right = node;
					return this;
				} else {
					current = current.right;
				}				
			}
		}
	}

	BFS(): number[] {
		if(!this.root) {
			return [];
		}

		const queue: Node[] = [];
		const visited: number[] = [];

		queue.push(this.root);

		while(queue.length > 0) {
			const current = queue.shift();
			visited.push(current.value);
			if(current.left) {
				queue.push(current.left);
			}
			if(current.right) {
				queue.push(current.right);
			}
		}

		return visited;
	}

	DFSPreOrder(): number[] {
		if(!this.root) {
			return [];
		}

		const visited: number[] = [];
		_traverse(this.root);
		return visited;

		function _traverse(node: Node): void {
			if(!node) {
				return;
			}
			visited.push(node.value);
			_traverse(node.left);
			_traverse(node.right);
		}
	}

	DFSPostOrder(): number[] {
		if(!this.root) {
			return [];
		}

		const visited: number[] = [];
		_traverse(this.root);
		return visited;

		function _traverse(node: Node): void {
			if(!node) {
				return;
			}
			_traverse(node.left);
			_traverse(node.right);
			visited.push(node.value);
		}
	}

	DFSInOrder(): number[] {
		if(!this.root) {
			return [];
		}

		const visited: number[] = [];
		_traverse(this.root);
		return visited;

		function _traverse(node: Node): void {
			if(!node) {
				return;
			}
			_traverse(node.left);
			visited.push(node.value);
			_traverse(node.right);
		}
	}
}

test();

function test(): void {
	const tree = new BinaryTree();
	tree.insert(new Node(10).value);
	tree.insert(new Node(6).value);
	tree.insert(new Node(15).value);
	tree.insert(new Node(3).value);
	tree.insert(new Node(8).value);
	tree.insert(new Node(20).value);
	console.log("BFS:", tree.BFS());
	console.log("BFS Pre:", tree.DFSPreOrder());
	console.log("BFS Post:", tree.DFSPostOrder());
	console.log("BFS In:", tree.DFSInOrder());
}