// esercitazione 3 

// Esercizio 1

// let valutazione = prompt(`Inserisci la tua valutazione`);

// function miaValue(valutazione){
// if (valutazione<18) {
//     return alert("insufficiente");
// } else if (valutazione >= 18 && valutazione< 21) {
//    return alert("sufficiente");
// } else if(valutazione >= 21 && valutazione < 24){
//     return alert("buono");
// } else if (valutazione >= 24 && valutazione < 27){
//     return alert("distinto");
// } else if(valutazione >= 27 && valutazione <= 29){
//     return alert("ottimo")
// } else if(valutazione = 30) {
//     return alert("eccellente")
// }
    
// }
// let result=miaValue(valutazione);

// Esercizio 2

// const tabellina = 10;

// function tab10(tabellina){
    
// for (let i = 0; i < 11; i++) {

//     const tab=i*tabellina;
//     console.log(`${tabellina} x ${i} = ${tab}`);
    
// }

// }

// let result =tab10(tabellina);


// Esercizio 3
 
// let password = prompt("Inserisci password");

// function controlpas(password){

//     if (!(password.length>=6) || !(password.length<=20)) {

//        console.log("inserisci una password conpresa tra 6 e 20");


//     } else if(!password.includes ("!") && !password.includes ("_") && !password.includes("-")){
//          console.log("devi inserire un carattere speciaale");
//     }else if (!/\d/.test(password)){
//         console.log("deve esserci un numero");
//     } else {
//         alert("hai rubato la password");
//     }
   
// }

// let result = controlpas(password);

// Esercizio 4
// Scrivi un programma che per il seguente testo conti quante occorrenze ci sono per ogni vocale e quante vocali ci sono in tutto

// const testo = `Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo

// “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
// let vocale_a=0;
// let vocale_e=0;
// let vocale_i=0;
// let vocale_o=0;
// let vocale_u=0;
// let totalevocali=0;

//     for (let i = 0; i < testo.length; i++) {
//         let char= testo.charAt(i).toLowerCase();
//         switch (char) {
//             case "a" :
//                 vocale_a += 1;
//                totalevocali +=1;
//                 break;
//                 case "e" :
//                  vocale_e += 1;
//                totalevocali +=1;
//                 break;
//                 case "i" :
//                vocale_i += 1;
//                totalevocali +=1;
//                 break;
//                 case "o" :
//                 vocale_o += 1;
//                totalevocali +=1;
//                 break;
//                 case "u" :
//                 vocale_u += 1;
//                totalevocali +=1;
//                 break;
       
//     }
// }


//  console.log(totalevocali)
//   console.log(vocale_a,vocale_e,vocale_i,vocale_o,vocale_u)

// esercizio 5
// Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N), simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti. Supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.

// let numerotriri=4;
// let giocatore1=0
// let giocatore2=0;
// let risgioc1=[];
// let risgioc2=[];
// let sommaRG1=0;
// let sommaRG2=0;

// for (let i = 0; i < numerotriri; i++) {
//    giocatore1=Math.floor(Math.random() * (6 - 1 + 1) + 1);
//    risgioc1.push(giocatore1);
//    giocatore2=Math.floor(Math.random() * (6 - 1 + 1) + 1); 
//    risgioc2.push(giocatore2);
// }
// for (let n = 0; n < risgioc1.length; n++) {
//     sommaRG1 += risgioc1[n];
//     sommaRG2+= risgioc2[n];
// }
// console.log(sommaRG1)


// esercitazione 4
// esercizio uno


// const num = prompt("inserisci un numero ");
//  function miaFunzione(num){
// if (num>0){
// return console.log("il numero è maggiore");
//  } 
//  else if(num<0){
//     return console.log("il numero è minore");
//  }
//  else if (num==0){
//     return console.log("il numero è uguale a 0 ");
//  }
 
// }

// let result = miaFunzione(num); 


// esercizio 2


// let num1 = prompt("inseri 1");
// let num2 = prompt("inseri 2");

// function miafunzione(num1,num2){
//     if (num1==num2){
//         return alert("True");
//     } else if(num1!=num2){
//         return alert("False");
//     }
// }
// let result = miafunzione(num1,num2);


// esercizio 3

// let frase=prompt("inserisci una frase");
// let lettera=prompt("inserisci lettera");

// function contollo(frase,lettera){
//     let counter=0;
//     if ((!isNaN(frase))) {
//         return "non è una stringa";
//     }
//     for (let i = 0; i < frase.length; i++) {
       
//         if (frase.charAt(i).toLowerCase()==lettera.toLowerCase()) {
//             counter++;
//         }
//     }
//     return `La lettera ${lettera} è presente ${counter} volte`
// }
// let ris=contollo(frase,lettera)
// console.log(ris)

