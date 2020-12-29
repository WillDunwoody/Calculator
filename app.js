
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator")
const clearButton = document.querySelector(".clear")
const equals = document.querySelector(".equals")

const inputText = document.querySelector(".inputCalc")
const outputText = document.querySelector(".outputCalc")

let inputOperand = ''
let outputCalculation = ''
let calculation = ''

inputText.textContent = 0
outputText.textContent = ''

function calculator() {

    let equalsButton = false
    let finalSum = ''

    function appendOperand(num) {
        inputOperand = inputOperand + num
    }

    function inputDisplay() {
        if (inputOperand === '.') {
            inputOperand = '0' + inputOperand
        }
        inputText.textContent = inputOperand
    }

    function outputDisplay(operator) {
        if (inputOperand === '') return 
        sum()
        calculation = operator
        outputCalculation = inputOperand
        inputOperand = ''
        inputText.textContent = 0
        outputText.textContent = outputCalculation + ' ' + calculation
    }

    function sum() {
        let input = parseFloat(inputOperand)
        let output = parseFloat(outputCalculation)
        switch (calculation) {
            case '+':
                finalSum = output + input
                break
            case '-':
                finalSum = output - input
                break
            case 'x':
                finalSum = output * input
                break
            case '÷':
                finalSum = output / input
                break
            default:
                return       
        }
        inputOperand = finalSum
        calculation = ''
        outputCalculation = ''
        outputText.textContent = ''
    }
   
    operand.forEach((button) => {
        button.addEventListener("click", function(){
            if (button.textContent === '0' && inputOperand === '') return
            if (button.textContent === '.' && inputOperand.includes('.')) return
            if (equalsButton === true) {
                clear()
                equalsButton = false
            }
            appendOperand(button.textContent)
            inputDisplay()
        })
    })

    operator.forEach((button) => {
        button.addEventListener("click", function(){
            if (equalsButton === true) {
                equalsButton = false
            }
            outputDisplay(button.textContent)
        })
    })

    equals.addEventListener("click", function() {
        sum()
        inputDisplay()
        equalsButton = true
    });
 
}

clearButton.addEventListener("click", function() {
    clear()
});

function clear(){
    inputOperand = ''
    outputCalculation = ''
    calculation = ''

    inputText.textContent = 0
    outputText.textContent = ''
}

calculator();