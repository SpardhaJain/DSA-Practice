// Most asked RECURSION question
// factorial of n = 5
// factorial = 5 * 4 * 3 * 2 * 1 = ;

function factorial(n) {
    if (n === 1) return 1;
    // return `${n} * ${factorial(n-1)}`;
    return n * factorial(n-1);
}

// 5*fac(4) => 5*4*3*2*1
// 4*fac(3) => 4*3*2*1
// 3*fac(2) => 3*2*1
// 2*fac(1) => 2*1
// 1

console.log(factorial(5));