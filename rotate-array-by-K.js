// const arr = [1,2,3,4,5,6,7]; k = 3; ----- output: [5,6,7,1,2,3,4]
// [1,2,3,4,5,6,7] --- k=3 => k=1 == [7,1,2,3,4,5,6] => k=2 == [6,7,1,2,3,4,5] => k=3 == [5,6,7,1,2,3,4]
// const arr = [-1, -100, 3, 99]; k = 2; --- output: [3,99,-1,-100]

const arr = [1,2,3,4,5,6,7];
const k = 3;

// const arr = [-1, -100, 3, 99];
// const k = 2;

function rotateArray(nums, k) {
    let size = nums.length;
    if (k === size) return nums; // O(1)
    if (k > size) k = k - size; // O(1)
    const splicedArr = nums.splice(size - k, size); // O(n)
    nums.unshift(...splicedArr); // o(n)
    return nums;
    // return [...splicedArr, ...nums];
}
// Time Complexity = O(n)
// console.log(rotateArray(arr, k));

function rotateArrayOptimized(nums, k) {
    let size = nums.length;
    if (k === size) return nums; // O(1)
    if (k > size) k = k - size; // O(1)
    reverse(nums, 0, size - 1); // O(n)
    reverse(nums, k, size - 1); // O(n)
    reverse(nums, 0, k-1); // O(n)
    return nums;
}

function reverse(arr, left, right) {
    while(left < right) {
        const temp = arr[left]; // 1
        arr[left++] = arr[right]; // 7
        arr[right--] = temp; // 1
    }
    return arr; // [7,2,3,4,5,6,1] => [7,6,3,4,5,2,1] => [7,6,5,4,3,2,1]
                // [7,6,5,1,3,2,4] => [7,6,5,1,2,3,4]
}

// Time Complexity = O(n)
// Space Complexity = O(1) --> Because we haven't created a new array.
                            // Instead we just shifted the position of elements in the original array.
console.log(rotateArrayOptimized(arr, k));