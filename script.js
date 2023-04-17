// oppgave 1
function sjekkTekst(tekst) {
  if (tekst.trim() === "") {
    return "Teksten er tom";
  } else {
    return "Teksten er ikke tom";
  }
}
// Test
console.log(sjekkTekst("")); // Teksten er tom
console.log(sjekkTekst("Røyken VGS")); // Teksten er ikke tom

// oppgave 2
function delTekstTilOrd(tekst) {
  return tekst.trim().split(" ");
}
// Test
console.log(delTekstTilOrd(" Røyken Videregående Skole "));

// oppgave 3
function erPalindrom(tekst) {
  tekst = tekst.replace(/[^a-zA-Z]/g, "").toLowerCase();
  for (var i = 0; i < tekst.length / 2; i++) {
    if (tekst[i] !== tekst[tekst.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
var tekst1 = "MOM";
var tekst2 = "RADAR";
var tekst3 = "ROTATOR";
var tekst4 = "02022020";

console.log(erPalindrom(tekst1));
console.log(erPalindrom(tekst2));
console.log(erPalindrom(tekst3));
console.log(erPalindrom(tekst4));

// oppgave 4
function sortereBokstaverAlfabetisk(tekst) {
  var bokstaver = tekst.split("");
  bokstaver.sort();
  var sortertTekst = bokstaver.join("");
  return sortertTekst;
}
var x = "serdar";
var sortertTekst = sortereBokstaverAlfabetisk(x);
console.log(sortertTekst);

// oppgave 5
function telbokstav(tekst, bokstav) {
  var teller = 0;
  for (var i = 0; i < tekst.length; i++) {
    if (tekst[i] === bokstav) {
      teller++;
    }
  }
  return teller;
}

var tekst1 = "Welcome to Norge";
var bokstav1 = "o";
console.log(telbokstav(tekst1, bokstav1)); 


// oppgave 6
function hentHverTredjeBokstav(tekst, startIndeks) {
  var resultat = "";
  for (var i = startIndeks; i < tekst.length; i += 3) {
    resultat += tekst[i];
  }
  return resultat;
}

var tekst2 = "ABCAABCAAADA";
var startIndeks2 = 3;
console.log(hentHverTredjeBokstav(tekst2, startIndeks2)); 
