const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const decimal = document.querySelector(".decimal")
const calculatorScreen = document.querySelector(".calculator-screen")
const equalSign = document.querySelector(".equal-sign")
const clearBtn = document.querySelector(".all-clear")

let prevNumber = ''
let currentNumber = '0'
let calculationOperator = ''

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    } else{
        currentNumber += number
    }
}

const inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return
    }
    currentNumber += dot
}

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        default:
            return
    }
    // Tambahan Code
    // const history = {

    // }
    // Akhir Tambahan Code
    currentNumber = result
    calculationOperator = ''
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value)
        updateScreen(currentNumber)
    })
})

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        inputOperator(e.target.value)
    })
})

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

