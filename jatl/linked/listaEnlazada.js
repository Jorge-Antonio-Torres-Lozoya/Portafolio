

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

  isEmpty() {
    return this.head === null
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

  insertAfter(node, search) {
    const nodo = new Node(node)
    let current = this.head
    if (this.head === null) {
      return null
    }

    while (current) {
      if (current.data == search) {
        nodo.next = current.next;
        current.next = nodo;
        current = current.next
        this.currentSize++
        return true
      }
      current = current.next

    }
    return false
  }

  insertBefore(node, search) {
    let current = this.head
    let prev = current
    while (current) {
      if (current.data == search) {
        if (search == this.head.data) {
          const nodo = new Node(node)
          nodo.next = this.head
          this.head = nodo
          nodo.next = prev
          this.currentSize++
          return true
        }
        else {
          const nodo = new Node(node)
          nodo.next = prev.next
          prev.next = nodo
          this.currentSize++
          return true
        }
      }
      prev = current
      current = current.next
    } return false
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

}
export { LinkedList }