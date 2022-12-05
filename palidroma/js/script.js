
function palindromo(pal){
    
    let palindromocheck = word.split('').reverse().join('')
    return palindromocheck;

}

let word= prompt('Inserisci la tua parola')

let palindromocheck = palindromo(word);
console.log(palindromocheck);

if(word === palindromocheck){
    alert('La parola inserita è un palindromo')
}

else{
    alert('La parola inserita non è un palindromo')
}

