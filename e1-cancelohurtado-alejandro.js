let num = prompt('Dime un numero y te digo su factorial') //Le pido un numero al usuario

let numero = 1

//Recorro el numero restandole hasta que llegue al numero 0
for (let i = num;i>0;i--) {
    //Multiplico el numero i por el resultado
    numero *= i
}

alert(numero)


//He usado Visual Studio Code































// function rot13(texto) {
//   var resultado = "";
  
//   // Recorrer cada letra del texto
//   for (var i = 0; i < texto.length; i++) {
//     var c = texto.charCodeAt(i);

//     // Si es una letra mayúscula
//     if (c >= 65 && c <= 90) {
//       resultado += String.fromCharCode((c - 65 + 13) % 26 + 65);
//     }
//     // Si es una letra minúscula
//     else if (c >= 97 && c <= 122) {
//       resultado += String.fromCharCode((c - 97 + 13) % 26 + 97);
//     }
//     // Si no es una letra (espacio, signos de puntuación, etc.)
//     else {
//       resultado += texto.charAt(i);
//     }
//   }
  
//   return resultado;
// }

// console.log(rot13("hola"))



// function convertRot13(str) {
//   var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
//   var index = x => input.indexOf(x);
//   return str
//     .split('')
//     .map(x => index(x) > -1 ? output[index(x)] : x)
//     .join('');
// }

// console.log(convertRot13('ubyn'));
// // Output: "hello"
