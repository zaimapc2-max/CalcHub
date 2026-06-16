let currentInput = "0";
let previousInput = "";
let operator = "";

const expression = document.getElementById("expression");
const result = document.getElementById("result");

result.innerText = "0";

const buttons = document.querySelectorAll(".btn-grid .btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.innerText;

        if (value === "C") {

            currentInput = "0";
            previousInput = "";
            operator = "";

            result.innerText = "0";
            expression.innerText = "";

        }

        else if (value === "=") {

            let p = parseFloat(previousInput);
            let c = parseFloat(currentInput);
            let answer = "";

            if (operator === "+") {
                answer = p + c;
            }

            else if (operator === "-") {
                answer = p - c;
            }

            else if (operator === "×") {
                answer = p * c;
            }

            else if (operator === "÷") {

                if (c === 0) {
                    result.innerText = "Error!!";
                    return;
                }

                answer = p / c;
            }

            result.innerText = answer;

            expression.innerText = previousInput + " " + operator + " " + currentInput + " =";

            currentInput = String(answer);
            previousInput = "";
            operator = "";
        }

        else if (value === "÷" ||value === "×" ||value === "-" ||value === "+") {

            previousInput = currentInput;
            operator = value;
            currentInput = "0";

            expression.innerText = previousInput + " " + operator;
        }

        else if(value === "±"){
          result.innerText = String( parseFloat(currentInput) * (-1) )
          currentInput = result.innerText
        }
        
        else if(value ==="%"){
            result.innerText = String(parseFloat(currentInput)/100)
            currentInput = result.innerText
        }

        else {

            if (currentInput === "0") {
                currentInput = value;
            }

            else {
                currentInput += value;
            }

            result.innerText = currentInput;
        }
    });
});