const length = (str) => {
    let index = 0;
    while(str[index] !== undefined) {
        index++;
    }
    return index;
}

const fill = (str, width, fillWith) => {
    let result = "";
    for(let i = 0; i < (width - length(str)); i++) result += fillWith;
    return result + str;
}

console.log(fill("1", 10, "0"));