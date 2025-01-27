let chars = 0;
let testCalc = 33 + 33;

function zero() {
    document.getElementById('inputField').innerHTML = 0;
}

function nullification() {
    document.getElementById('inputField').innerHTML = '';
}

function getNumber() {
    let chars = document.getElementById('inputField').innerHTML;
    return chars;
}

function lisaaRuudulle(merkki) {
    let inputF = document.getElementById('inputField');
    console.log(inputF);
    // inputF.innerHTML += merkki;
    if (inputF.textContent == 0) {
         inputF.innerHTML = merkki;
    } else {
        inputF.innerHTML += merkki;
    }
    console.log(merkki);
}

function calculation() {
    let chars = getNumber();
    let tulos = eval(chars);  
    let tulos2 = eval(testCalc);
    if (tulos2 == 66) {
            document.getElementById('inputField').innerHTML = tulos;
    } else {
        alert('ERROR');
    }
    console.log(tulos);
    console.log(tulos2);
}

function backspace() {
    let chars = getNumber();
    chars = chars.slice(0 ,-1);
    document.getElementById('inputField').innerHTML = chars;
}