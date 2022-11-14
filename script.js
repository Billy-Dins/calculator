let display = document.querySelector('#screen');
let arithmeticSelection = document.querySelectorAll('.arithmetic');
let numberSelection = document.querySelectorAll('.number');
let clearSelection = document.querySelector('#clearBtn');
let deleteLast = document.querySelector('.delete')
let equals = document.querySelector('#equalsBtn');

var num1 = 0
var num2 = 0
var num3 = 0
var arithmetic = ''
display.innerHTML = ''

deleteLast.addEventListener('click', () => {
    let newArray = display.innerHTML
    .split('')
    .slice(0, -1)
    .join('')
    display.innerHTML = newArray
})

clearSelection.addEventListener('click', () => {
    display.innerHTML = ''
})
numberSelection.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.innerHTML.includes('.') && btn.innerHTML === '.'){
            return;
        }; display.innerHTML += `${btn.innerHTML}`
    })
})

arithmeticSelection.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.innerHTML == 0) {
            display.innerHTML = ''
            return;
        }
        display.innerHTML += `${btn.innerHTML}`
    })
})

equals.addEventListener('click', () => {
    let evaluate = eval(display.innerHTML)
    display.innerHTML = evaluate
})






/* clearSelection.addEventListener('click', () => {
    num1 = 0
    arithmetic = ''
    display.innerHTML = ''
})

deleteLast.addEventListener('click', () => {
    let displayArray = display.innerHTML.split('').slice(0, -1).join('');
    display.innerHTML = displayArray
})

numberSelection.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.innerHTML.includes('.') && btn.innerHTML === '.'){
            return;
        };
        if (num1 === 0) {
            display.innerHTML += btn.innerText
            num1 = display.innerHTML
        } else if (num1 !== 0) {
            display.innerHTML += btn.innerHTML
            num2 = display.innerHTML
        }
    });
});

arithmeticSelection.forEach(btn =>{
    btn.addEventListener('click', () => {
        arithmetic = btn.innerHTML;
        display.innerHTML = ''
        if (num2 !== 0) {
            equalsFunction();
        }
        console.log(`arithmetic is ${arithmetic}`)
    });
});

equals.addEventListener('click', () => {
    equalsFunction()
});

function equalsFunction() {
    num2 = Number(display.innerHTML);
    if (arithmetic === 'x') {
        display.innerHTML = (num1 * num2);
        num3 = (num1 * num2);
    } else if (arithmetic === '+') {
        num3 = num1 + num2;
        display.innerHTML = num3;
        console.log(`equals num1: ${num1}`)
        console.log(`equals num2: ${num2}`)
        console.log(`equals num3: ${num3}`)
    } else if (arithmetic === '-') {
        num3 = num1 - num2;
        display.innerHTML = num3;
        console.log(`equals num1: ${num1}`)
        console.log(`equals num2: ${num2}`)
        console.log(`equals num3: ${num3}`)
    } else if (arithmetic === '/') {
        num3 = num1 / num2;
        display.innerHTML = num3;
        console.log(`equals num1: ${num1}`)
        console.log(`equals num2: ${num2}`)
        console.log(`equals num3: ${num3}`)
    } else if (arithmetic === '%') {
        num3 = num1 % num2;
        display.innerHTML = num3;
        console.log(`equals num1: ${num1}`)
        console.log(`equals num2: ${num2}`)
        console.log(`equals num3: ${num3}`)
    };
}; */
