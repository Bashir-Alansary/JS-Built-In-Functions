const repeat = (str, count = 2, space = false) => {
    var result = "";
    for(let i = 1; i <= count; i++)
         if(space) {
            result += str + " ";
         } else {
            result += str;
         }
         return result;
}

console.log(repeat("she", 5 , "l"));;