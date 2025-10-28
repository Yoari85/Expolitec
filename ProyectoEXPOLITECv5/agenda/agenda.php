<?php

$server = "localhost";
$usuarios = "root";
$contraseña = "";
$db = "agendaexpo";

$comprobacion = mysqli_connect($server, $usuarios, $contraseña, $db);
if ($comprobacion->connect_error) {
    die('Error de conexión: '. $comprobacion->connect_error);
}

if (isset($_POST['informacion'])) {

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contacto = $_POST['numero'];
    $servicio = $_POST['services'];

    $insertar = "INSERT INTO agendas_hechas (nombre, correo, telefono, servicio) VALUES ('$nombre', '$email', '$contacto', '$servicio')";
    $ejecutar = mysqli_query($comprobacion, $insertar);

    if($ejecutar){
        echo 'si se registro';
    }
}
?>