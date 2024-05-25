const arr = [2,3,1,10,14,34,9,32,35,35,2];
// const arr = [1];
// const arr = [10,15,10];
// const arr = [2,7,4,11,34,32];
// const arr = [10, 10];

function secondLargest(nums) {
    if (nums.length <= 1) return -1;
    const uniqueArr = Array.from(new Set(nums));
    if (uniqueArr.length > 1) {
        uniqueArr.sort((a, b) => b - a); // It will sort arr in ascending order; // Time Complexity: O(nlogn)
        return uniqueArr[1];
    } else return -1;
}

// Time Complexity: O(nlogn)
// console.log(secondLargest(arr));

function secondLargestOptimized(nums) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    if (nums.length > 1) {
        for (i = 0; i < nums.length; i++) {  // O(nums.length) == O(n) --- Time compl.
            if (nums[i] > largest) {
                secondLargest = largest; // 2, 3, 10, 14, 34
                largest = nums[i]; // 3, 10, 14, 34, 35
            }
            if (nums[i] !== largest && nums[i] > secondLargest) {
                secondLargest = nums[i]; // 32
            }
        }
    }
    return secondLargest; // Space Compl. = O(1)
}

// Time Complexity: O(n)
// Space Complexity: O(1)
console.log(secondLargestOptimized(arr));

