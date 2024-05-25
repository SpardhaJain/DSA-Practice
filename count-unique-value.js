function countUnique(arr) {
    let obj = {};
    for (let val of arr) {  // O(n)
        obj[val] = (obj[val] || 0) + 1;
    }
    return Object.keys(obj).length;  // O(n)
}

// Time complexity = O(2n)

// console.log(countUnique([1,1,1,1,1,2])); //2
// console.log(countUnique([1,2,3,4,4,4,7,7,8,12,12,13])); //8


// Approach 2 - Multiple Pointers

function countUnique2(arr) {
    if (!arr.length) return 0;
    let left = 0;
    for (let right = 1; right < arr.length; right++) {
        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
    }
    return left + 1;
    // return arr.slice(0,left+1);
}

// Time complexity = O(2n)

// console.log(countUnique2([])); //0
// console.log(countUnique2([1,1,1,1,1,2])); //2
console.log(countUnique2([1, 2, 3, 4, 4, 4, 7, 7, 8, 12, 12, 13])); //8
// console.log(countUnique2([-2, -1, -1, 0, 1])); //4
// console.log(countUnique2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7