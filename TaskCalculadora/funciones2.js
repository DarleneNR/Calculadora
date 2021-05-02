// Segunda Calculadora

function limpiar(){
    document.getElementById("calculadora2").reset();
}

function sum(){
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    document.getElementById("result").innerHTML = num1 + num2;
}

function subt(){
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    document.getElementById("result").innerHTML = num1 - num2;
}

function mult(){
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    document.getElementById("result").innerHTML = num1 * num2;
}

function div(){
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    document.getElementById("result").innerHTML = num1 / num2;
}