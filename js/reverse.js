// get length
const length = (str) => {
    let index = 0;
    while(str[index] !== undefined) {
        index++;
    }
    return index;
}

// reverse fun
const reverse = (str) => {
    let result = "";
    for(let i = length(str) - 1; i >= 0; i--) result += str[i];
    return result;
    
}

console.log(reverse("Ali"));
