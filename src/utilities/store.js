export function multiply(num1, num2) {
    return num1 * num2;
}
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

//reduced
const numbers = [34, 45, 6, 7, 8];
let sum = 0;
for (const num of numbers) {
    sum = sum + num;
}
const reducer = (previous, current) => previous + current;
numbers.reduce(reducer, 0)

const cosmetics = [
    { id: 1, name: 'alta', price: '1200' },
    { id: 2, name: 'nelposlsh', price: '10' },
    { id: 3, name: 'alta', price: '100' },
    { id: 4, name: 'alta', price: '200' },
    { id: 5, name: 'lipstick', price: '12' },
]
let cosmeticsReducer = (previous, current) => parseInt(previous) + parseInt(current.price);

const cosmeticsTotal = cosmetics.reduce(cosmeticsReducer, 0)
// console.log(cosmeticsTotal);



export { add, subtract }