// Palindrome --> 
// 121 : true
// 12 : false

function isPalindrome(value) {
    return value === +value.toString().split('').reverse().join('');
};

// isPalindrome(121);

function isPalindromeAlternate(value) {
    if(value < 0) return false;
    let reverse = 0;
    let copy = value;
    while (copy > 0) {
        digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = ~~(copy/10);
    }
    return reverse === value ? true : false;
}

// console.log(isPalindromeAlternate(121));


const isPalindromeCommon = (value) => {
    let str = value.toString();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

// console.log(isPalindromeCommon('racecar'));
console.log(isPalindromeCommon(1231));
