function isRearranged(str1, str2) {
    if (str1.length !== str2.length) return false;
    if (!str1.length && !str2.length) return true;
    let obj1 = {};
    let obj2 = {};
    let result = false;
    for (let char1 of str1) {
        obj1[char1] = (obj1[char1] || 0) + 1;
    }
    for (let char2 of str2) {
        obj2[char2] = ++obj2[char2] || 1;
    }
    for (let key in obj1) {
        result = false;
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) result = true;
    }
    return result;
}
console.log(isRearranged('texttwisttime', 'timetwisttext'));
// console.log(isRearranged('', ''));
// console.log(isRearranged('qwerty', 'qeywrt'));



/// Approach 2

function isRearranged(str1, str2) {
    if (str1.length !== str2.length) return false;
    if (!str1.length && !str2.length) return true;
    let obj1 = {};
    for (let char1 of str1) {
        obj1[char1] = (obj1[char1] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        const char2 = str2[i];
        if (!obj1[char2]) return false;
        else {
            obj1[char2] -= 1;
        }
    }
    return true;
}