/**
 *
 * your solution here
 *
 */
console.time("Tiempo que tardo");
class Queue {
    constructor() {
      this.queue =[]
    }
    enqueue(element) {
      this.queue.push(element)
      return this.queue
    }
  
    dequeue(){
      return this.queue.shift()
    }
    front(){
      return this.queue[0]
    }
  
    back(){
      return this.queue[this.queue.length - 1]
    }
  
    size(){
      return this.queue.length
    }
  
    print(){
      return this.queue
    }
  
    isEmpty(){
      return this.queue.length === 0
    }
  
  }
  
  let myQueue = new Queue();
  let myQueue2 = new Queue()
  let numbers=1000
  let steps=0;
    for (let j = 0; j < numbers; j++) {
        let number = Math.floor(Math.random() * numbers);
        let frontQueue1;
        let frontQueue2;
        let auxiliar=0;
      
     
    while(auxiliar == 0){
            if(myQueue.empty == true){
              myQueue.enqueue(number);
            steps++;
            }
             else{
               if(number >= myQueue.front()){
                frontQueue1=myQueue.front()
                 myQueue2.enqueue(frontQueue1);
                 steps++
                 myQueue.dequeue();
               steps++;
               }
               
               else{
                 myQueue2.enqueue(number);
                 steps++
                 if(myQueue.size() > 0){
                 while(myQueue.size() > 0){
                    frontQueue1=myQueue.front()
                   myQueue2.enqueue(frontQueue1);
                   steps++
                   myQueue.dequeue();
                 steps++;
              }
                 steps++
            } 
                 auxiliar++;
               }
             }
           }
         
             if(myQueue2.size() > 0){
             while(myQueue2.size() > 0){
                frontQueue2=myQueue2.front()
               myQueue.enqueue(frontQueue2);
               steps++
               myQueue2.dequeue();
             steps++;
              }
             steps++;
            } 
  
      }
      console.log(myQueue.print())
      console.log(`Se llevó a cabo en ${steps} pasos`);
      console.timeEnd("Tiempo que tardo")