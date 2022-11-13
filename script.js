let display = document.querySelector('#screen');
let arithmeticSelection = document.querySelectorAll('.arithmetic');
let numberSelection = document.querySelectorAll('.number');
let clearSelection = document.querySelector('#clearBtn');
let equals = document.querySelector('#equalsBtn');

var num1 = 0
var num2 = 0
var arithmetic = ''

clearSelection.addEventListener('click', () => {
    num1 = 0
    arithmetic = ''
    display.innerHTML = ''
    console.log(num1)
    console.log(arithmetic)
})

numberSelection.forEach(btn => {
    btn.addEventListener('click', () => {
        display.innerHTML += btn.textContent;
    });
})

arithmeticSelection.forEach(btn =>{
    btn.addEventListener('click', () => {
        arithmetic = btn.innerHTML
        if (num1 == 0) {
            num1 = display.innerHTML
            display.innerHTML = ''
            console.log(arithmetic);
            console.log(num1);
        } else {
            console.log(arithmetic);
            console.log(num1);
            return;
        }
    });
});

equals.addEventListener('click', () => {
    if (arithmetic === 'x') {
        console.log('multiplication')
        display.innerHTML = (num1 * display.innerHTML);
    } else if (arithmetic === '+') {
        console.log('addition')
        display.innerHTML = (num1 + display.innerHTML);
    } else if (arithmetic === '-') {
        console.log('subtraction')
        display.innerHTML = (num1 - display.innerHTML);
    } else if (arithmetic === '/') {
        console.log('divison')
        display.innerHTML = (num1 / display.innerHTML);
    }
});
