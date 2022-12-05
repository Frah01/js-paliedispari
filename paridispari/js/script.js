let paridispari= prompt('Scegliere pari o dispari')
let numero= parseInt(prompt('Scegliere un numero da 1 a 5'))
console.log(numero)


function generaNumero(min,max){
   
    let randomNumber= Math.floor(Math.random() * (max - min + 1) + min )
    return randomNumber
    
}
let min = 1
let max = 5

let number= generaNumero(min,max);
console.log(number)

let somma = numero + number
console.log(somma)

if(numero == number){
    alert('Pareggio')
}

else if(somma % 2 === 0 && paridispari === 'pari'){
    alert('Hai vinto')
}

else if(somma % 2 !== 0 && paridispari === 'dispari'){
    alert('Hai vinto')
}

else {
    alert('Hai perso')
}
