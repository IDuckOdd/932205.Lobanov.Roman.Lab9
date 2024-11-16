const display = document.getElementById("display").children[0];
display.value = "0";
var hasPoint = false;

const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener('click', function () {
    let curExpression = display.value;
    display.value = eval(curExpression);
    if (display.value.includes('.'))
        hasPoint = true;
});

const pointButton = document.getElementById("point");
pointButton.addEventListener('click', function () {
    if (!hasPoint || display.value === "") {
        display.value += this.innerHTML;
        hasPoint = true;
    }
});

const clearButton = document.getElementById("clear");

clearButton.addEventListener('click', function () {
    display.value = "0";
    hasPoint = false; 
});

const operatorButtons = document.getElementsByClassName("op");
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function () {
        if (display.value.slice(-1) == '+' || display.value.slice(-1) == '-' || display.value.slice(-1) == '*' || display.value.slice(-1) == '/') {
            display.value = display.value.slice(0, -1);
            display.value += this.innerHTML;
        }
        else {
            let num = this.innerHTML;
            display.value += num;
            hasPoint = false;
        }
    });
}

const deleteButton = document.getElementById("delete");

deleteButton.addEventListener('click', function () {
    if (display.value.length < 2)
        display.value = "0";
    else {
        if (display.value.slice(-1) == '.')
            hasPoint = false;
        display.value = display.value.slice(0, -1);
    }
});

const literalButtons = document.getElementsByClassName("num");
for (let i = 0; i < literalButtons.length; i++) {
    literalButtons[i].addEventListener('click', function () {
        let num = this.innerHTML;
        if (display.value == "0")
            display.value = num;
        else
            display.value += num;
    });
}