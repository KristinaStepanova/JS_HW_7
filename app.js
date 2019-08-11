//task 1
function minus(x) {
    return function(y) {
        return x - y;
    }
}

let res1 = minus(10)(4);
console.log(res1);

//task 2
function multiplyMaker(x) {
    let val = x;
    return function(y) {
        return val *= y;
    }
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(3));
console.log(multiply(10));

//task 3
const stringWorker = (function() {
    let mainString;

    function setString(str) { 
        if(str === undefined) {
            str = '';
        }
        if(typeof str === 'number') {
            str = String(str);
        }
        mainString = str;
    }

    function getString() {
        return mainString;
    }

    function getStringLenght() {
        return mainString.length;
    }

    function getReverseString() {
        return mainString.split('').reverse().join('');
    }
    return {
        setString: setString,
        getString: getString,
        getStringLenght: getStringLenght,
        getReverseString: getReverseString
    };
})();

console.log(stringWorker.setString(23));
console.log(stringWorker.getReverseString());
console.log(stringWorker.getStringLenght());

//task 4
const calculator = (function() {
    let value;

    function setValue(x) {
        value = x;
        return this;
    }

    function addValue(x) {
        value += x;
        return this;
    }

    function subValue(x) {
        value -= x;
        return this;
    }

    function multyValue(x) {
        value *= x;
        return this;
    }

    function divideValue(x) {
        value /= x;
        return this;
    }

    function involValue(x) {
        Math.pow(value, x);
        return this;
    }

    function getValue() {
        console.log(Math.round(value * 100) / 100);
        return this;
    }

    return {
        setValue: setValue,
        addValue: addValue,
        subValue: subValue,
        multyValue: multyValue,
        divideValue: divideValue,
        involValue: involValue,
        getValue: getValue
    }
})();

calculator.setValue(1);
calculator.addValue(3.55);
calculator.subValue(1);
calculator.multyValue(3);
calculator.divideValue(2);
calculator.getValue();

calculator.setValue(1).addValue(3.55).subValue(1).multyValue(3).divideValue(2).getValue();
