let display = document.querySelector('#screen');
let arithmeticSelection = document.querySelectorAll('.arithmetic');
let numberSelection = document.querySelectorAll('.number');
let clearSelection = document.querySelector('#clearBtn');
let deleteLast = document.querySelector('.delete')
let equals = document.querySelector('#equalsBtn');

var screen = 0
var num1 = 0
var num2 = 0
var num3 = 0
var operator = ''


clearSelection.addEventListener('click', () => {
        num1 = 0;
        num2 = 0;
        num3 = 0;
        operator = '';
        display.textContent = 0;
    });

equals.addEventListener('click', () => {
    if (num2 !== 0) {
        console.log(num1)
        console.log(num2)
        console.log(operator)
    num2 = solve(num2,num1,operator)
    num1 = 0
    }else if (num2 === 0) {
        num2 = display.textContent
        console.log('error at equals')
    }
});


numberSelection.forEach(btn => {
    btn.addEventListener('click', () => {
        if (num1 !== 0 && operator !=='' && num2 === 0) {
            console.log('1')
            display.textContent = '';
            num2 = btn.textContent;
            display.textContent = num2
        } else if (num1 == 0 && num2 !== 0){
            console.log('2')
            display.textContent = ''
            num1 = btn.textContent
            display.textContent = num1
        } else if (num1 !== 0 && num2 !== 0) {
            console.log('3')
            display.textContent = ''
            num1 += btn.textContent;
            display.textContent = num1
        } else if (num1 === 0 && num2 === 0) {
            console.log('4')
            display.textContent += btn.textContent
            console.log(`num1 is ${num1}`);
        } else {
            console.log('5')
            num1 += btn.textContent;
            display.textContent = num1;
            console.log(`num1 is ${num1}`);
        }
    });
});


arithmeticSelection.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`operator is ${operator}`)
        if (num2 === 0 && num1 !== 0) {
            operator = btn.textContent;
            num2 = num1
            num1 = 0;
        } else if (num2 !== 0 && num1 !== 0){
            num2 = solve(num1,num2);
            num1 = 0;
            operator = btn.textContent;
        } else {
        operator = btn.textContent
        num2 = display.textContent
        num1 = 0
        }
    })
})

function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === '/') {
        display.textContent = (num1 / num2);
        return (num2 / num1);
    } else if (operator === '+') {
        display.textContent = (num1 + num2);
        return (num1 + num2); 
    } else if (operator === '-') {
        display.textContent = (num1 - num2);
        return (num2 - num1);
    } else if (operator === 'x' || '*') {
        display.textContent = (num1 * num2); 
        return (num1 * num2);
    };
};