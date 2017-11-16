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
    var referencia=database.ref("AlumnosAlta");

    var productoId= window.name;
    //console.log(productoId);

    var nombre, ape1, ape2, edad, proc, sistema, turno, date, email, telcasa, telcel, oferta, plantel, carrera;;
    var AlumnosAlta={};

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

    // Buscamos el artículo.
    referencia.child(productoId).once('value',function(datos)
    {
        AlumnosAlta=datos.val();

        nombre= AlumnosAlta.nombre;
        ape1= AlumnosAlta.ape1;
        ape2= AlumnosAlta.ape2;
        edad=AlumnosAlta.edad;
        proc=AlumnosAlta.proc;
        sistema=AlumnosAlta.sistema;
        turno=AlumnosAlta.turno;
        date= AlumnosAlta.date;
        email=AlumnosAlta.email;
        telcasa= AlumnosAlta.telcasa;
        telcel=AlumnosAlta.telcel;
        oferta=AlumnosAlta.oferta;
        plantel= AlumnosAlta.plantel;
        carrera=AlumnosAlta.carrera;

        $('#nombre').val(nombre);
        $('#ape1').val(ape1);
        $('#ape2').val(ape2);
        $('#edad').val(edad);
        $('#proc').val(proc);
        $('#sistema').val(sistema);
        $('#turno').val(turno);
        $('#date').val(date);
        $('#email').val(email);
        $('#telcasa').val(telcasa);
        $('#telcel').val(telcel);
        $('#oferta').val(oferta);
        $('#plantel').val(plantel);
        $('#carrera').val(carrera);
    });


    $("#botonActualizar").click(function()
    {
        var nombre=$("#nombre").val();
        var ape1=$("#ape1").val();
        var ape2=$("#ape2").val();
        var edad=$("#edad").val();
        var proc=$("#proc").val();
        var sistema=$("#sistema").val();
       
      sistema=document.getElementsByName("sistema");

        if(sistema[0].checked){
            sistema = sistema[0].value;
        } else
            sistema = sistema[1].value;

        
        turno=document.getElementsByName("turno");
     
       if(turno[0].checked){
            turno = turno[0].value;
       
       } else if(turno[1].checked){
            turno = (turno[1].checked)
       } else {
            turno = (turno[2].checked)
       }
   
        // Guardamos los datos en referencia
        referencia.child(productoId).update(
        {
            nombre: nombre,
            ape1: ape1,
            ape2: ape2,
            edad: edad,
            proc: proc,
            sistema: sistema,
            
           
        }, alFinalizar);
    });

    function alFinalizar(error)
    {
        if (error)
        {
            alert('Ha habido problemas al realizar la operación: '+error.code);
        }
        else{
            alert('Operación realizada con éxito !');
            location.assign('administracion.html');
        }
    }
});

 function borrarProducto(id)
{
    if (confirm("¿Está seguro/a de que quiere borrar este artículo?") == true)
    {
        referencia.child(id).remove();
    }
}