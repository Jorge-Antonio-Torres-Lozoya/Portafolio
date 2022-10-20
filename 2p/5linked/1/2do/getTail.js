/* PROBLEM 2
 * getTail()
 *
 * retrieve the node at the tail
 * @returns {Node} - Node at the tail or null if the list is empty
 *
 * @example
 * getTail()
 *
 */


class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.currentSize = 0
  }

  add(data) {
    const node = new Node(data)

    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    this.currentSize++
  }

  remove(data) {
    if (this.head === null) {
      return null
    }

    let current = this.head
    let prev = null
    while (current.data !== data) {
      prev = current
      current = current.next
    }
    if (prev === null) {
      this.head = current.next
    } else {
      prev.next = current.next
    }
    this.currentSize--
    return data
  }

  size() {
    return this.currentSize
  }

  print() {
    if (this.head === null) {
      return null
    }

    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }

  }

  isEmpty() {
    return this.head === null
  }

  clear() {
    this.head = null
    this.currentSize = 0
  }

  getTail() {
    if (this.head === null) {
      return null
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current.data
  }



}

let linkedList = new LinkedList()

console.log(linkedList.isEmpty())
linkedList.add('Azul')
linkedList.add('Esmeralda')
linkedList.print()
console.log('El ultimo elemento de la cola es ' + linkedList.getTail())
console.log(linkedList.size());
linkedList.clear()
console.log(linkedList.isEmpty())

