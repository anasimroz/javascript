function calculator() {
    alert('Welcome to calculator program from function')
    var operator = prompt('Enter your order of operation', '+ - * /')
    var Num1 = + prompt('Enter your first number')
    var Num2 = + prompt('Enter your second number')
    var result

    if (operator == '+') {
        result = Num1 + Num2
    }

    else if (operator == '-') {
        result = Num1 - Num2
    }

    else if (operator == '*') {
        result = Num1 * Num2
    }

    else if (operator == '/') {
        result = Num1 / Num2
    }

    else alert('select correct operator!!')

    return alert('The result of your operation is ' + result);
}
calculator()