// function sameFrequency(inp1, inp2) {
//     const str1 = inp1.toString();
//     const str2 = inp2.toString();
//     if (str1.length !== str2.length) return false;
//     let obj1 = {};
//     for (let char of str1) {
//         obj1[char] = (obj1[char] || 0) + 1;
//     }
//     for (let i = 0; i < str2.length; i++) {
//         const char2 = str2[i];
//         if (!obj1[char2]) return false;
//         else {
//             obj1[char2] -= 1;
//         }
//     }
//     return true;
// }
// console.log(sameFrequency(3589578, 5879385));



// function areThereDuplicates() {
//     let obj = {};
//     for (let val in arguments) {
//         obj[arguments[val]] = (obj[arguments[val]] || 0) + 1;
//     }

//     for (let key in obj) {
//         if (obj[key] > 1) return true;
//     }
//     return false;
// }
// console.log(areThereDuplicates('c', 'a', 'b', 'd'));
// console.log(areThereDuplicates(1, 2, 3, 2));




// function averagePair(arr, num) {
//     if (!arr.length) return false;
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let avg = (arr[left] + arr[right]) / 2;
//         if (avg < num) left++;
//         else if (avg > num) right--
//         if (avg === num) return true;
//     }
//     return false;
// }

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))// true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))// false
// console.log(averagePair([], 4)) // false



// function isSubsequence(str1, str2) {
//     let i = 0;
//     let j = 0;
//     if (!str1) return true;
//     while(j < str2.length) {
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;
// }

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); //false




// function maxSubarraySum(arr, num) {
//     let tempSum = 0;
//     if (arr.length < num) return null;
//     for (let i = 0; i < num; i++) {
//         tempSum += arr[i];
//     }
//     let maxSum = tempSum;
//     for (let j = num; j < arr.length; j++) {
//         tempSum = tempSum - arr[j - num] + arr[j];
//         if (tempSum > maxSum) maxSum = tempSum;
//     }
//     return maxSum;
// }
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
// console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
// console.log(maxSubarraySum([2, 3], 3)); //null



// function minSubArrayLen(arr, num) {
//     let total = 0;
//     let start = 0;
//     let end = 0;
//     let minLen = Infinity;
//     while(start < arr.length) {
//         if (total < num && end < arr.length) {
//             total += arr[end];
//             end++;
//         } else if (total >= num) {
//             minLen = Math.min(minLen, end - start);
//             total -= arr[start];
//             start++;
//         } else break;
//     }
//     return minLen === Infinity ? 0 : minLen;
// }

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray

/* 
    s = 0
        e = 0
            total = 2
        e = 1
            total = 5
        e = 2
            total = 6
        e = 3
            total = 8
        e = 4
            minLen = 4
            total = 6
    s = 1
        e = 4
            total = 10
        e = 5
            minLen = 4
            total = 7
    s = 2
        
 */




function findLongestSubstring(str) {
    let start = 0;
    let end = 0;
    while (start < str.length) {
        if (str[start] === str[end]) {

        }
        else {

        }
    }
}

console.log(findLongestSubstring('thisisawesome')) // 6