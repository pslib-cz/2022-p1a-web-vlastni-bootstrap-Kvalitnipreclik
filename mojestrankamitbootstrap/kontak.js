

function ulozeni(){
    const udaje ={
      
    }
    udaje.jmeno = document.getElementById("jmeno").value
    udaje.prijmeni = document.getElementById("prijmeni").value
    udaje.email = document.getElementById("email").value
    udaje.cislo = document.getElementById("cislo").value
    udaje.dotaz = document.getElementById("dotaz").value
    console.log(udaje)

    if(udaje.jmeno != "" && udaje.prijmeni != "" && udaje.email != "" && udaje.cislo != "" && udaje.dotaz != "" ){
    alert("váš dotaz byl odeslán :D")
    } else {
        alert("vyplňte všechny údaje!")
    }

}



