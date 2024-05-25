// MULTIPLE POINTERS PATTERN

// Find the first pair having sum zero in a sorted array

function zeroSum(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else {
            if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return [];
}

// console.log(zeroSum([-4,-3,0,1,2,3,4,10]));

// Find all the pairs having sum zero in a sorted array
function zeroAllSum(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = [];
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            result.push([arr[left], arr[right]]);
            left++;
            right--;
            // Check for duplicates and move pointers accordingly
            if (arr[left] === arr[left - 1]) left++;
            if (arr[right] === arr[right + 1]) right--;
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return result;
}

console.log(zeroAllSum([-4, -3, -2, -2, 0, 1, 2, 2, 3, 4, 10]));