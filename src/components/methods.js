const emptyObj = {};

emptyObj['a'] = 1;
emptyObj.a = 3;

console.log(emptyObj)

if (emptyObj['b']) {
    emptyObj['a'] += 1;
}
else {
    emptyObj['b'] = 1;
}
console.log(emptyObj)

// delete emptyObj['a']
// console.log(emptyObj);


// let number = 5;

let calculation = (number) => {
    let result = 0;

    for (let i = 1; i <= number; i++) {
        // console.log(i);
        if (i % 2 == 0) {
            result = result + i
        }
        else {
            result = result + (-i)
        }
    }
    // console.log(result)
    return result;
}

console.log(calculation(4))
console.log(calculation(5))