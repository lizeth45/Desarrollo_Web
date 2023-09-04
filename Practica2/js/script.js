$(document).ready(function() {
    //Enfocando por defecto la card de rfc
    $("#fapi").hide();


    // Capturar los elementos HTML para calculo RFC
    var nomInput = $("#nombre");
    var appatInput = $("#appat");
    var apmatInput = $("#apmat");
    var fechanacInput = $("#fechanac");

    // Agregar evento click al botón
    $("#btnRfc").click(function() {
        var dig1 = (appatInput.val().substring(0,2)).toUpperCase();
        var dig2 = (apmatInput.val().substring(0,1)).toUpperCase();
        var dig3 = (nomInput.val().substring(0,1)).toUpperCase();
       
        if(nomInput .val() != "" && appatInput .val() !="" && apmatInput.val() !="" && fechanacInput.val() !=""){
            $("#resultrfc").val(dig1+dig2+dig3+fechanacInput.val().substring(2,4)+fechanacInput.val().substring(5,7)+fechanacInput.val().substring(8,10)+"TK0");
        }else{
            alert("Llena todos los campos.");
        }
    });
    
    $("#clean").click(function(){
        nomInput.val("");
        appatInput.val("");
        apmatInput.val("");
        fechanacInput.val("");
        $("#resultrfc").val("");
    });

    $("#clean2").click(function(){
        $("#idUser").val("");
        $("#nameAPI").val("");
        $("#emailAPI").val("");
    });

    // Agregar evento click al botón
    $("#btnApi").click(function() {

        if($("#idUser").val()!=""){
            // Realiza una solicitud AJAX para obtener información del usuario
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/users/" + $("#idUser").val(),
                method: "GET",
                dataType: "json", // Esperamos recibir datos en formato JSON
                success: function(data) {
                    // Actualiza la información del usuario en la página
                    $("#nameAPI").val(data.name);
                    $("#emailAPI").val(data.email);
                },
                error: function() {
                    alert("No hay datos en API para el ID "+$("#idUser").val());
                }
            });
        }else{
            alert('Debe ingresar un ID.');
        }
    });


    $("#rfc").click(function(){
        $("#frfc").show();
        $("#fapi").hide();
    });

    $("#api").click(function(){
        $("#frfc").hide();
        $("#fapi").show();
    });

});
