const numberBtns = document.querySelectorAll("[data-number]")
const operationBtns = document.querySelectorAll("[data-operation]")
const equalBtn = document.querySelector("[data-equals]")
const deleteBtn = document.querySelector("[data-delete]")
const clearBtn = document.querySelector("[data-all-clear]")
const prevOutput = document.querySelector("[data-prev-output]")
const curOutput = document.querySelector("[data-cur-output]")

class Calculator{
    constructor(prevOutput, curOutput){
        this.prevOutput = prevOutput;
        this.curOutput = curOutput;
        this.clearButton()
    }

clearButton(){
    this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
}

deleteButton(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

insertOperator(operation){
    if (this.currentOperand === "") return
    if(this.previousOperand !== ""){
        this.generateResult()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
}

insertNumber(number){
    if(number === "." && this.currentOperand.includes(".")) return
    this.currentOperand = this.currentOperand.toString() + number.toString();
}

generateResult(){
    let result;
    const prev = parseFloat(this.previousOperand)
    const cur = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(cur)) return
    switch(this.operation){
        case "+":
            result = prev + cur
            break
        case "-":
            result =prev - cur
            break
        case "/":
            result = prev / cur
            break
        case "*":
            result = prev * cur
            break
        case "%":
            result = prev % cur
            break
        default:
            return
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = ""
}

displayResult(){
    this.curOutput.textContent = this.currentOperand
    if(this.operation != null){
        this.prevOutput.textContent = `${this.previousOperand} ${this.operation}`
    }else{
        this.prevOutput.textContent = ""
    }
}
}

const calculator = new Calculator(prevOutput, curOutput);

numberBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        calculator.insertNumber(btn.innerText)
        calculator.displayResult()
    })
})

operationBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        calculator.insertOperator(btn.innerText)
        calculator.displayResult()
    })
})

clearBtn.addEventListener("click", () => {
    calculator.clearButton()
    calculator.displayResult()
})

deleteBtn.addEventListener("click", () => {
    calculator.deleteButton()
    calculator.displayResult()
})

equalBtn.addEventListener("click", () => {
    calculator.generateResult()
    calculator.displayResult()
})



