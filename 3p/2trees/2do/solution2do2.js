
import {BinarySearchTree} from '../../../jatl/tree/binarySearchTree.js'
 
let tree = new BinarySearchTree()
  tree.insert(4)
  tree.insert(2)
  tree.insert(6)
  tree.insert(3)
  tree.insert(9)
  tree.insert(-1)
  tree.insert(3)
  tree.insert(8)
  console.log('PreOrden');
  tree.preorder()
  let root=tree.getRootNode()
  console.log(tree.search(root,3))