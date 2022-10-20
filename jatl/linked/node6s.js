export default
  //
  // 
  //
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
  
  insertAfter(data) {
  if(this.head === null){
        return null
      }
  
      let current = this.head
      while(current.data !== data){
        current = current.next
      }
  
     return current.next

  }


    }
  

let linkedList = new LinkedList()

linkedList.add('Azul')
linkedList.add('Esmeralda')
linkedList.add('Verde')
linkedList.add('Amarillo')
linkedList.print()
console.log(linkedList.insertAfter('Azul') )

