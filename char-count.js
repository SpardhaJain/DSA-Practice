function charCount(inputStr) {
    // const str = inputStr.toLowerCase().replace(/\s/g, '');
    const str = inputStr.toLowerCase();
    let obj = {};
    for (i = 0; i < str.length; i++) {
        const char = str[i];
        if (/[a-z0-9]/.test(char)) {
            // obj[char] = obj[char] ? ++obj[char] : 1; 
            obj[char] = ++obj[char] || 1;
        }
    };
    return obj;
};
// console.log(charCount("Hello"));
// console.log(charCount("Your, hour PI'N is 12_32"));


// Simplifying using for OF loop
function charOfCount(inputStr) {
    const str = inputStr.toLowerCase();
    let obj = {};
    for (let char of str) {
        if (/^[a-z0-9]+$/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    };
    return obj;
}
// console.log(charOfCount("Hello"));
// console.log(charOfCount("Your, hour PI'N is 12_32"));



function practice(str) {
    s = str.toLowerCase();
    let obj = {};
    for (i = 0; i < s.length; i++) {
        if (/^[a-z0-9]+$/.test(s[i])) obj[s[i]] = (obj[s[i]] || 0) + 1;
    }
    return obj;
}

console.log(practice("Your, hour PI'N is 12_32"));