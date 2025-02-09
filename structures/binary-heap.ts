export {};


class MaxBinaryHeap<T> {
	values = [];
	constructor() {
		this.values = [49, 39, 33, 18, 27, 12];
	}

	insert(value: T): void {
		this.values.push(value);
		this.bubbleUp();
	}

	bubbleUp(): void {
		let index = this.values.length - 1; 
		const element = this.values[index];
		while(index > 0) {
			const parentInd = Math.floor((index - 1) / 2);
			const parent = this.values[parentInd];
			if(element <= parent) { 
				break; 
			}
			this.values[parentInd] = element;
			this.values[index] = parent;
			index = parentInd;
		}
	}

	extractMax(): void {
		if(this.values.length === 0) {
			return;
		}
		const last = this.values.pop();
		if(this.values.length === 0) {
			return;
		}
		this.values[0] = last;
		this.sinkDown();
	}

	sinkDown(): void {
		let idx = 0;
		let swapInd = Infinity;
		while(swapInd > 0) {
			swapInd = 0;
			const element: T = this.values[idx];
			const leftChildInd = 2 * idx + 1; 
			const rightChildInd = 2 * idx + 2; 
			const left: T | undefined = this.values[leftChildInd];
			const right: T | undefined = this.values[rightChildInd];
			if(this._LeftLargerThanElement(left, element)) {
				swapInd = leftChildInd;
			}
			if(this._RightLargerThanElementAndLeft(left, right, element)) {
				swapInd = rightChildInd;
			}
			if(swapInd === 0) {
				break;
			}
			this.values[idx] = this.values[swapInd];
			this.values[swapInd] = element;
			idx = swapInd;
		}

	}

	_LeftLargerThanElement(left: T | undefined, target: T): boolean {
		if(left === undefined) {
			return false;
		}
		return left > target;
	}
	_RightLargerThanElementAndLeft(left: T | undefined, right: T | undefined, target: T): boolean {
		if(right === undefined) {
			return false;
		}
		if(right < target) {
			return false;
		}
		if(left === undefined) {
			return true;
		}
		return right > left;
	}
}

// [49, 39, 33, 18, 27, 12]
//            49
//           /  \
//          39   33
//        /   \    \
//       18   27    12

test();

function test(): void {
	const heap = new MaxBinaryHeap<number>();
	console.log(heap);
	heap.insert(55);
	console.log(heap);
	heap.insert(34);
	console.log(heap);
	heap.extractMax();
	console.log(heap);
	heap.extractMax();
	heap.extractMax();
	heap.extractMax();
	heap.extractMax();
	console.log(heap);
	heap.extractMax();
	heap.extractMax();
	console.log(heap);
	heap.extractMax();
	console.log(heap);
	heap.extractMax();
}