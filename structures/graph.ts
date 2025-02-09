/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export {};

class Graph {
	adjList: Record<string, string[]> = {};
	constructor() {
		this.adjList = {};
	}

	addVertex(vertex: string): void {
		this.#validateVertexExist(vertex);
	}

	removeVertex(vertex: string): void {
		for(const dest of this.adjList[vertex]) {
			this.adjList[dest] = this.adjList[dest].filter(elem => elem !== vertex);
		}
		delete this.adjList[vertex];
	}

	addEdge(source: string, dest: string): void {
		this.#validateVertexExist(source);
		this.adjList[source].push(dest);
		
		this.#validateVertexExist(dest);
		this.adjList[dest].push(source);
	}

	removeEdge(source: string, dest: string): void {
		this.#validateVertexExist(source);
		this.adjList[source] = this.adjList[source].filter(elem => elem !== dest);
		
		this.#validateVertexExist(dest);
		this.adjList[dest] = this.adjList[dest].filter(elem => elem !== source);
	}

	DFSIterative(start: string): string[] {
		const result: string[] = [];
		const visited: Record<string, boolean> = {};

		const stack = [start];
		visited[start] = true;
		while(stack.length) {
			const current = stack.pop();
			result.push(current);
			const children = this.adjList[current] || [];
			for(const child of children) {
				if(!visited[child]) {
					visited[child] = true;
					stack.push(child);
				}
			}
		}
		return result;
	}

    DFSRecursive(start: string): string[] {
		const result: string[] = [];
		const visited: Record<string, boolean> = {};

		const run = (vertex: string): void => {
			if(!vertex) {
				return;
			}
			visited[vertex] = true;
			result.push(vertex);
			const children = this.adjList[vertex] || [];
			for(const child of children) {
				if(!visited[child]) {
					run(child);
				}
			}
		};

		run(start);
		return result;
	}

	BFSIterative(start: string): string[] {
		const result: string[] = [];
		const visited: Record<string, boolean> = {};

		const stack = [start];
		visited[start] = true;
		while(stack.length) {
			const current = stack.shift();
			result.push(current);
			const children = this.adjList[current] || [];
			for(const child of children) {
				if(!visited[child]) {
					visited[child] = true;
					stack.push(child);
				}
			}
		}
		return result;
	}


	#validateVertexExist(vertex: string): void {
		if(this.adjList[vertex] === undefined) {
			this.adjList[vertex] = [];
		}		
	}
}

test();

function test(): void {
	const graph = new Graph();
	graph.addVertex("0"); //a
	graph.addVertex("1"); //b
	graph.addVertex("2"); //c
	graph.addVertex("3"); //d 
	graph.addVertex("4"); // e	
	graph.addVertex("5"); //f


	graph.addEdge("0", "1");
	graph.addEdge("0", "2");
	graph.addEdge("1", "3");	
	graph.addEdge("2", "4");
	graph.addEdge("3", "4");
	graph.addEdge("3", "5");
	graph.addEdge("4", "5");
	console.log(graph);

	console.log(graph.DFSRecursive("0"));
	console.log(graph.DFSIterative("0"));
	console.log(graph.BFSIterative("0"));
}