// anagram is anagram of nagaram
// rat is not anagram of tro

// const isAnagram = (s, t) => {
//     s = s.toUpperCase().split('').sort().join("");
//     t = t.toUpperCase().split('').sort().join("");
//     return s === t ? true : false;
// }


// 2nd Approach:

const isAnagram = (s,t) => {
    if (s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};

    for (let i=0; i<s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}


// console.log(isAnagram("anagram", "nagaram"));



const practice = (s, t) => {
    if(s.length !== t.length) return false;
    let obj1 = {}, obj2 = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[s[i]] = (obj2[s[i]] || 0) + 1;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(practice("anagram", "nagara"));