// esercizio 4

// let radius = prompt("inserisci raggio");
// let precision = 5;
// const pgreco = Math.PI;
// calculateArea=0;
// rquadro=null;
// function circonferenza(rquadro){
// rquadro=Math.pow(radius,2);
// calculateArea= rquadro*pgreco;
// calculateArea = parseFloat(calculateArea.toFixed(precision));
// console.log(calculateArea);

// }

// let result = circonferenza(rquadro);

// esercizio 5

// let baseVoto=8;
// let golFatti=2;
// let assistEffettuati=1;
// let autogol=0;
// let ammonizione=true;
// let espulsione=false;

// function calcolofanta(baseVoto,golFatti,assistEffettuati,ammonizione,espulsione,autogol){

// let puntigoal=golFatti*3;
// let puntiass=assistEffettuati*1;
// let puntiautogol=autogol*2;
// let puntiammonizione=0;
// let puntiespulsione=0
// if(ammonizione){
//     puntiammonizione=0.5;
//   }
// if(espulsione){
//     puntiespulsione=1;
// }
// const bonus =puntiass+puntigoal;
// const malus= puntiespulsione+puntiammonizione+puntiautogol;
// const votofinale=baseVoto+(bonus-malus);
// return votofinale;
// }
// const Votofinalegiocatore=calcolofanta(baseVoto,golFatti,assistEffettuati,ammonizione,espulsione,autogol);
// console.log(Votofinalegiocatore);



// Esercitazione 5

// Scrivi una funzione che accetti come parametri in ingresso:

// - 2 array di 5 elementi interi casuali compresi tra 1 e 10,
// - il tipo di operazione aritmetica da effettuar tra una delle seguenti:
//     - addizione
//     - sottrazione
//     - moltiplicazione
//     - divisione

// Esegui il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

// - Esempio:
//     - Input: a= [3, 7, 2, 5, 8], b= [9, 3, 1, 4, 7], operazione = "addizione”
//     - Output: c = [12, 10, 3, 9, 15]

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];


// function operazioni(array1,array2,operazione){

// let array3 = [];
// switch (operazione) {
//     case "addizzione":
//         for (let i = 0; i < array1.length; i++) {
//            array3[i]=array1[i]+array2[i];
//         }
//         break;
//      case "sott":
//          for (let i = 0; i < array1.length; i++) {
//         array3[i]=array1[i]-array2[i];
//             }
//          break;
//          case "mol":
//             for (let i = 0; i < array1.length; i++) {
//            array3[i]=array1[i]*array2[i];
//                }
//             break;
//             case "div":
//                 for (let i = 0; i < array1.length; i++) {
//             array3[i]=array1[i]/darray2[i];
//                    }
//                 break;

// }
// return array3;
// }
// let result = operazioni(array1,array2,prompt("inserisci un caso"));
// console.log(result);


// esercizio 2

// Dato un array x e un valore y. Tutto ciò che dovete fare, tramite la funzione, è verificare se l'array fornito contiene il valore.
// L'array può contenere numeri o stringhe. Y può essere uno dei due.


// const myArray = ["Pippo", "Topolino", "paperino",9,0];
// let element = prompt("fa cghe vuoi");


// function searchElementInArray(myArray,element ) {
//     for(let i = 0; i <= myArray.length; i++) {
//         if( myArray[i] == element) {
//             return `Prodotto trovato`;
//         }

       
        
//     }
//     return `Prodotto NON trovato!`
// }

// console.log(searchElementInArray(myArray, element))

// esercitazione 3


// let array=[1,-4,7,12];
// let array_1=[-1,-4,-7,-12];

// function calcolo(array){
//     let sumPositive=0;
//     for (let i = 0; i < array.length; i++) {
//        if (array[i]>0) {
//         sumPositive += array[i];
//        }
        
//     }
//     return sumPositive;

// }
// let result=calcolo(array);
// let result1=calcolo(array_1);
// console.log(result,result1);

// esercizio 4

// let prodotti=["Smartphone","Auricolari Bluetooth","Motorino","Auto","T-shirt","Felpa con cappuccio","Nano da giardino","Videogioco Super Nintendo"];



// function find(prodotti){
//     let variabile=false;
//     while (!variabile) {
//         let ricerca = prompt("inserisci una ricerca");
//     for (let i = 0; i < prodotti.length; i++) {
//         if (prodotti[i].toLowerCase() === ricerca.toLowerCase()) {
//             alert("trovato");
//             variabile=true;
//             return;
            
//         }
      
