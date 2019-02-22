function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
    // Returns the previous two answers and adds them together
}

console.log(fib(0));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));