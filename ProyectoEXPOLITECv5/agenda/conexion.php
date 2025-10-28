<?php
$servidor= '127.0.0.1';
$usuario= 'root';
$contra= '';
$DB= 'agendados';

$cone = mysqli_connect($servidor, $usuario, $contra, $DB);
if ($cone) {
    echo 'Conexión establecida';
}
else {
    echo 'No se pudo';
}

?>