//     }
//     alert("ritenta");
    
//     }
    
// }
// find(prodotti)

// esercisio 5

// let campionato=['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'];
//  function miocalcolo(results){
// let point=0;
// for (let i = 0; i < results.length; i++) {
//     let result=results[i]
//     console.log(result)
//     let [x,y]=result.split(':')
//     console.log([x,y])

//     if (x>y) {
//         point+=3;
        
//     }else if(x<y){
//         point+=0;
//     }else if(x==y){
        
//         point+=1;

//     }
// }
// return point;
//  }
//  console.log(miocalcolo(campionato))

// esercizio 6

// let frase="Ciao sono un esercizio sui metodi degli array";


// function lettere(trova){
// let stringa=trova.split(' ')
// console.log(stringa)
// for (let i = 0; i < stringa.length; i++){

//     console.log(stringa[i].charAt(0))
// }
    
// }
// lettere(frase)

// esercizio 7

// let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// function myarray(mela){

//     let array = mela.split('+');
//     // console.log(array);
//    let arrayLength=array.length;
//    let lastItem=array[array.length-1]
// }
// myarray(myString)


//  esercizio 8
// let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// function myarray(mela){

//     let array = mela.split('+');
//     // console.log(array);
//     let last=array.pop();
//     // console.log(array)
//     let inserisci=array.push("ola","io")
//     // console.log(array)
//     let inin=array.unshift("ola","io")
//     console.log(array)
// }
// myarray(myString)

// ESERCITAZIONE 6 ESERCIZIO 1

// playlist={

//     canzoni:[
//         {
//             titolo:"bho",
//             nomeCantante:"io",
//             anno:"2000",

//         },

//         {
//             titolo:"io",
//             nomeCantante:"io",
//             anno:"200", 
//         }

//     ]
// }
// playlist.canzoni.forEach(canzoni => {
//     console.log(`il titolo è ${canzoni.titolo} il cantante è ${canzoni.nomeCantante} è stata cantata ${canzoni.anno}`)
// });

// esercizio 2

// rubrica={
//     utenti:[
//         {

//         nome:"pippo",
//         cognome:"inzaghi",
//         telefono:"3875252552",
//         indirizzo:[
//             {
//                 via:"non sono fatti tuoi",
//                 città:"ho",
//             }
//         ]
//         },
//         {
//         nome:"pippo",
//         cognome:"inzaghi",
//         telefono:"38875252552",
//         indirizzo:[
//             {
//                 via:"non sono fatti tuoi",
//                 città:"bho",
//             }
//         ],
        
//     },{
//     call:function (){
//         rubrica.utenti.forEach(utenti => {
//             console.log(utenti.nome,utenti.cognome,utenti.telefono)
//         });  
//     }
//     }
//     ]
// }

// // rubrica.utenti[2].call() scorri rubrica
// delete rubrica.utenti[0].nome
// // console.log(rubrica.utenti[0])

// esercizio 3

// garage={
//     automobile:[
//         {
//             brandt:"renault",
//             model:"twingo",
//         },
//         {
//             brandt:"nissan",
//             model:"micra",
//         },
       
//     ] ,
//         call:function(){
//             garage.automobile.forEach(automobile => {
//                 console.log(`${automobile.model}`)
//             });
//         },
//         callsinglecar:function(){
//             console.log(this.automobile[0].brandt,this.automobile[0].model)
//         }
// }
// // garage.call()
// garage.callsinglecar()

// esercizio 4



// const LIBRI = [
//     {
//       titolo: "Il Signore degli Anelli",
//       autore: "Tolkien",
//       categoria: "fantasy"
//     },
//     {
//       titolo: "Harry Potter",
//       autore: "Rowling",
//       categoria: "fantasy",
//     },
//     {
//       titolo: "Il Conte di Montecristo",
//       autore: "Dumas",
//       categoria: "narrativa classica"
//     },
//     {
//       titolo: "Dune",
//       autore: "Herbert",
//       categoria: "fantascienza"
//     },
//     {
//       titolo: "Fight Club",
//       autore: "Palahniuk",
//       categoria: "narrativa moderna"
//     }
//   ]
//   let url=` www.lamiasuperlibreria.aulab`;
  
//   function creaurl(){
//     let categoria=prompt("inserici categosria");
//    let caso=categoria.toLocaleLowerCase();

//     LIBRI.forEach(libro => {
       
//         if (caso==libro.categoria) {
//             url=` <a href="www.lamiasuperlibreria.aulab/${libro.autore}/${libro.titolo}\.html">${libro.titolo}</a>`
//            console.log(url);
//         }
        
//     });
//   }
//   creaurl()