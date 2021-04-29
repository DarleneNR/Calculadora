// Primera Calculadora

// Variables para la operaciones
var numero1;
var numero2;
var tipo_operacion;

function init(){
    // Obteniendo los datos de los botonones para convertirlos en elementos
    var resultado = document.getElementById("resultado");
    var limpiar = document.getElementById("limpiar");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    // Eventos
    // Al presionar el número este se mostrará
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    // Operaciones
    suma.onclick = function(e){
        numero1 = resultado.textContent;
        tipo_operacion = "+";
        limpiar_pantalla();
    }

    resta.onclick = function(e){
        numero1 = resultado.textContent;
        tipo_operacion = "-";
        limpiar_pantalla();
    }

    multiplicacion.onclick = function(e){
        numero1 = resultado.textContent;
        tipo_operacion = "×";
        limpiar_pantalla();
    }

    division.onclick = function(e){
        numero1 = resultado.textContent;
        tipo_operacion = "÷";
        limpiar_pantalla();
    }

    limpiar.onclick = function(e){
        resetear();
    }
    
    // Obteniendo el segundo número para la operación
    igual.onclick = function(e){
        numero2 = resultado.textContent;
        resolver();
    }
}

// Limpiar pantalla
function limpiar_pantalla(){
    resultado.textContent = "";
}

// Resetear Calculadora
function resetear(){
    resultado.textContent = "";
    numero1 = 0;
    numero2 = 0;
    tipo_operacion = "";
} 

// Resolución de operación
function resolver(){
    var res = 0;
    switch(tipo_operacion){
        case "+":
            res = parseFloat(numero1) + parseFloat(numero2)
            break;
        case "-":
            res = parseFloat(numero1) - parseFloat(numero2)
            break;
        case "×":
            res = parseFloat(numero1) * parseFloat(numero2)
            break;
        case "÷":
            res = parseFloat(numero1) / parseFloat(numero2)
            break;
    }
    // Volver a 0 las variables 
    resetear();
    // Ver el resultado de la opración que ya se guardó en la variable res
    resultado.textContent = res;

}