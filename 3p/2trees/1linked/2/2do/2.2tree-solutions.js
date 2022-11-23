/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 * 
 */
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.rigth = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    // Funciones a implementar
    // Insertar
    insert(data) {
      let newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        // Crear una funcion para encontrar donde guardar el nodo
        this.insertNode(this.root, newNode);
      }
    }
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.rigth === null) {
          node.rigth = newNode;
        } else {
          this.insertNode(node.rigth, newNode);
        }
      }
    }
    // Remover
    remove(data) {
      this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key) {
      if (node === null) {
        return null;
      } else if (key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
      } else if (key > node.data) {
        node.rigth = this.removeNode(node.rigth, key);
        return node;
      } else {
        if (node.left === null && node.rigth === null) {
          node = null;
          return node;
        }
  
        if (node.left === null) {
          node = node.rigth;
          return node;
        } else if (node.rigth === null) {
          node = node.left;
          return node;
        }
  
        let aux = this.findMinNode(node.rigth);
        node.data = aux.data;
  
        node.rigth = this.removeNode(node.rigth, aux.data);
        return node;
      }
    }
  
    // Funciones complementarias
    findMinNode(node) {
      if (node.left === null) {
        return node;
      } else {
        this.findMinNode(node.left);
      }
    }
  
    // Obtener nodo raiz
    getRootNode() {
      return this.root;
    }
  
    // search
    search(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return this.search(node.left, data);
      } else if (data > node.data) {
        return this.search(node.rigth, data);
      } else {
        return node;
      }
    }
   
  
    // in orden
    inorder(node=this.root) {
      if (node !== null) {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.rigth);
      }
    }
  
    // post orden
    postorder(node=this.root) {
      if (node !== null) {
        this.postorder(node.left);
        this.postorder(node.rigth);
        console.log(node.data);
      }
    }
  }
  let tree = new BinarySearchTree()
  tree.insert(4)
  tree.insert(2)
  tree.insert(6)
  tree.insert(3)
  tree.insert(1)
  tree.insert(-1)
  tree.insert(3)
  tree.insert(1)
  console.log('PreOrden');
  tree.preorder()
  console.log();
  console.log('InOrder');
  tree.inorder()
  console.log();
  console.log('PostOrden');
  tree.postorder()
