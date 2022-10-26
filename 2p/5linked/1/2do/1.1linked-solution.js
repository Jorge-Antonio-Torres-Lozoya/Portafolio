
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
  contains(data) {
    let current = this.head
    while (current) {
      if (current.data == data) {
        return true
      }
      current = current.next
    }
    return false
  }
}

let linkedList = new LinkedList()

linkedList.add('Azul')
linkedList.add('Esmeralda')
linkedList.add('Rojo')
linkedList.print()
console.log('El nodo en la cola es ' + linkedList.getTail())
console.log(linkedList.contains('Azul'))

