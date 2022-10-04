// ES6
// to complete
//
/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Queue implementation (array-based)
 *
 * add
 *    top
 * 
 * methods
 *    isFull()
 *    isEmpty()
 *
 */

class Queue {

  constructor() {
    this.queue = []
    this.top = 5
  }
  enqueue(element) {
    if (this.isFull())
      return 'full queue'
    else {
      this.queue.push(element)
      return element + ' se ingreso a la cola'
    }

  }
  dequeue() {
    if (this.isEmpty())
      return 'empty stack'
    else
      return this.queue.shift(), 'se desencolo '
  }

  peek() {
    return this.queue[0]
  }

  front() {
    return this.queue[0]
  }

  back() {
    return this.queue[this.queue.length - 1]
  }

  size() {
    return this.queue.length
  }

  print() {
    console.log(this.queue)
  }

  isEmpty() {
    return this.queue.length === 0
  }
  isFull() {
    if (this.queue.length === this.top)
      return true
    else
      return false
  }

  clear() {
    this.queue = []
  }

}

let queue = new Queue()

console.log(queue.isEmpty());
console.log(queue.enqueue('Azul'));
console.log(queue.enqueue('Esmeralda'));
console.log(queue.enqueue('Verde'));
console.log(queue.enqueue('Amarillo'));
console.log(queue.enqueue('Rojo'));
console.log(queue.enqueue('rosa'));
queue.print();
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();
console.log(queue.size());
console.log(queue.front());
console.log(queue.back());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
