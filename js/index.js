$(document).ready(function()
 {
    // Inicializar la base de datos
   var config = {
    apiKey: "AIzaSyATiAXo92f60gVDiVXifzg3nxCmPcrKFGk",
    authDomain: "ugm1-d3f52.firebaseapp.com",
    databaseURL: "https://ugm1-d3f52.firebaseio.com",
    projectId: "ugm1-d3f52",
    sstorageBucket: "ugm1-d3f52.appspot.com",
    messagingSenderId: "447991466330"
};

    firebase.initializeApp(config);

    var database = firebase.database();

    // Fijarse que la ruta de partida ahora es la colección productos:
    var referencia=database.ref("AlumnosAlta");

    var AlumnosAlta={};


    referencia.on('value',function(datos)
    {
        AlumnosAlta=datos.val();

        // Recorremos los productos y los mostramos
        $.each(AlumnosAlta, function(indice,valor)
        {
        
            var table = '<table class="ui celled table" id="users-table"'+indice+'"><div class="col-md-3 cabeceraProducto">';

           table+='<thead>';
           table+='<tr>'+'<th>'+'Nombre:'+'</th>';
           table+='<th>Apellido Paterno:'+' </th>';
           table+='<th>Apellido Materno:'+' </th>';
           table+='<th>Edad:'+'</th>';
           table+='<th>Procedencia:'+'</th>';
           table+='<th>Sistema Educativo:'+'</th>';
           table+='<th>Turno del Alumno:'+'</th>';
           table+='</tr></thead>';

           table+='<tbody>';
           table+='<tr>';
           table+='<td>'+valor.nombre+'</th>';
           table+='<td>' +valor.ape1+'</th>';
           table+='<td>'+valor.ape2+'</th>';
           table+='<td>' +valor.edad+'</th>';
           table+='<td>'+valor.proc+'</th>';
           table+='<td>' +valor.sistema+'</th>';
           table+='<td>'+valor.turno+'</th>';
           table+='</tbody>';
           table+='</tr>';

           table+='<thead>';
           table+='<tr>';
           table+='<th>Fecha de nacimiento:</th>';
           table+='<th>Correo Electronico:</th>';
           table+='<th>Telefono de casa:</th>';
           table+='<th>Telefono celular:</th>';
           table+='<th>Oferta:</th>';
           table+='<th>Plantel:</th>';
           table+='<th>Carrera:</th>';
           table+='</tr></thead>';

            table+='<tbody>';
            table+='<tr>';
            table+='<td>'+valor.date+'</td>';
            table+='<td>' +valor.email+'</th>';
           table+='<td>'+valor.telcasa+'</th>';
           table+='<td>' +valor.telcel+'</th>';
           table+='<td>'+valor.oferta+'</th>';
           table+='<td>' +valor.plantel+'</th>';
           table+='<td>'+valor.carrera+'</th>';
           table+='</tr>';
           table+='</tbody>';
           
           table+='</table>';
           table+='<br>'
           table+='<br>'
           table+='<br>'

$(table).appendTo('#listado');

        });

    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

});
