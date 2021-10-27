"use scrict"
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//Creo un Array vuoto
const arrayNumeriCasuali = [];
//Genero 5 numeri e li pusho nell'array
for(let i = 0; i < 5; i++){
  let numeriRandom =  Math.ceil(Math.random() * 100);
  arrayNumeriCasuali.push(numeriRandom);
}
//Stampo sulla console l'Array con i 5 numeri
console.log(arrayNumeriCasuali)

//Faccio un alert con i 5 numeri casuali
alert(arrayNumeriCasuali)

const arrayNumeriUtenti = [];
let numeriUtente;
let myTimer;

//Creo una funzione e un ciclo che si attivi dopo 30 secondi e esca un prompt all'utente
//for(let i = 0; i < 5; i++){
myTimer = setTimeout(() => {
  for(let i = 0; i < 5; i++){
    numeriUtente = prompt("inserisci i numeri")
    arrayNumeriUtenti.push(numeriUtente)
  }
  if(arrayNumeriCasuali.includes(arrayNumeriUtenti)){
    alert("Hai vinto")
  
  }else{
    alert("Hai perso")
    
  }
 
} , 3000);
console.log(arrayNumeriUtenti)














 

