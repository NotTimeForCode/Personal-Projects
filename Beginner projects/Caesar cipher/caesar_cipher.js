let alphabet = 'abcdefghijklmnopqrstuvwxyza';
let str = 'bitchboy';


function encrypt() {
    let empty = '';
    let finished = empty;
    let index;
    let newLetter;
    str = document.getElementById('encrypt_input').value;
    
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        index = alphabet.indexOf(currentLetter);
        index++;
        newLetter = alphabet[index];
        finished += newLetter; 
    }
    document.getElementById('encrypt_output').innerHTML = finished;
    return finished;
}

function decrypt() {
    let empty = '';
    let finished = empty;
    let index;
    let newLetter;
    str = document.getElementById('decrypt_input').value;
    
    for (let i = 0; i < str.length; i--) {
        let currentLetter = str[i];
        index = alphabet.indexOf(currentLetter);
        index--;
        newLetter = alphabet[index];
        finished += newLetter; 
    }
    document.getElementById('decrypt_output').innerHTML = finished;
    return finished;
}

console.log('Running program');
console.log(encrypt('bitchboy'));