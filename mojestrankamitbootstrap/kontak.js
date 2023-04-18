

function ulozeni(){
    const udaje ={
      
    }
    udaje.name = document.getElementById("name").value
    
    udaje.email = document.getElementById("email").value
    udaje.subject = document.getElementById("subject").value
    udaje.exampleFormControlTextarea1 = document.getElementById("dotaz").value
    console.log(udaje)

    if(udaje.jmeno != "" && udaje.email != "" && udaje.subject != "" && udaje.exampleFormControlTextarea1 != "" ){
    alert("váš dotaz byl odeslán :D")
    } else {
        alert("vyplňte všechny údaje!")
    }

}



