const { add, subtract, multiply, divide,logarithm,
    logE,
    power } = require('../calculator');

export default function doMath(operand1, operand2, operator){
    switch(operator){
        case "*":   return multiply(operand1,operand2);
        case "+": return add(operand1,operand2);
        case "-": return subtract(operand1, operand2);
        case "/": return divide(operand1, operand2);
        case "log": return logarithm(operand1, operand2);
        case "ln": return logE(operand1, operand2);
        case "**": return power(operand1, operand2);
    }
}