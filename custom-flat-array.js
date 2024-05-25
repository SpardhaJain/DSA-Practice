// How to flatten an array
// [
//  [1,2],
//  [3,4,[7,8]]
// ]


const arr = [
    1,2,
    [3,4],
    [5,6,[7,8]]
]


// 1st Approach:
// console.log(arr.flat(2));

// 2nd Approach:
// console.log([].concat(...arr));

// 3rd approach:
const flattenArr = (arr, depth = 1) => {
    let result = [];
    arr.forEach((ar) => {
        if (Array.isArray(ar) && depth > 0) {
            result.push(...flattenArr(ar, depth -1));
        } else {
            result.push(ar);
        }
    });
    return result;
}

console.log(flattenArr(arr, 2));