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

