class BST {
  constructor() {
      this.root = null;
  }

  add(item) {
      item.left = null;
      item.right =null;
      
      if(this.root === null) {
          this.root = item;
      } else {
          this.insertNewNode(this.root, item);
      }
  }

  search(key) {
      if(this.root === null) {
          return null;
      } else {
          this.searchANode(this.root, key)
      }
  }

  searchANode(node, key) {
      if(node===null) {
          return null;
      } else if(node.num < key) {       
          return this.searchANode(node.right, key);
      } else if(node.num > key) {
          return this.searchANode(node.left, key);
      } else {
          return {
              num: node.num,
              value: node.value
          };
      }
  }

  insertNewNode(node, newNode) {
      if(node.num > newNode.num) {
          if(node.left === null) {
              node.left = newNode;
          } else {
              this.insertNewNode(node.left, newNode)
          }
      } else {
          if(node.right === null) {
              node.right = newNode;
          } else {
              this.insertNewNode(node.right, newNode)
          }
      }
  }
}

class Item {
  constructor()
}