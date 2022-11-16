let display = document.querySelector('#screen');
let arithmeticSelection = document.querySelectorAll('.arithmetic');
let numberSelection = document.querySelectorAll('.number');
let clearSelection = document.querySelector('#clearBtn');
let deleteLast = document.querySelector('#delete')
let equals = document.querySelector('#equalsBtn');
let button = document.querySelectorAll('button');

var screen = 0
var num1 = 0
var num2 = 0
var operator = ''

//I am so sorry if you are reading this... This code is very messy.

deleteLast.addEventListener('click', () => {
    let displayArray = display.innerHTML.split('').slice(0, -1).join('');
    display.innerHTML = displayArray
});
clearSelection.addEventListener('click', () => {
    arithmeticSelection.forEach(btn => {
        btn.removeAttribute('style')
        });
    num1 = '';
    num2 = 0;
    operator = '';
    display.textContent = 0;
});
equals.addEventListener('click', () => {
    if (num2 !== 0) {
    num2 = solve(num1,num2)
    num1 = 0
    }else if (num2 === 0) {
        num2 = display.textContent
    }
});

window.addEventListener('keydown', (e) => {
    keystroke = Number(e.key)
    if (keystroke >= 0) {
        if (display.textContent.length < 18) {
            if (display.textContent.includes('.') && btn.textContent === '.'){
                return
            }
            if (num1 !== 0 && operator !=='' && num2 === 0) {
                display.textContent = '';
                num2 += keystroke;
                display.textContent = num2
            } else if (num1 === 0 && num2 !== 0){
                display.textContent = ''
                num1 += keystroke
                display.textContent = num1
            } else if (num1 !== 0 && num2 !== 0) {
                display.textContent = ''
                num1 += keystroke;
                display.textContent = num1
            } else if (num1 === 0 && num2 === 0) {
                num1 = ''
                display.textContent = ''
                num1 += keystroke;
                display.textContent = num1
            } else if (num1 === 0 && num2 === 0 && operator== '-'){
            } else {
                num1 += keystroke;
                display.textContent = num1;
            };
        } else {
            return;
        };
    } else {
        console.log('error at keystroke')
        return;
    };
});

numberSelection.forEach(btn => {
    btn.addEventListener('click', () => {
        button.forEach(btns => {
            btns.removeAttribute('style', 'background-color')
        });
        if (display.textContent.length < 18) {
            if (display.textContent.includes('.') && btn.textContent === '.'){
                return
            }
            if (num1 !== 0 && operator !=='' && num2 === 0) {
                display.textContent = '';
                num2 = btn.textContent;
                display.textContent = num2
            } else if (num1 === 0 && num2 !== 0){
                display.textContent = ''
                num1 = btn.textContent
                display.textContent = num1
            } else if (num1 !== 0 && num2 !== 0) {
                display.textContent = ''
                num1 += btn.textContent;
                display.textContent = num1
            } else if (num1 === 0 && num2 === 0) {
                display.textContent = ''
                num1 = btn.textContent;
                display.textContent = num1
            } else if (num1 === 0 && num2 === 0 && operator== '-'){
            } else {
                num1 += btn.textContent;
                display.textContent = num1;
            };
        } else {
            return;
        };
    });
});

arithmeticSelection.forEach(btn => {
    btn.addEventListener('click', () => {
        arithmeticSelection.forEach(btns => {
            if(btns.getAttribute('style') == 'background-color:rgba(10,114,187,1)') {
                btns.removeAttribute('style')
            };
        });
        changeButton(btn)
        if (btn.textContent == '%') {
            operator = btn.textContent
            num2 = display.textContent;
            display.textContent = ''
            btn.removeAttribute('style')
            solve(num1, num2);
        } else if (num2 === 0 && num1 !== 0) {
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
    });
});

function changeButton(btn) {
    if (btn.getAttribute('style') === 'background-color:rgba(10,114,187,1)'){
        btn.setAttribute('style', 'background-color: #536ea5')
    } else {
        btn.setAttribute('style', 'background-color:rgba(10,114,187,1)')
    };
};

function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator == '/') {
        if (num1 == 0) {
            display.textContent = "you're an idiot"
        } else
        display.textContent = Math.round((num2 / num1)*10000)/10000;
        return Math.round((num2 / num1)*10000)/10000;
    } else if (operator == '+') {
        display.textContent = Math.round((num1 + num2)*10000)/10000;
        return Math.round((num1 + num2)*10000)/10000; 
    } else if (operator == '-') {
        display.textContent = Math.round((num2 - num1)*10000)/10000;
        return Math.round((num2 - num1)*10000)/10000;
    } else if (operator == '%') {
        display.textContent = num2/100
        return num2/100
    } else if (operator == 'x' || '*') {
        display.textContent = Math.round((num1 * num2)*10000)/10000; 
        return Math.round((num1 * num2)*10000)/10000;
    };
};