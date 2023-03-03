const DNI = prompt("Dime el numero de tu DNI") //Le pido al usuario su numero de DNI


const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
//El numero no puede ser mayor a 99999999 y tampoco puede ser menor a 0
if (DNI > 99999999 || DNI < 0) {
    alert("Numero introducido incorrecto")
}else{
    //Divido el numero del DNI entre 23
    let num = DNI % 23
    alert(`${DNI}${letras[num]}`)
}



//He usado Visual Studio Code y la web de Javascript.info para buscar algunas cosas.