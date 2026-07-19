let array_1 = [
  ['un', 'per', 'incatenarli.'],
  ['Anello', 'trovarli,'],
  ['ghermirli', 'e'],
  ['gondor', 'mark'],
];

let array_2 = [
  [['trovarli,']],
  ['tu,', 'sciocchi'],
  ['tu,', 'sciocchi', ['padron', 'Sauron']],
  ['nel', ['fuggite', 'gandalf']],
  [['domarli,', 'passare'], 'buio']
];

// Andiamo a pescare le parole usando gli indici.
// Ricorda che si parte sempre a contare da 0!
// Quando vedi due parentesi quadre [][], significa: [riga][colonna]
// Quando ne vedi tre [][][], significa che c'è un ulteriore array annidato.

let parola1 = array_1[0][0]; // "un"
let parola2 = array_1[1][0]; // "Anello"
let parola3 = array_1[0][1]; // "per"

// "domarli," è nascosto in un array dentro un array dentro array_2
let parola4 = array_2[4][0][0]; // "domarli,"

// "trovarli," è nel primo array
let parola5 = array_1[1][1]; // "trovarli,"

let parola6 = array_1[2][0]; // "ghermirli"
let parola7 = array_1[2][1]; // "e"
let parola8 = array_2[3][0]; // "nel"
let parola9 = array_2[4][1]; // "buio"
let parola10 = array_1[0][2]; // "incatenarli."

// Ora concateniamo tutto inserendo uno spazio vuoto " " tra una parola e l'altra.
// Ripetiamo alcune variabili per le parole che compaiono più volte (come un, Anello, per)
let frase = parola1 + " " + parola2 + " " + parola3 + " " + parola4 + " " +
            parola1 + " " + parola2 + " " + parola3 + " " + parola5 + " " +
            parola1 + " " + parola2 + " " + parola3 + " " + parola6 + " " +
            parola7 + " " + parola8 + " " + parola9 + " " + parola10;

// Stampiamo in console il risultato finale
console.log(frase);