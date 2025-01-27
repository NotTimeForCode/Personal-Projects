let chars = 0;

function nullification() {
    document.getElementById('inputField').innerHTML = 0;
}

function getNumber() {
    let chars = document.getElementById('inputField').innerHTML;
    return chars;
}

function lisaaRuudulle(merkki) {
    let inputF = document.getElementById('inputField');
    console.log(inputF);
    if (inputF.textContent == 0) {
         inputF.innerHTML = merkki;
    } else {
        inputF.innerHTML += merkki;
    }
    console.log(merkki);
}

function saveNumber() {
    window.savedChars = document.getElementById('inputField').innerHTML;
    return window.savedChars;
}

function calculation() {
    try {
        let chars = getNumber();
        saveNumber();
        let tulos = eval(chars);
        document.getElementById('inputField').innerHTML = tulos;
        console.log(tulos);
    } catch (error) {
        // alert('ERROR');
        disableButtons();
        document.getElementById('inputField').innerHTML = 'ERROR';
        setTimeout(errorMsg, 1000);
    }

}

function backspace() {
        let chars = getNumber();
        let length = chars.length;

    if (chars == 0 || length == 1) { 
        document.getElementById('inputField').innerHTML = 0;
    } else {
        chars = chars.slice(0, -1);
        document.getElementById('inputField').innerHTML = chars;
    }
}

function errorMsg() {
    let savedChar = window.savedChars;
    document.getElementById('inputField').innerHTML = savedChar;

}

function disableButtons() {
    let btns = document.querySelectorAll('button');
    btns.forEach((button) => {
        button.disabled = true;
    });
    setTimeout(() => {
        btns.forEach((button) => {
        button.disabled = false;
        });
    }, 1000);
}