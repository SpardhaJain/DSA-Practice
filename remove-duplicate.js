// Remove duplicates from sorted array
// Return the length of non duplicate elements
// input: [1,1,2] => Output: 2, [1,2,_,_]
// input: [0,0,1,1,1,2,2,3,3,4] => Output: 5, [0,1,2,3,4,_,_]

const arr = [0,0,1,1,1,2,2,3,3,4];
// const arr = [1,1,1,2];

function removeDuplicate(s) {
    nums = s.split('');
    // const uniqueArr = Array.from(new Set(nums)); // O(n) + O(n) = O(2n)
    let uniqueArr = [];
    uniqueArr.push(...new Set(nums));
    return uniqueArr.join('');
}

console.log(removeDuplicate('GeEksForgeEK'));

// Time Complexity = O(n)
// Space Complexity = O(n)

function removeDuplicatesUsingSplice(nums) {
    for(i = 0; i < nums.length - 1; i++) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);
            i--;
        }
    }
    return i+1;
}

// Time Complexity = O(n)
// Space Complexity = O(1)
// console.log(removeDuplicatesUsingSplice(arr));

function removeDuplicateBasic(nums) {
    if(nums.length === 1) return 1;
    let j = 0;
    for (i=1; i<nums.length; i++) { // i=1; 2
        if(nums[i] !== nums[j]) {
            j++; // j=1; 2;
            nums[j] = nums[i]; // nums[1] = 1; nums[2]=2; nums[3]=3; nums[4] = 4
        }
    }
    return j+1;
}

// Time Complexity = O(n)
// Space Complexity = O(1)
// console.log(removeDuplicateBasic(arr));