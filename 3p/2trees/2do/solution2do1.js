
import {BinaryTree} from '../../../jatl/tree/binaryTree.js'
  let tree = new BinaryTree()

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