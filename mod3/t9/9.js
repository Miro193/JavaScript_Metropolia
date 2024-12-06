'use strict';

const str1 = document.querySelector('#calculation');
const p = document.getElementById('result');
const btn = document.querySelector('#start');

const operatorMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

function calculator(num1, operator, num2) {
    const operaatio = operatorMap[operator];
    if (!operaatio) {
        throw new Error('Default operator');
    }
    return operaatio(num1, num2);
}

btn.addEventListener('click', () => {
    const str2 = str1.value.split('');
    const num1 = parseInt(str2[0]);
    const num2 = parseInt(str2[2]);
    const operation = str2[1];
    const calc = calculator(num1, operation, num2);
    console.log(calc);
    p.innerHTML = calc;
});

