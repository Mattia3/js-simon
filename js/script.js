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

//Creo una funzione e un ciclo che si attivi dopo 30 secondi e esca un prompt all'utente
let numeriUtente;
let myTimer = setTimeout(() => {
  const arrayNumeriUtenti = [];
  const arrayNumeriIndovinati = [];
  for(let i = 0; i < 5; i++){
    numeriUtente = parseInt(prompt("inserisci i numeri"))
    arrayNumeriUtenti.push(numeriUtente)
  }
//Creo unj ciclo dove vado a inserire in un array vuoto i numeri indovinati.
  for(let i = 0; i < arrayNumeriUtenti.length; i++){
    if(arrayNumeriCasuali.includes(arrayNumeriUtenti[i])){
      arrayNumeriIndovinati.push(arrayNumeriUtenti[i])
    }
  }
  console.log(arrayNumeriUtenti)
  console.log(arrayNumeriIndovinati)
 
  alert(`hai indovinato ${arrayNumeriIndovinati.length} numeri. Il ${arrayNumeriIndovinati}`)
} ,3000);



















 

