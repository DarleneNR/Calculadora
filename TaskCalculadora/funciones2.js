// Segunda Calculadora

var result = document.getElementById("result");

function multiplication(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var mult = parseInt(n1) * parseInt(n2);
    result.textContent = result.textContent + mult;

}








// // Variables para la operaciones
// var number1;
// var number2;
// var type_operation;

// function inicio(){
//     // Obteniendo los datos de los botonones para convertirlos en elementos
//     var result = document.getElementById("result");
//     var clean = document.getElementById("clean");
//     var sum = document.getElementById("sum");
//     var subt = document.getElementById("subt");
//     var multiplication = document.getElementById("multiplication");
//     var div = document.getElementById("div");
//     var same = document.getElementById("same");
//     var one = document.getElementById("one");
//     var two = document.getElementById("two");
//     var three = document.getElementById("three");
//     var four = document.getElementById("four");
//     var five = document.getElementById("five");
//     var six = document.getElementById("six");
//     var seven = document.getElementById("seven");
//     var eight = document.getElementById("eight");
//     var nine = document.getElementById("nine");
//     var zero = document.getElementById("zero");

//     // Eventos
//     // Al presionar el número este se mostrará
//     one.onclick = function(e){
//         result.textContent = result.textContent + "1";
//     }
//     two.onclick = function(e){
//         result.textContent = result.textContent + "2";
//     }
//     three.onclick = function(e){
//         result.textContent = result.textContent + "3";
//     }
//     four.onclick = function(e){
//         result.textContent = result.textContent + "4";
//     }
//     five.onclick = function(e){
//         result.textContent = result.textContent + "5";
//     }
//     six.onclick = function(e){
//         result.textContent = result.textContent + "6";
//     }
//     seven.onclick = function(e){
//         result.textContent = result.textContent + "7";
//     }
//     eight.onclick = function(e){
//         result.textContent = result.textContent + "8";
//     }
//     nine.onclick = function(e){
//         result.textContent = result.textContent + "9";
//     }
//     zero.onclick = function(e){
//         result.textContent = result.textContent + "0";
//     }

//     // Operaciones
//     sum.onclick = function(e){
//         number1 = result.textContent;
//         type_operation = "+";
//         clean_screen();
//     }

//     subt.onclick = function(e){
//         number1 = result.textContent;
//         type_operation = "-";
//         clean_screen();
//     }

//     multiplication.onclick = function(e){
//         number1 = result.textContent;
//         type_operation = "×";
//         clean_screen();
//     }

//     div.onclick = function(e){
//         number1 = result.textContent;
//         type_operation = "÷";
//         clean_screen();
//     }

//     clean.onclick = function(e){
//         reset();
//     }
    
//     // Obteniendo el segundo número para la operación
//     same.onclick = function(e){
//         number2 = result.textContent;
//         solve();
//     }
// }
