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
      this.vertices = [];
      // Store the edges for each node
      this.adjacencyList = {};
    }

    addVertex(vertex) {
      this.vertices.push(vertex);
      this.adjacencyList[vertex] = {};
    }

    addEdge(vertex1, vertex2, weight) {
      // Store each edge and its weight
      this.adjacencyList[vertex1][vertex2] = weight;
    }

    changeWeight(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1][vertex2] = weight;
    }

    dijkstra(source) {
      // Store the lowest cost for a node
      let costs = {};
      // Track the parents of a node
      let parents = {};
      // Track the visited nodes
      let visited = new Set();

      for (let i = 0; i < this.vertices.length; i++) {

        if (this.vertices[i] === source) {
          costs[source] = 0;
        } else {
          costs[this.vertices[i]] = Infinity;
        }

        parents[this.vertices[i]] = null;
      }

      // Find the lowest cost neighboring node
      let currVertex = this.lowestCost(costs, visited);


      while (currVertex !== null) {
        let cost = costs[currVertex];
        let neighbors = this.adjacencyList[currVertex];

        for (let neighbor in neighbors) {
          let newCost = cost + neighbors[neighbor];

          if (costs[neighbor] > newCost) {
            costs[neighbor] = newCost;
            parents[neighbor] = currVertex;
          }
        }
        visited.add(currVertex);
        currVertex = this.lowestCost(costs, visited);
      }
      // Show lowest cost parent for each node
      console.log('Parents: ' + JSON.stringify(parents));
      // Show the lowest cost to reach each node on the way to the finish
      console.log('Lowest cost per node: ' + JSON.stringify(costs));
    }

    lowestCost(costs, visited) {
      let min = Infinity;
      let minVertex = null;

      for (let vertex in costs) {
        let cost = costs[vertex];
        if (cost < min && !visited.has(vertex)) {
          min = cost;
          minVertex = vertex;
        }
      }
      return minVertex;
    }
  }

  const graph = new Graph();
  graph.addVertex('start')
  graph.addVertex('a');
  graph.addVertex('b');
  graph.addVertex('finish');

  graph.addEdge('start', 'a', 6);
  graph.addEdge('start', 'b', 2);
  graph.addEdge('a', 'finish', 1);
  graph.addEdge('b', 'a', 3);
  graph.addEdge('b', 'finish', 5);

  graph.dijkstra('start');




