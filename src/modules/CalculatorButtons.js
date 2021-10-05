const calculatorButtons = [
    {
        name: 'clear',
        button: 'C',
    },
    {
        name: 'plusMinus',
        button: '±',
        plusNegative: function(num) {
            return (-1 * num);
        }
    },
    {
        name: 'percent',
        button: '%',
        percentage: function(num) {
            return (num/100);
        }
    },
    {
        name: 'divide',
        button: '÷',
        divide: function(num1, num2) {
            if (num2 === 0) {
                return null;
            }

            return num1 / num2;
        }
    },
    {
        name: 'seven',
        button: '7'
    },
    {
        name: 'eight',
        button: '8'
    },
    {
        name: 'nine',
        button: '9'
    },
    {
        name: 'times',
        button: '×',
        multiple: function(num1, num2) {
            return num1 * num2;
        }
    },
    {
        name: 'four',
        button: '4'
    },
    {
        name: 'five',
        button: '5'
    },
    {
        name: 'six',
        button: '6'
    },
    {
        name: 'plus',
        button: '+',
        add: function(num1, num2) {
            return num1 + num2;
        }
    },
    {
        name: 'one',
        button: '1'
    },
    {
        name: 'two',
        button: '2'
    },
    {
        name: 'three',
        button: '3'
    },
    {
        name: 'minus',
        button: '-',
        subtract: function(num1, num2) {
            return num1 - num2;
        }
    },
    {
        name: 'zero',
        button: '0'
    },
    {
        name: 'decimal',
        button: '.'
    },
    {
        name: 'backspace',
        button: '←'
    },
    {
        name: 'equal',
        button: '='
    }

];

module.exports = calculatorButtons;