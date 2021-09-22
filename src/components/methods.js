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










// equation
// 4 = -1 +2 -3+4 =2
// 5= -1+2 -3+4-5 =-3
// 10 = -1+2 -3+4-5 +6-7+8-9+10

// Solution

let calculation = (number) => {
    let result = 0;

    // for (let i = 1; i <= number; i++) {
    //     // console.log(i);
    //     if (i % 2 == 0) {
    //         result = result + i
    //     }
    //     else {
    //         result = result + (-i)
    //     }
    // }
    // console.log(result)

    if (number % 2 === 0) {
        result = number / 2;
    }
    else {
        // result = Math.floor((number / 2) - number);
        result = ((number - 1) / 2) - number;

    }
    return result;
}

// console.log(calculation(4))
// console.log(calculation(5))
// console.log(calculation(6))
// console.log(calculation(10))