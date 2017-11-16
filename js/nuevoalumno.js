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
    var ape1;
    var ape2;
    var edad;
    var proc;
    var sistema;
    var turno;
    var date;
    var email;
    var telcasa;
    var telcel;
    var oferta;
    var plantel;
    var carrera;

    var nombrepapa;
    var ape1papa;
    var ape2papa;
     var emailpapa;
    var telcasapapa;
    var telcelpapa;

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




    $("#formularioAlta").change(function()
    {
        nombre=$("#nombre").val();
        ape1=$("#ape1").val();
        ape2=$("#ape2").val();
        edad=$("#edad").val();
        proc=$("#proc").val();
        sistema=$("#sistema");
        turno=$("#turno");
        date=$("#date").val();
        email=$("#email").val();
        telcasa=$("#telcasa").val();
        telcel=$("#telcel").val();
        oferta=$("#oferta").val();
        plantel=$("#plantel").val();
        carrera=$("#carrera").val();

        nombrepapa=$("#nombrepapa").val();
        ape1papa=$("#ape1papa").val();
        ape2papa=$("#ape2papa").val();
        emailpapa=$("#emailpapa").val();
        telcasapapa=$("#telcasapapa").val();
        telcelpapa=$("#telcelpapa").val();


        if (nombre && ape1 && ape2 && edad && proc && sistema && turno && telcel && telcasa && email &&oferta &&plantel &&carrera)
        {   
            $("#botonGuardar").prop("disabled",false);
        }
        else
        {
            $("#botonGuardar").prop("disabled",true);
        }
    });


    $("#botonGuardar").click(function()
    {
        nombre=$("#nombre").val();
        ape1=$("#ape1").val();
        ape2=$("#ape2").val();
        edad=$("#edad").val();
        proc=$("#proc").val();
        date=$("#date").val();
        email=$("#email").val();
        telcasa=$("#telcasa").val();
        telcel=$("#telcel").val();
        oferta=$("#oferta").val();
        plantel=$("#plantel").val();
        carrera=$("#carrera").val();

        nombrepapa=$("#nombrepapa").val();
        ape1papa=$("#ape1papa").val();
        ape2papa=$("#ape2papa").val();
        emailpapa=$("#emailpapa").val();
        telcasapapa=$("#telcasapapa").val();
        telcelpapa=$("#telcelpapa").val();


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


      
      alert('El alta se ha realizado correctamente');

        
        var referencia=database.ref("AlumnosAlta");

        referencia.push(
        {
            nombre: nombre,
            ape1: ape1,
            ape2: ape2,
            edad: edad,
            proc: proc,
            sistema: sistema,
            turno: turno,
            date: date,
            email: email,
            telcasa:telcasa,
            telcel:telcel,
            oferta:oferta,
            plantel:plantel,
            carrera:carrera,

            nombrepapa: nombrepapa,
            ape1papa: ape1papa,
            ape2papa: ape2papa,
            emailpapa: emailpapa,
            telcasapapa:telcasapapa,
            telcelpapa:telcelpapa,

        },function()
        {
            alert('El alta se ha realizado correctamente');
            console.log(sistema);
        });
    });

});