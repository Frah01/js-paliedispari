const buttongenerate= document.getElementById ('generate');

generate.addEventListener('click', function(){

    let input_paridispari= document.getElementById('pari_dispari').value;
    console.log(input_paridispari)

    let input_number= document.getElementById('scelta_numero').value;
    let second_value_input= input_number * 1
    console.log (second_value_input)
    
    function generaNumero(min,max){
   
        let randomNumber= Math.floor(Math.random() * (max - min + 1) + min )
        return randomNumber
        
    }

    let min = 1
    let max = 5
    
    let number= generaNumero(min,max);
    console.log(number)
    
    let somma = number + second_value_input
    console.log(somma)
    
    if(somma % 2 !== 0 && input_paridispari === 'dispari'){
        alert('Hai vinto')
    }
    
    else if(somma % 2 === 0 && input_paridispari === 'pari'){
        alert('Hai vinto')
    }
    
    else {
        alert('Hai perso')
    }

})











