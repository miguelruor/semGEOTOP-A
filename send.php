<?php
error_reporting(0);
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$join = $_POST['join'];

$header = 'From: '. $email ."\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Name: " . $name . " \r\n";
$mensaje .= "E-mail: " . $email . " \r\n";
$mensaje .= "Subject: " . $subject . " \r\n";
$mensaje .= "Message: " . $message . " \r\n";
$mensaje .= "Join? " . $join . " \r\n";

$para = "miguel.ruiz@cimat.mx";

mail($para, $ubject, utf8_decode($mensaje), $header);

echo 'The message has been sent.';

?>
