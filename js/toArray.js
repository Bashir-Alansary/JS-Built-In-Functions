// get length
const length = (str) => {
    let index = 0;
    while(str[index] !== undefined) {
        index++;
    }
    return index;
}

// to array fun
const toArray = (str) => {
    let arr = [];
    for(let i = 0; i < length(str); i++) arr[i] = str[i];
    return arr;
}

console.log(toArray("Ali"));