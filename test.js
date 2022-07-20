//inicio de declaracion de variables globales
const catE = 470; 
const catD = 582;
const catC = 670;
const grado0 = 1;
const grado1 = 4.29;
const grado2 = 4.87;
const grado3 = 6.56;
const grado4 = 6.11;
const grado5 = 3.98;
const brutoneto = 15;
const btn1 = document.querySelector('button');

btn1.onclick = function() {
    // let planta = prompt('¿Sos planta permanente? SI o NO');
     var categoriaelegida = prompt('Cual es tu categoria?');
     var gradoelegido = prompt('Cual es tu grado?');
     alert('Elegiste que tu categoria es ' + categoriaelegida + ' que sos grado ' +gradoelegido + ',que tristeza!');
      }



//inicio de declaracion de variables locales
//let planta = 0
//var categoriaelegida = ;
//var gradoelegido = ;
//var unidadretributiva = ; //el usuario tiene que colocar el valor actual de la unidad retributiva
//var categoria = categoriaelegida; //el usuario elije la opcion E, D, C
//var grado = gradoelegido; //el usuario elije la categoria 1,2,3,4,5
//var catsingrado = ; // se asigna la constante elegida
//var resultadoB = (catsingrado * gradoelegido);
//var resultadoN = (resultadoB % brutoneto);





//inicio de las operaciones logicas
//asignar el valor real del sueldo elegido
document.getElementById("categoria").innerHTML = categoriaelegida;
document.getElementById("grado").innerHTML = 5 + 6;
document.getElementById("ur").innerHTML = 5 + 6;
/*if (categoria === 'e') {
                        catsingrado = catE * unidadretributiva;
                        }
                        else if (categoria === 'd') {
                                catsingrado = (catD * unidadretributiva); 
                                }
                                else catsingrado = (catC * unidadretributiva); 
*/                                     





