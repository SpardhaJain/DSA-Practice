// ------------------------- Two Sum --------------------------
// input = [2,7,11,10], target = 9
// Sum of two integers in the above array should be equal to the target
// output = [0,1] => index of those two integers of input

function twwoSum(inp, tar) {
    
    let left = 0;
    let right = 1;
    let out = [];
    let sum = tar;
    while (left < right) {
        sum = inp[left] + inp[right];
        if (sum !== tar) {

        }
        return out;
    }
}



// const twoSum = (input, target) => {
//     for(let i=0; i<input.length; i++) {
//         for(let j=i+1; j<input.length; j++) {
//             if (input[i] + input[j] === target) return [i,j];
//         }
//     }
// }



// Approach 2:

// const twoSum = function (nums, target) {
//     var obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         var n = nums[i];
//         if (obj[target-n] >= 0) {
//             return [obj[target-n], i];
//         } else {
//             obj[n] = i;
//         }
//         console.log(obj);
//     }
// };





// ------------------------ Two Sum ------------------------------
// Output: [[-2,12], [3,7], [4,6]] 


// const twoSum = function (nums, target) {
//     const arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         const n = nums[i];
//         if ((target-n > n) && (nums[i] !== (target - n)) && nums.includes(target - n)) {
//             arr.push([nums[i], target - n]);
//         }
//     }
//     return arr;
// }

function twoSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array to use two-pointer approach //It will make the time complexity as O(nlogn)
    let result = []; // without sorting - O(n) time complexity
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            result.push([nums[left], nums[right]]);
            left++;
            right--;
            // Check for duplicates and move pointers accordingly
            while (left < right && nums[left] === nums[left - 1]) {
                left++;
            }
            while (left < right && nums[right] === nums[right + 1]) {
                right--;
            }
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return result;
}

// twoSum([2,11,7,15], 9);
// console.log(twoSum([2,7,11,10], 13));
console.log(twoSum([-2,2,3,4,5,6,7,11,12], 10));