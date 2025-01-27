let pituus;
let paino;
let paino1 = document.getElementById('paino1').value;
let pituus1 = document.getElementById('pituus1').value;

let kayttajaInput = function() {
    let kaytPituus = document.getElementById('pituus1').value;
    let kaytPaino = document.getElementById('paino1').value;

    pituus = kaytPituus;
    paino = kaytPaino;
}

let tuplaus = function(pituus) {
    laskettuPituus = (pituus / 100) * (pituus / 100);
    console.log('laskettuPituus');
    console.log(laskettuPituus);
}

let laskuTulos = function(paino, laskettuPituus) {
    loppuTulos = paino / laskettuPituus;
    console.log('loppuTulos');
    console.log(loppuTulos);
}

let lyhentaja = function(loppuTulos) {
    lyhennetty = loppuTulos.toFixed(1);
    console.log('lyhennetty');
    console.log(lyhennetty);
}

let laskeBMI = function() {
    kayttajaInput();
    tuplaus(pituus);
    laskuTulos(paino, laskettuPituus);
    lyhentaja(loppuTulos);
    
    let output = 'Sinun BMI-arvosi on ' + lyhennetty + '.';
    let corrNum = 'Laita oikea numero.';
    document.getElementById("outputField").innerHTML = output;
    /*
    if( paino1 !== '' && pituus1 !== '') {
        document.getElementById("outputField").innerHTML = output;
    } else {
        alert(corrNum);
    }
    */
    console.log('output');
    console.log(output);
    console.log(outputField);
}

