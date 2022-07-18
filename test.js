//inicio de declaracion de variables globales
const gradoE = 470  
const gradoD = 582
const gradoC = 670
const cat0 = 1
const cat1 = 4.29
const cat2 = 4.87
const cat3 = 6.56
const cat4 = 6.11
const cat5 = 3.98
const brutoneto = 15

//inicio de declaracion de variables locales
let unidadretributiva = 128.47 //el usuario tiene que colocar el valor actual de la unidad retributiva
let gradoelegido = 'C' //el usuario elije la opcion E, D, C
let categoriaelegida = '3' //el usuario elije la categoria 1,2,3,4,5
let gradosincat = "" // se asigna la constante elegida
let resultadoB = ""
let resultadoN = ""

//inicio de las operaciones logicas

//asignar el valor real del sueldo marcado

if (gradoelegido === "E") {
                        gradosincat = (gradoE * unidadretributiva); }
                        else if (gradoelegido === "D") {
                                gradosincat = (gradoD * unidadretributiva);  }
                                else {
                                    gradosincat = (gradoC * unidadretributiva); }


resultadoB = (gradosincat * categoriaelegida);
resultadoN = (resultadoB % brutoneto);
alert (gradoelegido)
alert (categoriaelegida)
alert (gradosincat)


alert (resultadoN);




// procedimiento grado elegido
//Tomar variable del input del texto. que valide que solo sea letra E D y C 


//procedimiento de la categoria elegida
//tomar variable del input del texto. que valide que solo sea 0 1 2 3 o 4





//la pagina deberia decir:
//Si no sabes el monto de la unidad retributiva:
//JUNIO 2022 = 128.47
//AGOSTO 2022 = 141.76
//OCTUBRE 2022 = 155.05
//ENERO 2023 = 166.13
//MARZO 2023 = 177.20


