function suma(){

    // A estas variables se les asigna como valor con campos con los ID mencionados
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    // Aquí se está pasando los datos en formato numérico para que se pueda hacer la operación sin problemas 
    var sum = parseInt(n1) + parseInt(n2);

    alert("La suma de los números es: " + sum);
}