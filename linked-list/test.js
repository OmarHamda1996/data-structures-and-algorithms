const LinkedList = require('./linkedList');

const emptyList = new LinkedList();
console.log(emptyList.toString()); 


const list = new LinkedList();
list.insert('c');
list.insert('b');
list.insert('a');
console.log(list.toString()); 

console.log(list.includes('b')); 
console.log(list.includes('d')); 

list.insert('d');
list.insert('e');
list.insert('f');
console.log(list.toString()); 

console.log(list.includes('f')); 
console.log(list.includes('c')); 
console.log(list.includes('g')); 
