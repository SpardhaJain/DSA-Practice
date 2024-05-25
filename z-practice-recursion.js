// power(2, 0) // 1
// console.log(power(3, 2)) // 4
// console.log(power(2, 4)) // 16

// function power(num, pow) {
//     if (pow === 0) return 1;
//     return num * power(num, pow - 1);
// }




// function productOfArray(arr) {
//     if (!arr.length) return null;
//     if (arr.length === 1) return arr[0];
//     return arr[0] * productOfArray(arr.slice(1));
// }
// console.log(productOfArray([1, 2, 3]))// 6
// console.log(productOfArray([1, 2, 3, 10])) // 60
// console.log(productOfArray([]));




// function recursiveRange(num) {
//     if (!num) return 0;
//     return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 




function fib(num) {
    if (num <= 1) return num;
    return fib(num - 1) + fib(num - 2);
}
// console.log(fib(4)) // 3
// console.log(fib(10)) // 55
console.log(fib(28)) // 317811
