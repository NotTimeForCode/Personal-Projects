function quote() {
let randomNum = Math.floor(Math.random() * 8);
switch (randomNum) { // Tekee switch casen 
  case 0:
    actQuote = ('Ei vitussa.'); // Negatiivinen
    break;
  case 1:
    actQuote = ('Totta helvetissä.'); // Positiivinen 
    break;
  case 2:                          
    actQuote = ('Yritäppä uudestaan.'); // Neutraali 
    break;
  case 3:
    actQuote = ('Inte jävla.'); // Negatiivinen 
    break;
  case 4:
    actQuote = ('En oo täysin varma.'); // Neutraali
    break;
  case 5:
    actQuote = ('Pikkulinnut laulo, että ei.'); // Negatiivinen
    break;
  case 6:
    actQuote = ('Vois'); // Positiivinen
    break;
  case 7:
    actQuote  = ('Kyl'); // Positiivinen
    break;
    }
    document.getElementById('vastaus').innerHTML = actQuote;
  }