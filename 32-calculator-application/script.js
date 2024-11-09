class Calculator {
    constructor() {
        this.previousOperand = ''
        this.currentOperand = '0'
        this.operation = undefined
    }

    clear() {
        this.previousOperand = ''
        this.currentOperand = '0'
        this.operation = undefined
    }

    delete() {
        if (this.currentOperand === '0') return
        if (this.currentOperand.length === 1) {
            this.currentOperand = '0'
        } else {
            this.currentOperand = this.currentOperand.slice(0, -1)
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number
        } else {
            this.currentOperand += number
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '×':
                computation = prev * current
                break
            case '÷':
                if (current === 0) {
                    alert('Cannot divide by zero!')
                    return
                }
                computation = prev / current
                break
            default:
                return
        }

        this.currentOperand = computation.toString()
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay() {
        document.querySelector('.current-operand').textContent = this.currentOperand
        if (this.operation != null) {
            document.querySelector('.previous-operand').textContent =
                `${this.previousOperand} ${this.operation}`
        } else {
            document.querySelector('.previous-operand').textContent = ''
        }
    }
}

const calculator = new Calculator()
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            calculator.clear()
        } else if (button.classList.contains('operator') && button.textContent === 'DEL') {
            calculator.delete()
        } else if (button.classList.contains('operator')) {
            calculator.chooseOperation(button.textContent)
        } else if (button.classList.contains('equals')) {
            calculator.compute()
        } else {
            calculator.appendNumber(button.textContent)
        }
        calculator.updateDisplay()
    })
})