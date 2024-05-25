// Given an integer array nums of unique elements, return all possible subsets (the power set)
// Soultion set must not contain duplicate subsets

// Input: [1,2,3] --->> Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
// Input: [0] --->> Output: [[], [0]]


function subsets(nums) {
    let result = [];
    let temp = [];

    function recursiveSet(nums, i) {
        if (i === nums.length) {
            return result.push([...temp]);
        }
        temp.push(nums[i]);
        console.log("I from 18",i);
        recursiveSet(nums, i+1);
        temp.pop(nums[i]);
        console.log("I from 20",i);
        recursiveSet(nums, i+1);
    }

    recursiveSet(nums, 0);
    return result;
}

console.log(subsets([1,2,3]));