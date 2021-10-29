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
    constructor(name) {
      this.name = name;
      this.edges = {};
      this.costs = {finish: Infinity};
      this.parents = {finish: null};
      this.processed = [];
    }

    addEdge(name, weight) {
      const node = new Graph(name);

      this.edges[name] = {
        node: name,
        weight: weight
      }

      this.costs[name] = weight;

      this.parents[name] = this.name;

      return node;
    }

    findLowestCost = (costs) => {
      let cheapest;
      let node;
      for (let cost in this.costs) {
        if (!cheapest || this.costs[cost] < cheapest) {
          cheapest = this.costs[cost];
          node = cost;
        }
      }
      return node;
    }

    findPath = () => {
      let node = this.findLowestCost(this.costs);
      while (this.processed.indexOf(node) === -1) {
        let cost = this.costs[node];


        for (let edge in this.edges) {
          let newCost;
          if (this.edges[edge].weight) {
            newCost = cost + this.edges[edge].weight
          } else {
            newCost = cost;
          }

          const name = this.edges[edge].node;
          if (this.costs[name] > newCost) {
            this.costs[name] = newCost;
            this.parents[name] = node;
          }
        }
        this.processed.push(node);
        node = this.findLowestCost(this.costs);

      }
      console.log(node);
      return node;
    }
  }

  const graph = new Graph();
  const a = graph.addEdge('a', 6);
  const b = graph.addEdge('b', 2);
  const finishA = a.addEdge('finish', 1);
  const bToA = b.addEdge('a', 3);
  const finishB = b.addEdge('finish', 5);

  graph.findPath();



