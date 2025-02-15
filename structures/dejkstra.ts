export {};

class Node {
	value: string;
	priority: number;
	constructor(value: string, priority: number) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	values: Node[];
	constructor() {
		this.values = [];
	}
	enqueue(value: string, priority: number): void {
		const node = new Node(value, priority);
		this.values.push(node);
		this.sort();
	}

	dequeue(): Node {
		return this.values.shift();
	}

	sort(): void {
		this.values.sort((a: Node, b: Node): number => a.priority - b.priority);
	}
}

class Edge {
	node: string;
	weight: number;
	constructor(node: string, weight: number) {
		this.node = node;
		this.weight = weight;
	}
	toString(): string {
		return `Node: ${this.node} Weight: ${this.weight}`;
	}
}


class WeightedGraph {
	adjList: Record<string, Edge[]> = {};
	constructor() {
		this.adjList = {};
	}

	addVertex(vertex: string): void {
		this.#validateVertexExist(vertex);
	}

	addEdge(source: string, dest: string, weight: number): void {
		const edgeSource = new Edge(source, weight);
		this.#validateVertexExist(source);
		this.adjList[source].push(edgeSource);
		
		const edgeDest = new Edge(dest, weight);
		this.#validateVertexExist(dest);
		this.adjList[dest].push(edgeDest);
	}
	
	Dijkstra(start: string, finish: string): void {
		const prevoius = this.#initPrevious();
		const nodes = this.#initQueue(start);
		const distances = this.#initDistances(start);

		while(nodes.values.length) {
			const smallest = nodes.dequeue().value;
			if(smallest === finish) {
				//
			} 
		}

	}

	#initPrevious(): Record<string, null | string> {
		const prevoius: Record<string, null | string> = {};
		for(const vertex in this.adjList) {
			prevoius[vertex] = null;
		}
		return prevoius;
	}

	#initQueue(start: string): PriorityQueue {
		const nodes = new PriorityQueue();
		for(const vertex in this.adjList) {
			if(vertex === start) {
				nodes.enqueue(vertex, 0);
			} else {
				nodes.enqueue(vertex, Infinity);
			}
		}
		return nodes;
	}

	#initDistances(start: string): Record<string, number> {
		const distances: Record<string, number> = {};
		for(const vertex in this.adjList) {
			if(vertex === start) {
				distances[vertex] = 0;
			} else {
				distances[vertex] = Infinity;
			}
		}
		return distances;
	}

	#validateVertexExist(vertex: string): void {
		if(this.adjList[vertex] === undefined) {
			this.adjList[vertex] = [];
		}		
	}
}


const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph);