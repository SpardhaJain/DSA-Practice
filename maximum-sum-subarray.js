// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4] => Output: 6, subarray [4,-1,2,1]
// Input: nums = [1] => Output: 1, subarray [1]
// Input: nums = [5,4,-1,7,8] => Output: 23, subarray [5,4,-1,7,8]

// const arr = [-2,1,-3,4,-1,2,1,-5,4];
const arr = [5,4,-1,7,8];

function maximumSum(nums) {
    let currentSum = 0;
    let maxSum = nums[0];
    if (nums.length === 1) return nums[0];
    for(let i = 0; i < nums.length; i++) {
        currentSum += nums[i] // -2, 1, -2, 4, 3, 5, 6, 1, 5
        if (currentSum > maxSum) {
            maxSum = currentSum; // 1, 4, 5, 6
        }
        if (currentSum < 0) {
            currentSum = 0; // 0, 0
        }
    }
    return maxSum;
}

// Time Complexity = O(n)
// Space Complexity = O(1)
console.log(maximumSum(arr));