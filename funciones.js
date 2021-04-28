function suma(){

    // A estas variables se les asigna como valor con campos con los ID mencionados
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var n3 = document.getElementById("num3").value;
    var n4 = document.getElementById("num4").value;
    // Aquí se está pasando los datos en formato numérico para que se pueda hacer la operación sin problemas 
    var sum1 = parseInt(n1) + parseInt(n2);
    var sum2 = parseInt(n3) + parseInt(n4);

    var mult = parseInt(sum1) * parseInt(sum2);
    alert("La multiplicación de la suma de los números es: " + mult);
}