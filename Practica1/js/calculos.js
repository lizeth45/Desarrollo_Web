$(document).ready(function() {
    // Espera a que el documento esté listo

    // Capturar los elementos HTML
    var num1Input = $("#num1");
    var num2Input = $("#num2");
    var optionsSelect = $("#options");
    var resultInput = $("#resultado");

    // Agregar evento click al botón
    $("#btnEjecutar").click(function() {
        var num1 = parseFloat(num1Input.val());
        var num2 = parseFloat(num2Input.val());
        var selectedOption = optionsSelect.val();

        // Realizar la operación según la opción seleccionada
        if(isNaN(num1) || isNaN(num2)){
            alert("Debe completar los campos.");
        }else{
            if (selectedOption == "opcion1") {
                resultInput.val(num1 + num2);
            } else if (selectedOption == "opcion2") {
                resultInput.val(num1 - num2);
            } else if (selectedOption == "opcion3") {
                resultInput.val(num1 / num2);
            } else if (selectedOption == "opcion4") {
                resultInput.val(num1 * num2);
            } else {
                alert("Selecciona la operación!!");
            }
        }
    });

    // Agregar evento click al botón "Limpiar"
    $("#btnLimpiar").click(function() {
        num1Input.val(""); // Limpia el campo num1
        num2Input.val(""); // Limpia el campo num2
        resultInput.val(""); // Limpia el campo resultado
        optionsSelect.val("Operación")
    });
});
