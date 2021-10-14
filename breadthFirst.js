//Breadth First Search
  //Checks each child of a node before moving moving on to the childern of each previously checked node.
  // Uses a queue to check & should check nodes in the order that they are queued
  // if the search criteria for a node is false
    // add each child of the node to the queue
    // then dequeue the node
  // simply: check node, add children to queue, pop node

class Graph {
  constructor(name, mangoSeller) {
    this.name = name;
    this.mangoSeller = mangoSeller;
    this.queue = [];
  }

  // add child nodes
  enqueue = (childName, mangoSeller) => {
    // create new child node
    const newNode = new Graph(childName, mangoSeller);
    // add child node to queue
    this.queue.unshift(newNode);
    // return node to store in variable
    return newNode;
  }

  dequeue = () => {
    // save popped/dequeued node as a variable
    // dequeue current node
    const node = this.queue.pop();
    // return current node for later use
    return node;
  }

  findMangoSeller = () => {
    // while the queue still has nodes inside, search the queue
    while (this.queue.length !== 0) {
      // pop current node off the end of queue
      // save current node as a variable
      const person = this.dequeue();
      // check if current node meets search criteria
      if (person.mangoSeller) {
        // return node if criteria is met
        console.log(`${person.name} is a Mango Seller`);
        return `${person.name} is a Mango Seller`;
      } else {
        // if criteria is not met
          // add each child of the current node to the queue to be searched later
        person.queue.forEach(newPerson => this.queue.unshift(newPerson));
      }
    }
    return false;
  }
}
// create root node
const me = new Graph('caleb', false);
// first degree
  // add child nodes
const alice = me.enqueue('alice', false);
const bob = me.enqueue('bob', false);
const claire = me.enqueue('claire', false);
// second degree
  // add children of child nodes
const anuj = bob.enqueue('anuj', true);
const peggy = alice.enqueue('peggy', false);
const peggy2 = bob.enqueue('peggy', false);
const thom = claire.enqueue('thom', false);
const johnny = claire.enqueue('johnny', false);
// perform breadth first search of the graph
me.findMangoSeller();



