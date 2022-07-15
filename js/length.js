const length = (str) => {
    let index = 0;
    while(str[index] !== undefined) {
        index++;
    }
    return index;
}

console.log(length("ss"));