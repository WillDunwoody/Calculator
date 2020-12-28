
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator")
const clearButton = document.querySelector(".clear")
const equals = document.querySelector(".equals")

const inputText = document.querySelector(".inputCalc")
const outputText = document.querySelector(".outputCalc")

function calculator() {

    let inputOperand = '';
    let outputCalculation = '';
    let calculation = '';

    inputText.textContent = 0
    outputText.textContent = ''
  
    function appendOperand(num) {
        if (num === 0) return
        inputOperand = inputOperand + num;
    }

    function inputDisplay() {
        inputText.textContent = inputOperand;
    }

    function outputDisplay(operator) {
        if (inputOperand === '') return
        if (outputCalculation !== '') {
            sum();
        }
        calculation = operator;
        outputCalculation = inputOperand;
        inputOperand = '';
        inputText.textContent = 0
        outputText.textContent = outputCalculation + ' ' + calculation
    }


    function sum() {

        let finalSum
        let input = parseFloat(inputOperand)
        let output = parseFloat(outputCalculation)
        switch (calculation) {
            case '+':
                finalSum = input + output
                break
            case '-':
                finalSum = input - output
                break
            case 'x':
                finalSum = input * output
                break
            case '÷':
                finalSum = input / output
                break
            default:
                return       
        }
    
        inputOperand = finalSum
        calculation = ''
        outputCalculation = ''
    }

    operator.forEach((button) => {
        button.addEventListener("click", function(){
            outputDisplay(button.textContent)
        })
    })

    operand.forEach((button) => {
        button.addEventListener("click", function(){
            appendOperand(button.textContent)
            inputDisplay()
        })
    })

    equals.addEventListener("click", function() {
        sum()
        inputDisplay()
    });

}

clearButton.addEventListener("click", calculator);

calculator();