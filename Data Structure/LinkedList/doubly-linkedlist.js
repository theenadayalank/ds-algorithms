class DoublyLinkedList {
  constructor() {
    this.head = {};
  }

  add(position, value) {
    if(this.head === null) {
      this.head = {
        data: value,
        prev: null,
        next: null
      }
    }

    let i = 1;
    let head = this.head;

    while(head != null) {
      if(i === position) {
        let temp = {
          data: value,
          prev: head.prev,
          next: head
        }
        head.prev.next = temp;
        return this.head;
      }
      head = head.next;
      i++;
    }

    if(i > position) {
      console.log('Please provide position value below', i);
    } 
  }

  delete(position, value) {
    if(this.head === null) {
      console.log('The list is empty!');
      return;
    }

    let i = 1;
    let head = this.head;

    while(head != null) {
      if(i === position) {
        let temp = {
          data: value,
          prev: head.prev,
          next: head.next
        }
        head.prev.next = temp;
        head.next.prev = temp;
        return this.head;
      }
      head = head.next;
      i++;
    }

    if(i > position) {
      console.log('Please provide the position value below', i);
    } 
  }

  length() {
    let head = this.head;
    let i = 0;

    while(head != null) {
      i++;
      head = head.next;
    }

    return i;
  }

  print() {
    let head = this.head;
    console.log('Printing Doubly Linked List');
    while(head !== null) {
      console.log(head.data);
      head = head.next;
    } 
  }
}


let list = new DoublyLinkedList();

list.add(1,1);
list.add(2,2);
list.print();