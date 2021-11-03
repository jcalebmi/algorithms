// Big-O:

// Uses:
  // Finds the fastest/cheapest path to x
  // Used for weighted graphs
    // when an edge has a value (like time) associated with it
    // Does not work with negative weights
      // Negative weights require Bellman-Ford algorithm
  // Edges must point one direction

// Steps:
  // find cheapest node
  // check if the theres a cheaper path to neighbors of node
  // update their costs
  // repeat for every node
  // caclulate path

  class Graph {
    constructor() {
      // Store each node
      this.nodes = [];
      // Store the edges for each node
      this.edges = {};
    }

    addNode(node) {
      // add node to array
      this.nodes.push(node);
      // create a place to store edges
      this.edges[node] = {};
    }

    addEdge(node1, node2, weight) {
      // Store each edge and its weight
        // edges { node1: { node2: weight } }
      this.edges[node1][node2] = weight;
    }

    changeWeight(node1, node2, weight) {
      this.edges[node1][node2] = weight;
    }

    dijkstra(source) {
      // Store the lowest cost to reach each node
      let costs = {};
      // Track the parents of each node
      let parents = {};
      // Track the visited nodes
      let visited = new Set();

      for (let i = 0; i < this.nodes.length; i++) {
        // if node is the current node, the cost is 0
        if (this.nodes[i] === source) {
          costs[source] = 0;
        } else {
          // set the cost of each node at infinity until the cost is found
          costs[this.nodes[i]] = Infinity;
        }
        // set each nodes parent to null until a parent is found
        parents[this.nodes[i]] = null;
      }

      // Find the lowest cost node that hasnt been proccessed
      let node = this.lowestCost(costs, visited);

      // iterate while there are still nodes to process
      while (node !== null) {
        let cost = costs[node];
        let neighbors = this.edges[node];

        // go through the neighbors of current node
        for (let neighbor in neighbors) {
          //  find the cost to reach this neighbor through the current node
          let newCost = cost + neighbors[neighbor];
          // if the cost to reach the neighbor is cheaper through the current node
          if (costs[neighbor] > newCost) {
            // update the cost to reach this neighbnor
            costs[neighbor] = newCost;
            // set the current node as the neighbors parent
            parents[neighbor] = node;
          }
        }
        // add current node to the list of visited nodes
        visited.add(node);
        // find the next lowest cost node to process
        node = this.lowestCost(costs, visited);
      }

      // Show lowest cost parent for each node
      console.log('Parents: \n' + JSON.stringify(parents)  + '\n');
      // Show the lowest cost to reach each node on the way to the finish
      console.log('Lowest cost per node: \n' + JSON.stringify(costs)  + '\n');
      console.log('Lowest cost to finish: \n' + costs['finish']  + '\n')
    }

    lowestCost(costs, visited) {
      let min = Infinity;
      let minNode = null;
      // check each node
      for (let node in costs) {
        let cost = costs[node];
        // check if cost is lower than current min
        // check if node has already been processed
        if (cost < min && !visited.has(node)) {
          min = cost;
          minNode = node;
        }
      }
      return minNode;
    }
  }

  const graph = new Graph();
  graph.addNode('start')
  graph.addNode('a');
  graph.addNode('b');
  graph.addNode('finish');

  graph.addEdge('start', 'a', 6);
  graph.addEdge('start', 'b', 2);
  graph.addEdge('a', 'finish', 1);
  graph.addEdge('b', 'a', 3);
  graph.addEdge('b', 'finish', 5);

  graph.dijkstra('start');




