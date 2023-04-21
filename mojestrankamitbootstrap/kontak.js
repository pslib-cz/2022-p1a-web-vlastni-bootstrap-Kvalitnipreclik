
let counter = 0
function ulozeni(){
    if(counter === 1){
        alert("Váš druhý dotaz byl už odeslán! snad už vám je všechno jasné.")
        
    } else if( counter === 2){
        alert("Doufáme, že tohle byl váš poslední dotaz.")
    }else if( counter >2){
        alert("Váš dotaz byl zkartován.")
    }else {  
    alert("Váš první dotaz byl odeslán ^-^")
    }
    counter++
}



