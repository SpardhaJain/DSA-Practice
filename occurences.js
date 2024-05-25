// No. Of occurrences of a name in an array of object:

const arr = [
    {
        name: "John",
        id: '1'
    },
    {
        name: "John",
        id: '2'
    },
    {
        name: "XYZ",
        id: '3'
    },
];

const occurences = (arr) => {
    let obj = {};
    for(let i = 0; i < arr.length; i++) { // O(n)
        const name = arr[i].name;
        obj[name] = obj[name] ? (obj[name] + 1) : 1;
    }
    return obj;
}

console.log(occurences(arr));

function occurencesRecursion(arr) {
    if (arr.length === 0) return -1;
    
}