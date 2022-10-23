/**
 *
 * your solution here
 *
 */
console.time("Tiempo que tardo");
class Stack {

    constructor() {
        this.stack = []
    }
    push(element) {
        this.stack.push(element)
        return this.stack
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    size() {
        return this.stack.length
    }
    print() {
        console.log(this.stack)
    }
    isEmpty() {
        return this.stack.length === 0
    }
    clear() {
        this.stack = []
    }
}
let stack1 = new Stack();
let stack2 = new Stack();
let steps = 0;
let numbers=1000;
for (let i = 0; i < numbers; i++) {
    let number = Math.floor(Math.random() * numbers);
    let peekStack1;
    let peekStack2;
    let auxuliar = 0;

    while (auxuliar == 0) {
        if (stack1.isEmpty == true) {
            stack1.push(number);
            steps++;
        }
        else {
            if (number <= stack1.peek()) {
                peekStack1 = stack1.peek();
                stack2.push(peekStack1);
                steps++
                stack1.pop();
                steps++;
            } else {
                stack1.push(number);
                steps++;
                auxuliar++;
            }
        }
    }
    if (stack2.size() > 0) {
        while (stack2.size() > 0) {
            peekStack2 = stack2.peek();
            stack1.push(peekStack2);
            steps++
            stack2.pop();
            steps++;
        }
        steps++;
    }
}

stack1.print();
console.log(`Se llevó a cabo en ${steps} pasos`);
console.timeEnd("Tiempo que tardo")