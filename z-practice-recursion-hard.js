// function reverse(str) {
//     return str.split('').reverse().join('');
// }
// function reverse(str) {
//     if(str.length <= 1) return str;
//     return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'




// function isPalindrome(str) {
//     let newStr = '';
//     function reverse(str) {
//         if (str.length <= 1) return str;
//         return reverse(str.slice(1)) + str[0];
//     }
//     newStr = reverse(str);
//     if (newStr === str) return true;
//     else return false;
// }
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[1] === str[0];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}
// console.log(isPalindrome('awesome') )// false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama') )// true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false