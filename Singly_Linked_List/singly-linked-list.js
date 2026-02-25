/*
    *** Singly Linked List ***

        => A singly linked list is a unidirectional that is it can be traversed in only one direction from head to the last node(tail)
        => A data structure that contains a head, tail and length property.
        => Linked list consist of nodes, and each node has a value and a pointer to another node or null.
    
    *** Comparisons with Array ***

        ---------- List -------------
            => Do not have index
            => Connected via node with a next pointer
            => Randon access do not allowed

        ----------- Arrays -------------
            => Index is order!
            => Insertion and deletion can be expensive
            => Can quickly be accessed via specific index

    *** Time Complexity of Singly Linked List ***
        => Insertion(Push(), unshift()) ----- O(1)
                            insert() --- O(N)
        => Removal(pop(), shift()) ----- O(1)
                                    remove() --- O(N)
        => Searching(get()) --- O(N)
        => Access(get()) --- O(N)


------- SL --------

1. Link list - is a random memory address but Array is not random

2. One node two information, one is data, second one reference or pointer

3. Head and tail for link list

4. Singly link list only know information about next node not second node doesn't know first node like this way go.

*/


/*
    *** Benefits of the Singly Linked List ***
        => Singly Linked List are an execellent alternative to arrays when insertion and deletion at the beginning are frequently required.
        => Arrays contain a built in index whereas Linked Lists do not
        => The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.
*/
// create a new node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// make a singly linked list class
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // implement pushing(Adding a new node to the end of the Linked List)
    push(value) {
        // push method which accept a value
        // create a new node using the value passed to the Node Class
        let newNode = new Node(value);
        // if there is no head property on the list, set the head and tail to be the newly created node.
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // if we have head property on the list, set the next property on the tail to be the new node
            this.tail.next = newNode;
            // set the tail property on the list to be the newly created node
            this.tail = newNode;
        }

        // increament the length by one
        this.length++;
        return this;
    }
    // popping(Removing a node from the end of the linked list!)
    pop() {
        // if there are no nodes in the list, return undefined
        if (!this.head) {
            return undefined;
        }
        // looping through the list until i reach the tail
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // assign null node next value
        this.tail.next = null;
        // assign new tail before tail node
        this.tail = newTail;
        // decrement the length by 1
        this.length--;
        // if there is not length, set the default constructore value
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // return last removing node
        return current;
    }
    // shifting(Removing a new node from the beginning of the linked list)
    shift() {
        // if there are no nodes in the list, return undefined
        if (!this.head) {
            return undefined;
        }
        // store the current head property in a  variable
        let currentHead = this.head;
        // set the head property to be the current head's next property
        this.head = currentHead.next;
        // decrement the length by 1
        this.length--;
        // if there is not length, set the default constructore value
        if (this.length === 0) {
            this.tail = null;
        }
        // return the value of the node removed
        return currentHead;
    }
    // unshifting(Adding a new node to the beginning of the linked list)
    unshift(value) {
        // if there is no node in the list, return undefined
        if (!this.head) {
            return undefined;
        }
        // create a new node with Node class
        let newNode = new Node(value);
        // if there is no head property on the list, set the head and tail to be the newly created node.
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // set the newly created node's next property to be the current head property on the list
            newNode.next = this.head;
            // set the head newly created node
            this.head = newNode;
        }
        // increment by 1
        this.length++;
        // return our linked list
        return this;
    }
    // get(Retrieving a node by it's position in the linked list)
    get(index) {
        // if the index is less than 0 or greater than or equal to the length of the list, return null
        if (index < 0 || index >= this.length) {
            return null;
        }
        // inital index count
        let count = 0;
        // current node
        let current = this.head;
        // loop through the list until you reach the index
        while (count !== index) {
            count++;
            current = current.next;
        }
        //retun the node at that specific index
        return current;
    }

    // Set(changing the value of a node based on it's position in the linked list)
    set(index, value) {
        // useing get function for getting the specific node
        let foundNodeByIndex = this.get(index);
        // if the node is not found, return false
        if (!foundNodeByIndex) return false;
        // if the node is found, set the value of that node to be the value passed to the function and return true
        if (foundNodeByIndex) {
            foundNodeByIndex.value = value;
            return true;
        }
    }
    // Insert(Adding a node to the linked list at a specific position)
    insert(index, value) {
        // if the index is less than 0 or greater than the length, return false
        if (index < 0 || index > this.length) return false;
        // if the index is the same as the length , push a new node to the end of the list
        if (index === this.length) return !!this.push(value);
        // if the index is 0, unshift a new node to the start of the list
        if (index === 0) return !!this.unshift(value);

        // creating new node
        let newNode = new Node(value);
        // getting previous node
        let previousNode = this.get(index - 1);
        // temp node set on the temp variable
        let temp = previousNode.next;
        // inserting new node with previous node
        previousNode.next = newNode;
        // after previous node, connected with new node next
        newNode.next = temp;
        // increment the length
        this.length++;
        return true;
    }
    // Remove(Removing a node from the linked list at a specific position)
    remove(index) {
        // if the index is less than 0 or greater than the length, retun undefined
        if (index < 0 || index > this.length) return undefined;
        // if the index is the same as the length, removing node at the end
        if (index === this.length - 1) return this.pop();
        // if the index is 0, removing node at the beginning
        if (index === 0) return this.shift();
        // previous node of the removing node
        let previousNode = this.get(index - 1);
        // removed node
        let removedNode = previousNode.next;
        // set the next property on that node to be the next of the next node
        previousNode.next = removedNode.next;
        // decrement the length
        this.length--;
        // return the value of the node removed
        return removedNode;
    }
    // Reverse(Reversing the linked list in place!)
    reverse() {
        // create a variable called node and initialize it to the head property
        let node = this.head;
        // swap the head and tail
        this.head = this.tail;
        this.tail = node;
        // create a variable called next
        let next;
        // create a variable called prev
        let prev = null;
        // loop through the list
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            console.log(node, "inside node");
            prev = node;
            console.log(next, "inside next");
            node = next;
        }
        return this;
    }
}
const list = new SinglyLinkedList();
list.push(5);
list.push(19);
list.push(39);
console.log(list.remove(2));
console.log(list);
