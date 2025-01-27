let alphabet = 'abcdefghijklmnopqrstuvwxyza';

function cipher(str) {
    let finished = '';
    let index;
    let newLetter;

    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        // console.log(`currentLetter: ${currentLetter}`);
        index = alphabet.indexOf(currentLetter);
        // console.log(`first index: ${index}`);
        index++; // change this to make whatever solve you want
        // console.log(`second index: ${index}`);
        newLetter = alphabet[index];
        // console.log(`newLetter: ${newLetter}`);
        finished += newLetter;
        // console.log(`finished: ${finished}`);
    }   
    return finished;
}

console.log('Running program');
console.log(cipher('bcde'));