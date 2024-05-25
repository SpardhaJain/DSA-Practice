const arr = [3, 2, 1, 4, 5, 9];

function sort(nums) {
    for (i = 0; i < nums.length; i++) {
        for (j = i; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                let max = nums[j];
                nums[j] = nums[i];
                nums[i] = max;
            }
        }
    }
    return nums;
}

// console.log(sort(arr));

function sortOptimized(nums, i = 0) {
    if (i === nums.length) return nums;
    if (nums[i-1] > nums[i]) {
        let max = nums[i-1];
        nums[i-1] = nums[i];
        nums[i] = max;
    }
    return sortOptimized(nums, i+1);
}

console.log(sortOptimized(arr));