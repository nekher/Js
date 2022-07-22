//inicio de declaracion de variables globales
const catF = 452; //cantidad de UR de la categoria F
const vectorF = [452,461,470,479,560.8,574.8,589.8,604.8,693.5,714.59,736.59];

const catE = 470; //cantidad de UR de la categoria E
const vectorE = [470, 481, 495, 513, 602.5, 622.5, 643.5, 667.5, 763, 790, 818];

const catD = 582; //cantidad de UR de la categoria D
const vectorD = [582, 600, 622, 645, 756.39, 784.29, 813.29, 844.29, 963.59, 997.59, 1033.59];

const catC = 670; //cantidad de UR de la categoria C
const vectorC = [670, 697, 731, 779, 904.5, 940.5, 979.5, 1020.5, 1164, 1209, 1257];

//Cantidad de descuentos que se aplican en % del sueldo BRUTO SIN contar el Sindicato
const descBruto = 0.13; //se multiplica el valor del bruto y se resta del total 
//Cantidad de descuento que se aplica en % del sueldo BRUTO PARA el Sindicato
const descSindi = 2; //idem a descBruto

//Variables que el usuario CARGA
var categoriaElegida = ''; // Variable que tendra el valor de la categoria elegida x le usuarie
var gradoElegido = ''; // Variable que tendra el valor del grado elegido x le usuarie
var uR = 0; // Variable que tendra el valor de la Unidad Retributiva de acuerdo al mes

//Variables que usaran las funciones
var catSinGrado = 0;   
var sueldoBruto = 0;
var sueldoNeto = 0;


//RECORDAR: Para usar una funcion dentro de otra, la misma se menciona SIN el "function" solo se nombra, cual variable. Luego en otra parte dentro del script,
//debe estar declarada como corresponde. function nombre(){}; 
//RECORDAR: Si se usa LET, dicha variable estara disponible unicamente dentro del bloque que se usa, para que la misma variable pueda ser de uso GLOBAL,
//debe ser creada usando el comando VAR. Asi mismo, cuando se menciona DENTRO de una funcion, debe ser mencionada DIRECTAMENTE (sin el "var"),
//de colocar LET, o VAR, dentro de la funcion, la misma generara NUEVAS VARIABLES con EL MISMO NOMBRE, por ende, no funcionara de forma global.


//inicio de las operaciones logicas


function calculosueldo(){
categoriaElegida = prompt('Cual es tu categoria?');
gradoElegido = prompt('Cual es tu grado?');
uR = prompt('Cuanto valen las UR hoy?');
         //testing mejora del script    
         //INICIO Del proceso
         if (categoriaElegida == 'f'){
             catSinGrado = vectorF[gradoElegido] * uR;
             sueldoBruto = catSinGrado.toFixed();
             sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
         alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;
         }
            else if(categoriaElegida == 'e'){
                catSinGrado = vectorE[gradoElegido] * uR;
                sueldoBruto = catSinGrado.toFixed();
                sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
            alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;
            }
                else if(categoriaElegida == 'd'){
                    catSinGrado = vectorD[gradoElegido] * uR;
                    sueldoBruto = catSinGrado.toFixed();
                    sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
                alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;
                }
                    else if (categoriaElegida == 'c'){
                        catSinGrado = vectorC[gradoElegido] * uR;
                        sueldoBruto = catSinGrado.toFixed();
                        sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
                    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;
                    } 
                        else{
                            alert ('CAPO, pone una categoria que valga la pena calcular...');
                        }
                }
    




