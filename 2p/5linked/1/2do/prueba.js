/* PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of a char, number, or object
 * @returns {bool} - true or false, if value v exists or not,
 * may use traverse
 *
 * @example
 * contains(3)
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

  append(data) {
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


  contains(data) {
    if (this.head === null) {
      return null
    }

    let current = this.head
    while (current.data != data) {
      return false
    }
    return true

  }
}

let listaEnlazada = new LinkedList()

listaEnlazada.append(5)
listaEnlazada.append(3)
listaEnlazada.append(8)
listaEnlazada.append(21)
listaEnlazada.print()
console.log(listaEnlazada.contains(3))


