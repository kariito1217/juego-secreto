//let parrafo = document.querySelector('p');
//parrafo.innerHTML="Indica un numero del 1 al 10";

let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteado = [];
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);
    document.getElementById('reiniciar').removeAttribute('disabled');
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1 ? 'vez':'veces')}`);
    }else{
        //el usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        //Si el numero generado esta incluido en la lista
         if(listaNumerosSorteado.includes(numeroGenerado)){ //este metodo recorre el arreglo y verifica si algo ya existe
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteado.push(numeroGenerado);
        return numeroGenerado;
        }
    
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio(intervalo de numeros)
    //generar el numero aeleatorio
    //inicializar  el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
   document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();