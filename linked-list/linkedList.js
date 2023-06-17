const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let valuesString = '';
    while (currentNode !== null) {
      valuesString += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    valuesString += 'NULL';
    return valuesString;
  }
}

module.exports = LinkedList;
