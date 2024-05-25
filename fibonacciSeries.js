// Fibonacci Series
// 0, 1, 1, 2, 3, 5, 8, ....
// 0, 1, ((x-2) + (x-1))

function fibonacciSeries(x) {
    const arr = [0, 1];
    for (let i=2; i<=x; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}

// console.log(fibonacciSeries(6));


// RECURSION

function fib(n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
};
// console.log(fib(6));
// const arr = [];

// function fibArr(n) {
//     if (n <= 1) return n;
//      // 
//     return arr.push(fibArr(n-1) + fibArr(n-2));
// }

// console.log(fibArr(2));