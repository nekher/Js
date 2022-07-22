//inicio de declaracion de variables globales
const catF = 452; //cantidad de UR de la categoria E
//cantidad de UR de aumento, de acuerdo al GRADO en la categoria E

const vectorF[452,461,470,479,560.8,574.8,589.8,604.8,693.5,714.59,736.59];


const catE = 470; //cantidad de UR de la categoria E
//cantidad de UR de aumento, de acuerdo al GRADO en la categoria E
const gradoE1 = 481;
const gradoE2 = 495;
const gradoE3 = 513;
const gradoE4 = 602.5;
const gradoE5 = 622.5;
const gradoE6 = 643.5;
const gradoE7 = 667.5;
const gradoE8 = 763;
const gradoE9 = 790;
const gradoE10= 818;
const vectorE = [470, 481, 495, 513, 602.5, 622.5, 643.5, 667.5, 763, 790, 818];

const catD = 582; //cantidad de UR de la categoria D
//cantidad de UR de aumento, de acuerdo al GRADO en la categoria D
const gradoD1 = 600;
const gradoD2 = 622;
const gradoD3 = 645;
const gradoD4 = 756.29;
const gradoD5 = 784.29;
const gradoD6 = 813.29;
const gradoD7 = 844.29;
const gradoD8 = 963.59;
const gradoD09 = 997.59;
const gradoD10= 1033.59;

const catC = 670; //cantidad de UR de la categoria C
//cantidad de UR de aumento, de acuerdo al GRADO en la categoria C
const gradoC1 = 697;
const gradoC2 = 731;
const gradoC3 = 779;
const gradoC4 = 904.5;
const gradoC5 = 940.5;
const gradoC6 = 979.5;
const gradoC7 = 1020.5;
const gradoC8 = 1164;
const gradoC9 = 1209;
const gradoC10= 1257;









function calculoF(){
    if (gradoElegido == 0)
    {
        sueldoBruto = catSinGrado.toFixed();
        sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;
    }
    else if (gradoElegido == 1) 
        {
        catSinGrado = gradoF1 * uR    
        sueldoBruto = catSinGrado.toFixed();
        sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
    else if (gradoElegido == 2) 
        {
            catSinGrado = gradoF2 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
    else if (gradoElegido == 3)
        {
            catSinGrado = gradoF3 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
    else if (gradoElegido== 4)
        {
            catSinGrado = gradoF4 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
    else if (gradoElegido == 5)
        {
            catSinGrado = gradoF5 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 6)
        {
            catSinGrado = gradoF6 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 7)
        {
            catSinGrado = gradoF7 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 8)
        {
            catSinGrado = gradoF8 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 9)
        {
            catSinGrado = gradoF9 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 10)
        {
            catSinGrado = gradoF10 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else{ 
            alert ('che...sabes contar hasta 10 no?, pone un grado correcto pa...');
        }
}

function calculoE(){
    if (gradoElegido == 0)
    {
        sueldoBruto = catSinGrado.toFixed();
        sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;
    }
    else if (gradoElegido == 1) 
        {
        catSinGrado = gradoE1 * uR    
        sueldoBruto = catSinGrado.toFixed();
        sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
    else if (gradoElegido == 2) 
        {
            catSinGrado = gradoE2 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
    else if (gradoElegido == 3)
        {
            catSinGrado = gradoE3 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
    else if (gradoElegido== 4)
        {
            catSinGrado = gradoE4 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
    else if (gradoElegido == 5)
        {
            catSinGrado = gradoE5 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 6)
        {
            catSinGrado = gradoE6 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 7)
        {
            catSinGrado = gradoE7 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 8)
        {
            catSinGrado = gradoE8 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 9)
        {
            catSinGrado = gradoE9 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 10)
        {
            catSinGrado = gradoE10 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else{ 
            alert ('che...sabes contar hasta 10 no?, pone un grado correcto pa...');
        }
}
function calculoD(){
    if (gradoElegido == 0)
    {
        sueldoBruto = catSinGrado.toFixed();
        sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
        alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;
    }
    else if (gradoElegido == 1)
        {
            catSinGrado = gradoD1 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 2)
        {
            catSinGrado = gradoD2 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 3)
        {
            catSinGrado = gradoD3 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 4)
        {
            catSinGrado = gradoD4 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 5)
        {
            catSinGrado = gradoD5 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 6)
        {
            catSinGrado = gradoD6 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 7)
        {
            catSinGrado = gradoD7 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 8)
        {
            catSinGrado = gradoD8 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }else if (gradoElegido == 9)
        {
            catSinGrado = gradoD9 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 10)
        {
            catSinGrado = gradoD10 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else{ 
            alert ('che...sabes contar hasta 10 no?, pone un grado correcto pa...');
        }
}
function calculoC(){
    if (gradoElegido == 0)
    {
        sueldoBruto = catSinGrado.toFixed();
        sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
        alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto) ;
    }
    else if (gradoElegido == 1)
        {
            catSinGrado = gradoC1 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 2)
        {
            catSinGrado = gradoC2 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 3)
        {
            catSinGrado = gradoC3 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 4)
        {
            catSinGrado = gradoC4 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 5)
        {
            catSinGrado = gradoC5 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 6)
        {
            catSinGrado = gradoC6 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 7)
        {
            catSinGrado = gradoC7 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 8)
        {
            catSinGrado = gradoC8 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }else if (gradoElegido == 9)
        {
            catSinGrado = gradoC9 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else if (gradoElegido == 10)
        {
            catSinGrado = gradoC10 * uR    
            sueldoBruto = catSinGrado.toFixed();
            sueldoNeto = (sueldoBruto - (sueldoBruto * descBruto)).toFixed() ;
    alert ('elsueldo bruto que cobraras es ' +  sueldoBruto + ' y el sueldo en mano es: ' + sueldoNeto);
        }
        else{ 
            alert ('che...sabes contar hasta 10 no?, pone un grado correcto pa...');
        }
}