//inicio de declaracion de variables globales

const vectorF = [452, 461, 470, 479, 493, 574.8, 589.8, 604.8, 693.5, 714.59, 736.59];
const vectorE = [470, 481, 495, 513, 602.5, 622.5, 643.5, 667.5, 763, 790, 818];
const vectorD = [582, 600, 622, 645, 756.39, 784.29, 813.29, 844.29, 963.59, 997.59, 1033.59];
const vectorC = [670, 697, 731, 779, 904.5, 940.5, 979.5, 1020.5, 1164, 1209, 1257];

const vectorUr = [128.47, 141.76, 155.05, 166.13, 177.20];

//Cantidad de descuentos que se aplican en % del sueldo BRUTO SIN contar el Sindicato
const vectordescBruto = [0.13, 0.15]; //se multiplica el valor del bruto y se resta del total 
//Cantidad de descuento que se aplica en % del sueldo BRUTO PARA el Sindicato


//Variables que el usuario CARGA
var categoriaElegida = ''; // Variable que tendra el valor de la categoria elegida x le usuarie
var gradoElegido = ''; // Variable que tendra el valor del grado elegido x le usuarie
var uR = 0;
var pPoNo = '';

//Variables que usaran las funciones
var catSinGrado = 0;   
var sueldoBruto = 0;
var sueldoNeto = 0;
var sindicato = 0;



//RECORDAR: Para usar una funcion dentro de otra, la misma se menciona SIN el "function" solo se nombra, cual variable. Luego en otra parte dentro del script,
//debe estar declarada como corresponde. function nombre(){}; 
//RECORDAR: Si se usa LET, dicha variable estara disponible unicamente dentro del bloque que se usa, para que la misma variable pueda ser de uso GLOBAL,
//debe ser creada usando el comando VAR. Asi mismo, cuando se menciona DENTRO de una funcion, debe ser mencionada DIRECTAMENTE (sin el "var"),
//de colocar LET, o VAR, dentro de la funcion, la misma generara NUEVAS VARIABLES con EL MISMO NOMBRE, por ende, no funcionara de forma global.


//inicio de las operaciones logicas

function calculosueldo(){
uR = document.querySelector('#fmes').value;
categoriaElegida = document.querySelector('#fcategoria').value;
gradoElegido = document.querySelector('#fgrado').value;
sindicato = document.querySelector('#fsindicato').value;

    if (categoriaElegida == 'F'){
             catSinGrado = vectorF[gradoElegido] * vectorUr[uR];
             sueldoBruto = catSinGrado.toFixed();
             sueldoNeto = (sueldoBruto - (sueldoBruto * vectordescBruto[sindicato])).toFixed();
             plantaoNo();
         }
            else if(categoriaElegida == 'E'){
                catSinGrado = vectorE[gradoElegido] * vectorUr[uR];
                sueldoBruto = catSinGrado.toFixed();
                sueldoNeto = (sueldoBruto - (sueldoBruto * vectordescBruto[sindicato])).toFixed();
                plantaoNo();
            }
                else if(categoriaElegida == 'D'){
                    catSinGrado = vectorD[gradoElegido] * vectorUr[uR];
                    sueldoBruto = catSinGrado.toFixed();
                    sueldoNeto = (sueldoBruto - (sueldoBruto * vectordescBruto[sindicato])).toFixed();
                    plantaoNo();
                }
                    else if (categoriaElegida == 'C'){
                        catSinGrado = vectorC[gradoElegido] * vectorUr[uR];
                        sueldoBruto = catSinGrado.toFixed();
                        sueldoNeto = (sueldoBruto - (sueldoBruto * vectordescBruto[sindicato])).toFixed();
                        plantaoNo();
                    } 
                        else{
                            alert ('CAPO, pone una categoria que valga la pena calcular...');
                        }
                }
    
function plantaoNo(){
    pPoNo = document.querySelector('#fplanta').value;

                    if (pPoNo == 'N'){
                    sueldoBruto = (catSinGrado + (catSinGrado * 0.075)).toFixed();
                    alert ('el sueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;
                     }
                        else {
                        alert ('el sueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;           
                        }
                 }
             


