const DNI = prompt("Dime el numero de tu DNI")


const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']

if (DNI >= 99999999 || DNI < 0) {
    alert("Numero introducido incorrecto")
}else{
    let num = DNI % 23
    alert(`${DNI}${letras[num]}`)
}