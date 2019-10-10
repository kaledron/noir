<?php
if (!isset($_POST) || empty($_POST)) {
    return false;
}

if (!isset($_POST['firstname']) || !isset($_POST['lastname']) || !isset($_POST['email']) || !isset($_POST['phone'])) {
    return false;
}

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$questions = (isset($_POST['questions']) ? $_POST['questions'] : "");

$from = $email;
$to = "Home Noir <info@homenoir.com>";
$subject = "Registration Request from " . $firstname . " " . $lastname;
$body = "Registration requested by: \n";
$body .= "Email: " . $email;
$body .= "Firstname: " . $firstname;
$body .= "Lastname: " . $lastname;
$body .= "Phone Number: " . $phone;
$body .= "Questions asked: ";
if ($questions == "") {
   $body .= "None.";
} else {
   $body .= $questions;
}

 
 $host = "n3plcpnl0067.prod.ams3.secureserver.net";
 $port = "465";
 $username = "info@homenoir.com";
 $password = "Luca123!";
 
 $headers = array ('From' => $from,
   'To' => $to,
   'Subject' => $subject);



require("vendor/phpmailer/phpmailer/src/PHPMailer.php");
require("vendor/phpmailer/phpmailer/src/SMTP.php");
 
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->IsSMTP(); // enable SMTP
 
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = $host;
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = $username;
$mail->Password = $password;
$mail->SetFrom($username);
$mail->Subject = $subject;
$mail->Body = $body;
$mail->AddAddress($username);
 
if(!$mail->Send()) {
   echo "Mailer Error: " . $mail->ErrorInfo;
} else {
   echo "Message has been sent";
}


/*
Username:	info@homenoir.com
Password:	Use the email account’s password.
Incoming Server:	mail.homenoir.com
IMAP Port: 143 POP3 Port: 110
Outgoing Server:	mail.homenoir.com
SMTP Port: 587
IMAP, POP3, and SMTP require authentication.
*/