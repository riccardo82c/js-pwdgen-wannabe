var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var colore = prompt("Inserisci il tuo colore preferito");
var secretNumber = 19;

document.getElementsByTagName("span")[0].innerHTML =
  "La tua password è: " + nome + cognome + colore + secretNumber;

/* document.getElementById("pwd").innerHTML =
  "La tua password è: " + nome + cognome + colore + secretNumber; */
