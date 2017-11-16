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

    var nombre;
    var edad;
    var ape1;
    var ape2;
    var proc;
    var sistema;
    var turno;
    var fecha;
    var email;
    var telcasa;
    var telcel;
    var oferta;
    var plantel;
    var carrera;


    // Chequeamos la autenticación antes de acceder al resto de contenido de este fichero.
    firebase.auth().onAuthStateChanged(function(user)
    {
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
        firebase.auth().signOut().then(function()
        {
           location.assign('index.html');
       }, function(error)
       {
          alert("Error al intentar desconectarse.");
      });
    }



    $("#busqueda").change(function()
    {
        nombre=$("#nombre").val();

        if (nombre)
        {   
            $("#btnBuscar").prop("disabled",false);
        }
        else
        {
            $("#btnBuscar").prop("disabled",true);
        }

    });



    $('#btnNombre').click(function() {

      $("#alert-error").remove();
      $("#users-table").remove();
      
      var nombre =$('#nombre').val();

      var usersArray = [];

      var referencia=database.ref("AlumnosAlta");

    referencia.orderByChild("nombre").equalTo(nombre).once("value").then(function(values){
        values.forEach(function(value){
            usersArray.push(value.val());
        })
        
        if(usersArray.length == 0){
            $('<div class="alert alert-danger text-center" id="alert-error"><strong>ALERTA! </strong>' +
                'No se encontraron usuario con el nombre : <strong>' + nombre + '</strong></div>').appendTo("#listado");            
        } else {
            var table = '<table class="table table-hover" id="users-table">';
            table+= '<thead>';
            table+= '<tr>'
            table+= '<th>Nombre</th>';
            table+= '<th>Apellido Paterno</th>';
            table+= '<th>Apellido Materno</th>';
            table+= '<th>Edad</th>';
            table+= '<th>Procedencia</th>';
            table+= '<th>Sistema Educativo</th>';
            table+= '<th>Turno</th>';
            table+= '<th>Fecha de nacimiento</th>';
            table+= '<th>Email</th>';
            table+= '<th>Tel Casa</th>';
            table+= '<th>Tel Celular</th>';
            table+= '<th>Oferta</th>';
            table+= '<th>Plantel</th>';
            table+= '<th>Carrera</th>';


            table+= '</tr';
            table+= '</thead>';
            table+= '<tbody>';

            usersArray.forEach(function(value){
                table+= '<tr>';
                table+= '<td>' + value.nombre + '</td>';
                table+= '<td>' + value.ape1 + '</td>';
                table+= '<td>' + value.ape2 + '</td>';
                table+= '<td>' + value.edad + '</td>';
                table+= '<td>' + value.proc + '</td>';
                table+= '<td>' + value.sistema + '</td>';
                table+= '<td>' + value.turno + '</td>';
                table+= '<td>' + value.date + '</td>';
                table+= '<td>' + value.email + '</td>';
                table+= '<td>' + value.telcasa + '</td>';
                table+= '<td>' + value.telcel + '</td>';
                table+= '<td>' + value.oferta + '</td>';
                table+= '<td>' + value.plantel + '</td>';
                table+= '<td>' + value.carrera+ '</td>';
                table+= '</tr>';
            });

            table+= '</tbody>';
            table+= '</table>';

            $(table).appendTo("#listado");
        }


    });

    });


      $('#btnEdad').click(function() {

      $("#alert-error").remove();
      $("#users-table").remove();
      
      var edad =$('#edad').val();

      var usersArray = [];

      var referencia=database.ref("AlumnosAlta");

    referencia.orderByChild("edad").equalTo(edad).once("value").then(function(values){
        values.forEach(function(value){
            usersArray.push(value.val());
        })
        
        if(usersArray.length == 0){
            $('<div class="alert alert-danger text-center" id="alert-error"><strong>ALERTA! </strong>' +
                'No se encontraron usuario con la edad : <strong>' + edad + '</strong></div>').appendTo("#listado");            
        } else {
            var table = '<table class="table table-hover" id="users-table">';
            table+= '<thead>';
            table+= '<tr>'
            table+= '<th>Nombre</th>';
            table+= '<th>Apellido Paterno</th>';
            table+= '<th>Apellido Materno</th>';
            table+= '<th>Edad</th>';
            table+= '<th>Procedencia</th>';
            table+= '<th>Sistema Educativo</th>';
            table+= '<th>Turno</th>';
            table+= '<th>Fecha de nacimiento</th>';
            table+= '<th>Email</th>';
            table+= '<th>Tel Casa</th>';
            table+= '<th>Tel Celular</th>';
            table+= '<th>Oferta</th>';
            table+= '<th>Plantel</th>';
            table+= '<th>Carrera</th>';


            table+= '</tr';
            table+= '</thead>';
            table+= '<tbody>';

            usersArray.forEach(function(value){
                table+= '<tr>';
                table+= '<td>' + value.nombre + '</td>';
                table+= '<td>' + value.ape1 + '</td>';
                table+= '<td>' + value.ape2 + '</td>';
                table+= '<td>' + value.edad + '</td>';
                table+= '<td>' + value.proc + '</td>';
                table+= '<td>' + value.sistema + '</td>';
                table+= '<td>' + value.turno + '</td>';
                table+= '<td>' + value.date + '</td>';
                table+= '<td>' + value.email + '</td>';
                table+= '<td>' + value.telcasa + '</td>';
                table+= '<td>' + value.telcel + '</td>';
                table+= '<td>' + value.oferta + '</td>';
                table+= '<td>' + value.plantel + '</td>';
                table+= '<td>' + value.carrera+ '</td>';
                table+= '</tr>';
            });

            table+= '</tbody>';
            table+= '</table>';

            $(table).appendTo("#listado");
        }


    });

    });



      $('#btnApe1').click(function() {

      $("#alert-error").remove();
      $("#users-table").remove();
      
      var ape1 =$('#ape1').val();

      var usersArray = [];

      var referencia=database.ref("AlumnosAlta");

    referencia.orderByChild("ape1").equalTo(ape1).once("value").then(function(values){
        values.forEach(function(value){
            usersArray.push(value.val());
        })
        
        if(usersArray.length == 0){
            $('<div class="alert alert-danger text-center" id="alert-error"><strong>ALERTA! </strong>' +
                'No se encontraron usuario con el apellido : <strong>' + ape1 + '</strong></div>').appendTo("#listado");            
        } else {
            var table = '<table class="table table-hover" id="users-table">';
            table+= '<thead>';
            table+= '<tr>'
            table+= '<th>Nombre</th>';
            table+= '<th>Apellido Paterno</th>';
            table+= '<th>Apellido Materno</th>';
            table+= '<th>Edad</th>';
            table+= '<th>Procedencia</th>';
            table+= '<th>Sistema Educativo</th>';
            table+= '<th>Turno</th>';
            table+= '<th>Fecha de nacimiento</th>';
            table+= '<th>Email</th>';
            table+= '<th>Tel Casa</th>';
            table+= '<th>Tel Celular</th>';
            table+= '<th>Oferta</th>';
            table+= '<th>Plantel</th>';
            table+= '<th>Carrera</th>';


            table+= '</tr';
            table+= '</thead>';
            table+= '<tbody>';

            usersArray.forEach(function(value){
                table+= '<tr>';
                table+= '<td>' + value.nombre + '</td>';
                table+= '<td>' + value.ape1 + '</td>';
                table+= '<td>' + value.ape2 + '</td>';
                table+= '<td>' + value.edad + '</td>';
                table+= '<td>' + value.proc + '</td>';
                table+= '<td>' + value.sistema + '</td>';
                table+= '<td>' + value.turno + '</td>';
                table+= '<td>' + value.date + '</td>';
                table+= '<td>' + value.email + '</td>';
                table+= '<td>' + value.telcasa + '</td>';
                table+= '<td>' + value.telcel + '</td>';
                table+= '<td>' + value.oferta + '</td>';
                table+= '<td>' + value.plantel + '</td>';
                table+= '<td>' + value.carrera+ '</td>';
                table+= '</tr>';
            });

            table+= '</tbody>';
            table+= '</table>';

            $(table).appendTo("#listado");
        }


    });

    });


 $('#btnApe2').click(function() {

      $("#alert-error").remove();
      $("#users-table").remove();
      
      var ape2 =$('#ape2').val();

      var usersArray = [];

      var referencia=database.ref("AlumnosAlta");

    referencia.orderByChild("ape2").equalTo(ape2).once("value").then(function(values){
        values.forEach(function(value){
            usersArray.push(value.val());
        })
        
        if(usersArray.length == 0){
            $('<div class="alert alert-danger text-center" id="alert-error"><strong>ALERTA! </strong>' +
                'No se encontraron usuario con el apellido : <strong>' + ape2 + '</strong></div>').appendTo("#listado");            
        } else {
            var table = '<table class="table table-hover" id="users-table">';
            table+= '<thead>';
            table+= '<tr>'
            table+= '<th>Nombre</th>';
            table+= '<th>Apellido Paterno</th>';
            table+= '<th>Apellido Materno</th>';
            table+= '<th>Edad</th>';
            table+= '<th>Procedencia</th>';
            table+= '<th>Sistema Educativo</th>';
            table+= '<th>Turno</th>';
            table+= '<th>Fecha de nacimiento</th>';
            table+= '<th>Email</th>';
            table+= '<th>Tel Casa</th>';
            table+= '<th>Tel Celular</th>';
            table+= '<th>Oferta</th>';
            table+= '<th>Plantel</th>';
            table+= '<th>Carrera</th>';


            table+= '</tr';
            table+= '</thead>';
            table+= '<tbody>';

            usersArray.forEach(function(value){
                table+= '<tr>';
                table+= '<td>' + value.nombre + '</td>';
                table+= '<td>' + value.ape1 + '</td>';
                table+= '<td>' + value.ape2 + '</td>';
                table+= '<td>' + value.edad + '</td>';
                table+= '<td>' + value.proc + '</td>';
                table+= '<td>' + value.sistema + '</td>';
                table+= '<td>' + value.turno + '</td>';
                table+= '<td>' + value.date + '</td>';
                table+= '<td>' + value.email + '</td>';
                table+= '<td>' + value.telcasa + '</td>';
                table+= '<td>' + value.telcel + '</td>';
                table+= '<td>' + value.oferta + '</td>';
                table+= '<td>' + value.plantel + '</td>';
                table+= '<td>' + value.carrera+ '</td>';
                table+= '</tr>';
            });

            table+= '</tbody>';
            table+= '</table>';

            $(table).appendTo("#listado");
        }


    });

    });

 $('#btnProc').click(function() {

      $("#alert-error").remove();
      $("#users-table").remove();
      
      var proc =$('#proc').val();

      var usersArray = [];

      var referencia=database.ref("AlumnosAlta");

    referencia.orderByChild("proc").equalTo(proc).once("value").then(function(values){
        values.forEach(function(value){
            usersArray.push(value.val());
        })
        
        if(usersArray.length == 0){
            $('<div class="alert alert-danger text-center" id="alert-error"><strong>ALERTA! </strong>' +
                'No se encontraron usuario con la procedencia : <strong>' + ape2 + '</strong></div>').appendTo("#listado");            
        } else {
            var table = '<table class="table table-hover" id="users-table">';
            table+= '<thead>';
            table+= '<tr>'
            table+= '<th>Nombre</th>';
            table+= '<th>Apellido Paterno</th>';
            table+= '<th>Apellido Materno</th>';
            table+= '<th>Edad</th>';
            table+= '<th>Procedencia</th>';
            table+= '<th>Sistema Educativo</th>';
            table+= '<th>Turno</th>';
            table+= '<th>Fecha de nacimiento</th>';
            table+= '<th>Email</th>';
            table+= '<th>Tel Casa</th>';
            table+= '<th>Tel Celular</th>';
            table+= '<th>Oferta</th>';
            table+= '<th>Plantel</th>';
            table+= '<th>Carrera</th>';


            table+= '</tr';
            table+= '</thead>';
            table+= '<tbody>';

            usersArray.forEach(function(value){
                table+= '<tr>';
                table+= '<td>' + value.nombre + '</td>';
                table+= '<td>' + value.ape1 + '</td>';
                table+= '<td>' + value.ape2 + '</td>';
                table+= '<td>' + value.edad + '</td>';
                table+= '<td>' + value.proc + '</td>';
                table+= '<td>' + value.sistema + '</td>';
                table+= '<td>' + value.turno + '</td>';
                table+= '<td>' + value.date + '</td>';
                table+= '<td>' + value.email + '</td>';
                table+= '<td>' + value.telcasa + '</td>';
                table+= '<td>' + value.telcel + '</td>';
                table+= '<td>' + value.oferta + '</td>';
                table+= '<td>' + value.plantel + '</td>';
                table+= '<td>' + value.carrera+ '</td>';
                table+= '</tr>';
            });

            table+= '</tbody>';
            table+= '</table>';

            $(table).appendTo("#listado");
        }


    });

    });

 $('#btnSist').click(function() {

      $("#alert-error").remove();
      $("#users-table").remove();
      
      var sistema =$('#sistema').val();

      var usersArray = [];

      var referencia=database.ref("AlumnosAlta");

    referencia.orderByChild("sistema").equalTo(sistema).once("value").then(function(values){
        values.forEach(function(value){
            usersArray.push(value.val());
        })
        
        if(usersArray.length == 0){
            $('<div class="alert alert-danger text-center" id="alert-error"><strong>ALERTA! </strong>' +
                'No se encontraron usuario en el sistema : <strong>' + sistema + '</strong></div>').appendTo("#listado");            
        } else {
            var table = '<table class="table table-hover" id="users-table">';
            table+= '<thead>';
            table+= '<tr>'
            table+= '<th>Nombre</th>';
            table+= '<th>Apellido Paterno</th>';
            table+= '<th>Apellido Materno</th>';
            table+= '<th>Edad</th>';
            table+= '<th>Procedencia</th>';
            table+= '<th>Sistema Educativo</th>';
            table+= '<th>Turno</th>';
            table+= '<th>Fecha de nacimiento</th>';
            table+= '<th>Email</th>';
            table+= '<th>Tel Casa</th>';
            table+= '<th>Tel Celular</th>';
            table+= '<th>Oferta</th>';
            table+= '<th>Plantel</th>';
            table+= '<th>Carrera</th>';


            table+= '</tr';
            table+= '</thead>';
            table+= '<tbody>';

            usersArray.forEach(function(value){
                table+= '<tr>';
                table+= '<td>' + value.nombre + '</td>';
                table+= '<td>' + value.ape1 + '</td>';
                table+= '<td>' + value.ape2 + '</td>';
                table+= '<td>' + value.edad + '</td>';
                table+= '<td>' + value.proc + '</td>';
                table+= '<td>' + value.sistema + '</td>';
                table+= '<td>' + value.turno + '</td>';
                table+= '<td>' + value.date + '</td>';
                table+= '<td>' + value.email + '</td>';
                table+= '<td>' + value.telcasa + '</td>';
                table+= '<td>' + value.telcel + '</td>';
                table+= '<td>' + value.oferta + '</td>';
                table+= '<td>' + value.plantel + '</td>';
                table+= '<td>' + value.carrera+ '</td>';
                table+= '</tr>';
            });

            table+= '</tbody>';
            table+= '</table>';

            $(table).appendTo("#listado");
        }


    });

    });

 $('#btnTurno').click(function() {

      $("#alert-error").remove();
      $("#users-table").remove();
      
      var turno =$('#turno').val();

      var usersArray = [];

      var referencia=database.ref("AlumnosAlta");

    referencia.orderByChild("turno").equalTo(turno).once("value").then(function(values){
        values.forEach(function(value){
            usersArray.push(value.val());
        })
        
        if(usersArray.length == 0){
            $('<div class="alert alert-danger text-center" id="alert-error"><strong>ALERTA! </strong>' +
                'No se encontraron usuario en el turno: <strong>' + turno + '</strong></div>').appendTo("#listado");            
        } else {
            var table = '<table class="table table-hover" id="users-table">';
            table+= '<thead>';
            table+= '<tr>'
            table+= '<th>Nombre</th>';
            table+= '<th>Apellido Paterno</th>';
            table+= '<th>Apellido Materno</th>';
            table+= '<th>Edad</th>';
            table+= '<th>Procedencia</th>';
            table+= '<th>Sistema Educativo</th>';
            table+= '<th>Turno</th>';
            table+= '<th>Fecha de nacimiento</th>';
            table+= '<th>Email</th>';
            table+= '<th>Tel Casa</th>';
            table+= '<th>Tel Celular</th>';
            table+= '<th>Oferta</th>';
            table+= '<th>Plantel</th>';
            table+= '<th>Carrera</th>';


            table+= '</tr';
            table+= '</thead>';
            table+= '<tbody>';

            usersArray.forEach(function(value){
                table+= '<tr>';
                table+= '<td>' + value.nombre + '</td>';
                table+= '<td>' + value.ape1 + '</td>';
                table+= '<td>' + value.ape2 + '</td>';
                table+= '<td>' + value.edad + '</td>';
                table+= '<td>' + value.proc + '</td>';
                table+= '<td>' + value.sistema + '</td>';
                table+= '<td>' + value.turno + '</td>';
                table+= '<td>' + value.date + '</td>';
                table+= '<td>' + value.email + '</td>';
                table+= '<td>' + value.telcasa + '</td>';
                table+= '<td>' + value.telcel + '</td>';
                table+= '<td>' + value.oferta + '</td>';
                table+= '<td>' + value.plantel + '</td>';
                table+= '<td>' + value.carrera+ '</td>';
                table+= '</tr>';
            });

            table+= '</tbody>';
            table+= '</table>';

            $(table).appendTo("#listado");
        }


    });

    });

 $('#btnFecha').click(function() {

      $("#alert-error").remove();
      $("#users-table").remove();
      
      var date =$('#date').val();

      var usersArray = [];

      var referencia=database.ref("AlumnosAlta");

    referencia.orderByChild("date").equalTo(date).once("value").then(function(values){
        values.forEach(function(value){
            usersArray.push(value.val());
        })
        
        if(usersArray.length == 0){
            $('<div class="alert alert-danger text-center" id="alert-error"><strong>ALERTA! </strong>' +
                'No se encontraron usuario con la fecha de nacimiento: <strong>' + fecha + '</strong></div>').appendTo("#listado");            
        } else {
            var table = '<table class="table table-hover" id="users-table">';
            table+= '<thead>';
            table+= '<tr>'
            table+= '<th>Nombre</th>';
            table+= '<th>Apellido Paterno</th>';
            table+= '<th>Apellido Materno</th>';
            table+= '<th>Edad</th>';
            table+= '<th>Procedencia</th>';
            table+= '<th>Sistema Educativo</th>';
            table+= '<th>Turno</th>';
            table+= '<th>Fecha de nacimiento</th>';
            table+= '<th>Email</th>';
            table+= '<th>Tel Casa</th>';
            table+= '<th>Tel Celular</th>';
            table+= '<th>Oferta</th>';
            table+= '<th>Plantel</th>';
            table+= '<th>Carrera</th>';


            table+= '</tr';
            table+= '</thead>';
            table+= '<tbody>';

            usersArray.forEach(function(value){
                table+= '<tr>';
                table+= '<td>' + value.nombre + '</td>';
                table+= '<td>' + value.ape1 + '</td>';
                table+= '<td>' + value.ape2 + '</td>';
                table+= '<td>' + value.edad + '</td>';
                table+= '<td>' + value.proc + '</td>';
                table+= '<td>' + value.sistema + '</td>';
                table+= '<td>' + value.turno + '</td>';
                table+= '<td>' + value.date + '</td>';
                table+= '<td>' + value.email + '</td>';
                table+= '<td>' + value.telcasa + '</td>';
                table+= '<td>' + value.telcel + '</td>';
                table+= '<td>' + value.oferta + '</td>';
                table+= '<td>' + value.plantel + '</td>';
                table+= '<td>' + value.carrera+ '</td>';
                table+= '</tr>';
            });

            table+= '</tbody>';
            table+= '</table>';

            $(table).appendTo("#listado");
        }


    });

    });

 });