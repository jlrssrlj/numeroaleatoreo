let numeroSecreto = 0;
let intentos= 1;
console.log(numeroSecreto);
let numeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p',`acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', ' el numero secreto es menor ')
        }else{
            asignarTextoElemento('p',' El numero secreto es mayor !')
        }
    intentos++;
    limpiarJuego();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =Math.floor(Math.random()*numeroMaximo)+1
    console.log(numeroGenerado);
    console.log(numeroSorteado);
    if(numeroSorteado.length== numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
    }else{
        if(numeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numeroSorteado.push(numeroGenerado)
            return numeroGenerado
        }
    }
    
    
}
function limpiarJuego() {
    document.querySelector('#valorUsuario').value = '';   
    
    
}
function condicionesIniciales(params) {
        
    asignarTextoElemento('h1','Juego numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 a ${numeroMaximo}`);  
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}
function reiniciarJuego() {
    //Limpiar caja
    limpiarJuego();
    //Indicar mensaje de intervalo de numero
    condicionesIniciales();
       
    //dejar el Boton desabilitado
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   
}
condicionesIniciales();