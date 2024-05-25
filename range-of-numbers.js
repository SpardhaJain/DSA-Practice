// Create an array with range of numbers
// Input: start = 1, end = 5; Output: [1,2,3,4,5]

const arr = [];
function rangeNumber(start, end) {
    if (end === arr[arr.length - 1]) return arr;
    arr.push(start); // 1
    return rangeNumber(start+1, end); // (2,5)
}

// console.log(rangeNumber(6, 10));

function rangeNumberAlternate(start, end) {
    if (end < start) return [];
    const numbers = rangeNumberAlternate(start, end - 1);
    numbers.push(end);
    return numbers;
};

console.log(rangeNumberAlternate(6, 10));