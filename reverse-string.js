// Reverse a string
// Input: "Hello" Output: "olleH"

function reverseString(str) {
    if (str.length === 1) return str;
    return reverseString(str.substr(1)) + str.charAt(0);
}

function reversePosition (str) {
    let s = str.split(' ');
    for (let i = 0; i < s.length; i++) {
        
    }
}

// console.log(reverseString('hello misters'));
console.log(reversePosition('hello misters'));