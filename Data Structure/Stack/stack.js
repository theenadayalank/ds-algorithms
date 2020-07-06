class Stack {
  constructor(size) {
    this.items = [];
    this.size = size || 5;
  }

  addItem(newValue) {
    let { items = [], size } = this;
    if(items.length === size) {
      console.log('Stack is full');
      return;
    }
    items.push(newValue);
  }

  removeItem() {
    if(!this.items.length) {
      console.log('Stack is Empty');
      return;
    }

    let poppedValue = this.items.pop();
    console.log('The popped items is', poppedValue);
  }
}

let s = new Stack(3);
s.removeItem();
s.addItem(1);
s.addItem(2);
s.addItem(3);
s.addItem(4);
s.removeItem();
s.removeItem();
s.removeItem();
s.removeItem();
