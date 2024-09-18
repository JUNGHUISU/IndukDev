let currentInput = "";
let previousInput = "";
let operator = null;
let history = "";  // 입력한 내역을 저장할 변수

function appendNumber(number) {
    currentInput += number;
    history += number;  // 입력 내역에 숫자를 추가
    updateDisplay(currentInput);
    updateHistoryDisplay(history);
}

function setOperation(op) {
    if (currentInput === "") return;
    if (operator !== null) {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
    history += " " + op + " ";  // 입력 내역에 연산자를 추가
    updateHistoryDisplay(history);
}

function calculateResult() {
    if (operator === null || currentInput === "") return;
    
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;
    
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    
    updateDisplay(result);
    history += " = " + result;  // 입력 내역에 결과 추가
    updateHistoryDisplay(history);
    currentInput = result.toString();
    operator = null;
    previousInput = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    history = "";  // 입력 내역도 초기화
    updateDisplay("0");
    updateHistoryDisplay(history);
}

function updateDisplay(value) {
    document.getElementById("display").innerText = value;
}

function updateHistoryDisplay(value) {
    document.getElementById("history").innerText = value;
}
