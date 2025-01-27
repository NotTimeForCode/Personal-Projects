let alphabet = 'abcdefghijklmnopqrstuvwxyza';
let str = 'bitchboy';


function cipher() {
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
    document.getElementById('output').innerHTML = finished;
    return finished;
}

console.log('Running program');
console.log(cipher('bitchboy'));