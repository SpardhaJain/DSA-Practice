//SLIDING WINDOW PATTERN

// Get the maximum subarray sum taking input2 number of consecutive elements 

//Brute-force approach
function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) max = temp;
    }
    return max;
}

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// console.log(maxSubarraySum([], 3));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubarraySum([4, 2, 1, 6], 1));


//Approach 2
function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    let tempSum = 0;
    let maxSum = 0;
    for (i = 0; i < num; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for (i = num; i < arr.length; i++) {
        tempSum += arr[i] - arr[i - num];
        if(maxSum < tempSum) maxSum = tempSum;
    }
    return maxSum;
}

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubarraySum([], 3));
console.log(maxSubarraySum([4, 2, 1, 6], 1));