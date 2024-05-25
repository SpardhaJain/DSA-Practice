// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.


const lastWordLength = (input) => {
    const val = input.trim().split(' ');
    return val[(val.length) - 1].split('').length;
}
console.log(lastWordLength("   Hello World     "));