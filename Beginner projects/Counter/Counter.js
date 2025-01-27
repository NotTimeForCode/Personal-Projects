let number = 0;

function addOne() {
    number = number + 1;
    document.getElementById('count').innerHTML = number;
} 

function takeOne() {
    number = number - 1;
    lessThanZero();
    document.getElementById('count').innerHTML = number;
} 

function reset() {
    number = 0; 
    document.getElementById('count').innerHTML = number;
}

function lessThanZero() { 
    if (number < 0) { 
        number = 0;
    }
}