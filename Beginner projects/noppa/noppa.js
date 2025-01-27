function ranNum() {
let noppaArvo = Math.floor(Math.random() * 6);
    return noppaArvo;
} 

function heitto() {
let noppaArvo = ranNum();
const kuva = document.getElementById('kuva');

    switch(noppaArvo) {
        case 0:
            kuva.src = 'noppa-iconit/dice-1.svg';
            break;
        case 1:
            kuva.src = 'noppa-iconit/dice-2.svg';
            break;
        case 2:
            kuva.src = 'noppa-iconit/dice-3.svg';
            break;
        case 3:
            kuva.src = 'noppa-iconit/dice-4.svg';
            break;
        case 4:
            kuva.src = 'noppa-iconit/dice-5.svg';
            break;
        case 5:
            kuva.src = 'noppa-iconit/dice-6.svg';
    }
}