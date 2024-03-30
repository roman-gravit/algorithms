import { Node2, SearchGraphDFSWhile, SearchGraphBFSWhile} from "./graph-BFS-DFS-search";
import { SearchGraphBFS, SearchGraphDFS, Node, Graph } from "./graph-BFS-DFS-search";


function comparator(a: number, b: number) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

function _CreateGraph(): Graph<number>  {
    const graph: Graph<number> = new Graph<number>(comparator, 1);
    graph.addEdge(1, 2);
    graph.addEdge(1, 4);
    graph.addEdge(2, 1);
    graph.addEdge(2, 3);
    graph.addEdge(2, 5);
    graph.addEdge(3, 2);
    graph.addEdge(3, 6);
    graph.addEdge(4, 1);
    graph.addEdge(4, 5);
    graph.addEdge(4, 7);
    graph.addEdge(5, 2);
    graph.addEdge(5, 4);
    graph.addEdge(5, 6);
    graph.addEdge(5, 8);
    return graph;
}

function _CreateDataClone(): Node2 {
    const root: Node2 = {
        value: "A",
        children: [
            {
                value: "B",
                children: [ 
                    {
                        value: "E"
                    },
                    {
                        value: "F"
                    }
                ]
            },
            {
                value: "C",
                children: [ 
                    {
                        value: "F"
                    },
                    {
                        value: "G"
                    }
                ]
            },
            {
                value: "D",
                children: [ 
                    {
                        value: "G"
                    }
                ]
            }
        ]
    };
    return root;
    
}   

test("SearchGraphDFSWhile",  () => {
	const start_node: Node2 = _CreateDataClone();
	const search_data = [  
			{ value: "A" }, { value: "D" }, { value: "G" },
			{ value: "C" }, { value: "F" }, { value: "B" }, { value: "E" } 
	];

	const result = SearchGraphDFSWhile(start_node, { value: "E" });
	expect(result).toEqual(search_data);
});

test("SearchGraphDFSWhile",  () => {
	const start_node: Node2 = _CreateDataClone();
	const search_data = [  
		{ value: "A" }, { value: "D" }, { value: "G" }
	];

	const result = SearchGraphDFSWhile(start_node, { value: "G" });
	expect(result).toEqual(search_data);
});

test("SearchGraphBFSWhile",  () => {
	const start_node: Node2 = _CreateDataClone();
	const search_data = [  
		{ value: "A" }, { value: "B" }, { value: "C" },
		{ value: "D" }, { value: "E" }, { value: "F" } 
	];

	const result = SearchGraphBFSWhile(start_node, { value: "F" });
	expect(result).toEqual(search_data);
});

test("SearchGraphBFS",  () => {
	const graph: Graph<number> = _CreateGraph();
	const search_data = [2, 5, 8];

	for(const data of search_data) {
		const result = SearchGraphBFS(graph, data);
		expect(result).not.toBeNull()
	}
});

test("SearchGraphDFS",  () => {
	const search_data = [2, 5, 8];
	for(const data of search_data) {
		const graph: Graph<number> = _CreateGraph();
		const result = SearchGraphDFS(graph.root, new Node<number>(data, comparator));
		expect(result).not.toBeNull()
	}
});