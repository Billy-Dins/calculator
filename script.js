let display = document.querySelector('#screen');
let arithmeticSelection = document.querySelectorAll('.arithmetic');
let numberSelection = document.querySelectorAll('.number');
let clearSelection = document.querySelector('#clearBtn');
let equals = document.querySelector('#equalsBtn');

var screen = 0
var num1 = 0
var num2 = 0
var arithmetic = ''

clearSelection.addEventListener('click', () => {
    num1 = 0
    arithmetic = ''
    display.innerHTML = ''
})

numberSelection.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.innerHTML.includes('.') && btn.innerHTML === '.'){
            return
        } screen = display.innerHTML += btn.textContent;
    });
})

arithmeticSelection.forEach(btn =>{
    btn.addEventListener('click', () => {
        arithmetic = btn.innerHTML
        if (num1 == 0) {
            num1 = Number(display.innerHTML)
            console.log(num1)
            display.innerHTML = ''
        } else {
            return;
        }
    });
});

equals.addEventListener('click', () => {
    let screen = Number(display.innerHTML);
    console.log(num1)
    if (arithmetic === 'x') {
        display.innerHTML = (num1 * screen);
    } else if (arithmetic === '+') {
        display.innerHTML = (num1 + screen);
    } else if (arithmetic === '-') {
        display.innerHTML = (num1 - screen);
    } else if (arithmetic === '/') {
        display.innerHTML = (num1 / screen);
    } else if (arithmetic === '%') {
        display.innerHTML = (num1 % screen);
    }
});
