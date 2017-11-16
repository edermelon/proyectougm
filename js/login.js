var config = {
    apiKey: "AIzaSyATiAXo92f60gVDiVXifzg3nxCmPcrKFGk",
    authDomain: "ugm1-d3f52.firebaseapp.com",
    databaseURL: "https://ugm1-d3f52.firebaseio.com",
    projectId: "ugm1-d3f52",
    sstorageBucket: "ugm1-d3f52.appspot.com",
    messagingSenderId: "447991466330"
};

firebase.initializeApp(config);

function exito()
{
    $("#spinner").html("");
    location.assign('index.html');
}

$(function()
{
    $("#botonLogin").click(function()
    {
        $("#spinner").html("<img src='img/spinner.gif' style='width:25px; height:25px;'/>");
        var email=$("#email").val();
        var password=$("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password).then(exito).catch(function(error)
        {
            $("#spinner").html("");
            //console.log(error);
            alert ("Error detectado:\n\n"+error.message);
        });
    });

    $("#botonRegistro").click(function()
    {
        location.assign('registro.html');
    });


    $("#botonCancelar").click(function()
    {
        location.assign('index.html');
    });

});