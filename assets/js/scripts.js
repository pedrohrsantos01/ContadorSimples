var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber
}


/*
function increment() {
    currentNumber = currentNumber + 1;
}

function decrement() {
    currentNumber = currentNumber - 1;
}
*/
