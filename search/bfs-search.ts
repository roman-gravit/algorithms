export { BreadthFirstSearch, Vertex };

import { Vertex } from "./bfs-search.types.js";

function BreadthFirstSearch(graph: Vertex, name: string): string | null {
	const queue: Vertex[] = [];

	queue.push(graph);

	while(queue.length > 0) {
		const current_vertex = queue.shift();
		if(!current_vertex) {
			return "";
		}

		if(current_vertex.value === name) {
			return current_vertex.value;
		}
		
		for(const child of current_vertex.children || []) {
			queue.push(child);
		}
	}

	return "";
}