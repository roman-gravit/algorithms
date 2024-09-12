export { BreadthFirstSearch, Vertex };

type Vertex = {
	value: string,
	children?: Vertex[]
}

function BreadthFirstSearch(graph: Vertex, name: string): string | null {
	let queue: Vertex[] = [];

	queue.push(graph);

	while(queue.length > 0) {
		let current_vertex = queue.shift();
		if(!current_vertex) {
			return "";
		}

		if(current_vertex.value === name) {
			return current_vertex.value;
		}
		
		for(let child of current_vertex.children || []) {
			queue.push(child);
		}
	}

	return "";
}