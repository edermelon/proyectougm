
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
    var referencia=database.ref("AlumnosAlta");
    var AlumnosAlta={};


firebase.auth().onAuthStateChanged(function(user) {
  if (user)
  {
    console.log(user);
    console.log('Usuario: '+user.uid+' está logueado con '+user.providerData[0].providerId);
    var logueado='<li><p class="navbar-text navbar-center">'+user.email+'</p></li>';
   logueado+='<li><button type="button" class="btn btn-warning navbar-btn" id="botonLogout">Salir</button></li>';

   $(logueado).appendTo('.nav');
   $("#botonLogout").click(desconectar);

} else
{
    console.log('Usuario no logueado');
    location.assign('login.html');
}
});

function desconectar()
{
    firebase.auth().signOut().then(function() {
       location.assign('index.html');
   }, function(error)
   {
      alert("Error al intentar desconectarse.");
  });

}

referencia.on('value',function(datos)
{
    // Eliminamos el contenido del listado para actualizarlo.
    $("#listado div.row").remove();

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

           table+='<thead>';
           table+='<tr>' 
           table+='<td>'+'<button type="button" class="btn btn-warning" onclick="editarProducto(\''+indice+'\')">Editar alumno</button>'+'<th>'+'     ';
           table+='<td>'+'<button type="button" class="btn btn-danger" onclick="borrarProducto(\''+indice+'\')">Borrar alumno</button>'+'<th';
           table+='</tr>' 
           table+='</thead>';
           
      
           table+='<br>'
           table+='<br>'
        
$(table).appendTo('#listado');

        });


},function(objetoError){
    console.log('Error de lectura:'+objetoError.code);
});

function editarProducto(id)
{
    // Para pasar el ID a otro proceso lo hacemos a través de window.name
    window.name= id;

    // Cargamos la página editarproducto.html
    location.assign('editaralumno.html');
}

function borrarProducto(id)
{
    if (confirm("¿Está seguro/a de que quiere borrar este artículo?") == true)
    {
        referencia.child(id).remove();
    }
}
