const firstNumber = 50;
const secondNumber = 50;

function hundredChecker(first, second) {
        const combined = first + second;
    if (first === 100 || second === 100 || combined === 100) {
        return true;
    } else {
        return false;
    }
}

console.log(hundredChecker(50,60));