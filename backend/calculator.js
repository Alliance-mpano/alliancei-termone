
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a/b;
}
const logarithm = (a, b) => {
    return a*Math.log10(b);
}
const logE = (a, b) => {
    return a*Math.log(b);
}
const power = (a, b) => {
    return Math.pow(a,b);
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    logarithm,
    logE,
    power
}