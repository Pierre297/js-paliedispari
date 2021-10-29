// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

// chiedi una parola
const userWord = prompt("Inserisci una parola Palindroma.");

// associa la parola scelta alla variabile risultato
let risultato = palindrome(userWord)

// funzione
function palindrome(string){
    // confronta se la parola al contrario è uguale alla parola scelta
    var reversed = string.split("").reverse().join("");
    if (reversed === string) {
        console.log("Ottimo! Questa parola è Palindroma!");
        return true;
        
    }else {
        console.log("Riprova, questa non è una parola palindroma");
        return false;
    }
    
}
 


