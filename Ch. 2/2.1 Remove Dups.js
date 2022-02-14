/* 
Remove Dups! Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?


In many programming languages, map is the name of a higher-order function that 
applies a given function to each element of a collection, e.g. a list or set, 
returning the results in a collection of the same type. It is often called 
apply-to-all when considered in functional form.

The reduce() method executes a user-supplied “reducer” callback function on each 
element of the array, in order, passing in the return value from the calculation 
on the preceding element. The final result of running the reducer across all elements
 of the array is a single value.

 set method allow use to indicate a key and value for that map
*/

// "use strict";

// const users = [
//     { id: 32, fName: 'Mary', lName: 'Smith' },
//     { id: 65, fName: 'Steve', lName: 'Hancock' },
//     { id: 105, fName: 'LJ', lName: 'Estoque' },
//     { id: 65, fName: 'Steve', lName: 'Hancock' },
//     { id: 12, fName: 'Lynette', lName: 'Turner' },
//     { id: 32, fName: 'Mary', lName: 'Smith' },
// ];
// // KEY Value is the entire object id, fName, lName

// const uniqUsers = users.reduce((map, obj) => map.set(obj.id, obj), new Map());

// // https://www.youtube.com/watch?v=5JFJTGZ4gHQ 6:45

class LinkedListNode {        // class is creating a template for future objects
    constructor(value) {      // constructor is initializing an object instance of this class
        this.value = value;   // "this" is a property of an execution context (global, function or eval) 
        this.next = null;     // that in non-strict mode, is always a reference to an objectand in strict mode can be any value
    }
}

let head = new LinkedListNode("head");

let x = [1, 1, 1, 1, 4, 10, 10, 3, 10, 9, 5, 5, 5, 8];

for ( let ele of x) {               //looping through all the elements 
    let y = new LinkedListNode(ele);  
    let pointer = head;
    while(pointer.next != null) {
        pointer = pointer.next;
    }
    pointer.next = y;
}

function removeDup(currentNode = sll){
    const seen = {};
    while(currentNode) {
        if(seen[currentNode.value]) {
            lastUnique.next = currentNode.next
        } else {
            seen[currentNode.value] = true;
            lastUnique = currentNode
        } 
        currentNode = currentNode.next;
    }
}

removeDup(head);

let outputNode = head;
while (outputNode) {
    outputNode = outputNode.next;
    if(outputNode) {
        console.log(outputNode.value)
    }
}