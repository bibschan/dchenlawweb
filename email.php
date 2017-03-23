<?php 
require 'mail/PHPMailerAutoload.php';
date_default_timezone_set('Etc/UTC');
 echo("<p>Message successfully sent!</p>");

 
 
 
 
$host = "smtp.gmail.com";
$port = "587";
$username = "jeferson.rubert@gmail.com";
$password = "";	
	
	$mail = new PHPMailer;


	echo("teste : ".$_POST['name']);
	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->SMTPDebug = 2;
	$mail->Host = $host;  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = $username;                 // SMTP username
	$mail->Password = $password;                           // SMTP password
	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = $port;                                    // TCP port to connect to

	$mail->setFrom('contacts@dchenlawcorp.com', 'New Contact');
	$mail->addAddress($username);     // Add a recipient



	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = "New contact from:".$_POST['name'];
	$mail->Body    = 'Email:'.$_POST['email']." Message:".$_POST['message'];

	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent';
	}
	
	
	
	
	
	
	
	
	
	
	
	/*
	
    $to = "souzabibiana@hotmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['name'];
    $subject = "Customer response in Dchenlawcorp";
    $message = $first_name . " "  . " wrote the following:" . "\n\n" . $_POST['message'];
  
    $body = "Hi,\n\nHow are you?";
  
	$headers = array ('From' => $from,
	'To' => $to,
	'Subject' => $subject);
  
	$smtp = Mail::factory('smtp',
	array ('host' => $host,
    'port' => $port,
    'auth' => true,
    'username' => $username,
    'password' => $password));
	
	$mail = $smtp->send($to, $headers, $body);

	if (PEAR::isError($mail)) {
	  echo("<p>" . $mail->getMessage() . "</p>");
	 } else {
	  echo("<p>Message successfully sent!</p>");
	 }
	
	
    //$headers = "From:" . $from;
    //$headers2 = "From:" . $to;
    //mail($to,$subject,$message,$headers);
    //echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
	*/
    
?>