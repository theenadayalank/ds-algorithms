class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = {
      data: value,
      next: null
    }

    if(this.head == null) {
      this.head = node;
      return this.head;
    }

    let head = this.head;
    while(head.next != null) {
      head = head.next;
    }
    head.next = node;

    return this.head;
  }

  delete(value) {
    if(this.head === null) {
      return this.head;
    }

    let head = this.head;
    let prev;

    if(head.data === value) {
      this.head = head.next;
      return;
    }

    while(head != null && head.data != value) {
      prev = head;
      head = head.next;
    }

    if(head === null) {
      return
    }

    prev.next = head.next;
  }

  length() {
    let i = 0;
    let head = this.head;
    while(head != null) {
      i++
      head = head.next;
    }
    return i;
  }

  print() {
    let head = this.head;
    console.log('Printing Linked List');
    while(head !== null) {
      console.log(head.data);
      head = head.next;
    } 
  }

  has(value) {
    let head = this.head;
    while(head != null) {
      if(head.data === value) {
        return true;
      }
      head = head.next;
    }

    return false;
  }

  reverse() {
    let head = this.head;
    let rev = null;

    while(head != null) {
      if(!rev) {
        rev = {
          data: head.data,
          next: null
        };
      } else {
        rev = {
          data: head.data,
          next: rev
        }
      }
      head = head.next;
    }

    this.head = rev;
  }

  deleteList() {
    this.head = null;
  }
}


let li = new LinkedList();

li.add(1);
li.add(2);
li.print();

console.log('Length', li.length());

li.delete(2);

console.log('Length', li.length());

li.print();

li.add(2);
li.add(3);
li.add(4);
li.print();

li.reverse();
li.print();


