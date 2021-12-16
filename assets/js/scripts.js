var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
var button = document.getElementsByTagName('button')


function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber
    if(currentNumber >= 10) {
        button.namedItem('adicionar').style.display = 'none'
    }
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber
    if(currentNumber <= 0) {
        currentNumberWrapper.style.color = 'red'
        button.namedItem('subtrair').style.display = 'none'
    }
}


/*
function increment() {
    currentNumber = currentNumber + 1;
}

function decrement() {
    currentNumber = currentNumber - 1;
}
*/
