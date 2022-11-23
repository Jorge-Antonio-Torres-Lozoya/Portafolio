
function fibonacci(n) {

     if (n < 1) {//base case
        return
    } else {
        
      console.log(sum)   
     sum = a + b;
     a = b;
     b = sum;    
    
        
        fibonacci( n-1)//recursive call
        
    }
}   

var a = 0;
var b = 1;
var sum = 1;




 function power(r,n) {
  
    if (n == 0){
     return 1
     }
     if (n == 1) {//base case
        return r
        
    } else {
    
    return  r * power(r, n - 1)
    
    }

}


function factorial (n) {
   if (n == 0){
     return 1
     }
     if (n == 1) {//base case
        return n
    } else {
    
    return  n * factorial( n - 1)
    
    }
}
console.log('Fibonacci')
fibonacci(5)
console.log('Power')
console.log(power(2,3))
console.log('Factorial')
console.log(factorial(3))


