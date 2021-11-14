function calc(num1, num2, operation) {
    let result;
    if (Number.isInteger(num1) &&
        Number.isInteger(num2) &&
        operation === '+' ||
        operation === '-' ||
        operation === '*' ||
        operation === '/') {
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if(num1 !== 0 && num2 !== 0){
                   result = num1 / num2;
                break; 
                } else{
                    return 'Division by zero is not allowed';
                }
        }
        return Math.floor(result * 100)/100;
    } else {
        return 'Error check input data!';
    }
}
export default calc;
