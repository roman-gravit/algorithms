export { SearchGraphBFS, SearchGraphDFS, SearchGraphBFSWhile, SearchGraphDFSWhile };
export { Graph, Node, Node2 };


interface Node2 {
    value:      string;
    visited?:   boolean;
    children?:  Node2[];
}

function SearchGraphBFSWhile(start: Node2, target: Node2): Node2[] {
    // Breadth-first search(BFS) Graph
    // It visits ALL NEIGHBORS nodes first and then moving on to next-level neighbors, and so on.
    const queue: Node2[] = [];
    const result: Node2[] = [];

    start.visited = true;
    queue.push(start);

    while(queue.length > 0) {
        const current = queue.shift();  // take first
        if(!current) {
            break;
        }

        result.push({ value: current.value });

        if(current.value === target.value) {
            return result;
        }

        for(const neighbor of current.children || []) {
            if(!neighbor.visited) {
                neighbor.visited = true;
                queue.push(neighbor);
            }
        }
    }

    return result;
}

function SearchGraphDFSWhile(start: Node2, target: Node2): Node2[] {
    // Depth-first search(DFS) Graph 
    // Keep traversing downwards via connected nodes unless we reach the end
    // then retrace our steps and see connected nodes not visited and repeat the process. 
    // All nodes in each level (vertically) should be visited before to go next level.

    const result: Node2[] = [];
    const stack: Node2[] = [start];
    const visited = new Set();

    while (stack.length > 0) {
        const current = stack.pop();
        if(!current) {
            break;
        }

        if(current.value === target.value) {
            result.push({ value: current.value });
            return result;
        }

        if (!visited.has(current.value)) {
            visited.add(current.value);
            result.push({ value: current.value });
  
            for(const neighbor of current.children || []) {
                stack.push(neighbor);
            }
        }
    }
  
    return result;
}


class Node<T> {
        
    data: T;
    visited: boolean;
    children: Node<T>[];
    comparator: (a: T, b: T) => number;

    constructor(value: T, comparator: (a: T, b: T) => number) {
        this.data = value;
        this.children = new Array<Node<T>>();
        this.comparator = comparator;
        this.visited = false;
    }
    
    AddNode(node: Node<T>): void {
        this.children.push(node);
    }

    RemoveNode(_node: Node<T>): Node<T> | null {
        const index = this.children.findIndex(
            (elem) => this.comparator(elem.data, this.data) === 0
        );
        if (index !== -1) {
            return this.children.splice(index, 1)[0];
        }
        return null;
    }
}

class Graph<T> {
    nodes: Map<T, Node<T>> = new Map<T, Node<T>>();
    comparator: (a: T, b: T) => number;
    root: Node<T>;
  
    constructor(comparator: (a: T, b: T) => number, data: T) {
        this.comparator = comparator;
        const root_node = new Node<T>(data, comparator);
        this.nodes.set(data, root_node);
        this.root = root_node;
    }

    AddNode(data: T): Node<T> {
        let node = this.nodes.get(data);
        // if the node is already in the graph, then there is no need to build it
        if (node !== null) {
            return node;
        }
        // if the node is not already in the graph, then create a node and set the node into the map of nodes
        node = new Node(data, this.comparator);
        this.nodes.set(data, node);
        return node;
    }

    removeNode(data: T): Node<T> {
        const nodeToRemove = this.nodes.get(data);
    
        this.nodes.forEach((node) => {
            // if nodeToRemove is not undefined and if node in graph contains nodeToRemove in list of adjacent nodes
            if (nodeToRemove && node.children.includes(nodeToRemove)){
                // remove nodeToRemove
                node.RemoveNode(nodeToRemove);
            }
        });

        this.nodes.delete(data);
        return nodeToRemove;
    }

    addEdge(source: T, destination: T): void {
        const sourceNode: Node<T> = this.AddNode(source);
        const destinationNode: Node<T> = this.AddNode(destination);
    
        // add the destination node to the list of adjacent nodes for the destination node.
        sourceNode.AddNode(destinationNode);
    }

    removeEdge(source: T, destination: T): void {
        //get the source node
        const sourceNode: Node<T> | undefined = this.nodes.get(source);
        //get the destination node
        const destinationNode: Node<T> | undefined = this.nodes.get(destination);
    
        //remove the destination from the list of adjacent nodes on the source node
        if (sourceNode && destinationNode) {
            sourceNode.RemoveNode(destinationNode);
        }
    }
}

/**
 *  Breadth-first search(BFS) Graph
 *  It visits ALL NEIGHBORS nodes first and then moving on to next-level neighbors, and so on.
 *  This algorithm uses QUEUE to store nodes to visit next and traverses every node 
 *  and edge in the graph exactly once.
 */
function SearchGraphBFS<T>(data: Graph<T>, search: T): T | null {

    const start_node = data.root;

    const visited: Node<T>[] = [];
    const queue: Node<T>[] = [];
    
    queue.push(start_node);
    
    while (queue.length !== 0){
        const current: Node<T> | undefined = queue.shift();
        if (!current){
            continue;
        }

        if(current.data === search) {
            return current.data;
        }
    
        visited.push(current);
            
        current.children.forEach(node => {
            if (visited.indexOf(node) === -1){
                visited.push(node);
                queue.push(node);
            }
        });
    }

    return null;
}

/**
 * Depth-first search(DFS) Graph 
 * Keep traversing downwards via connected nodes unless we reach the end, 
 * then retrace our steps and see connected nodes not visited and repeat the process. 
 * All nodes in each level (vertically) should be visited before to go next level.
 * Use RECURSIVE calls
 */
function SearchGraphDFS<T>(start_node: Node<T>, search: Node<T>): T | null {

    if(start_node.data === search.data) {
        return search.data;
    }

    if(start_node.visited) {
        return null;
    }

    start_node.visited = true;
    
    for(const neighbor of start_node.children) {
        if(!neighbor.visited) {
            const reached = SearchGraphDFS(neighbor, search);
            if(reached!==null) {
                return reached;
            }
        }
    }

    return null;
}
