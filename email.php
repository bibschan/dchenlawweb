<?php 
if(isset($_POST['submit'])){
    $to = "souzabibiana@hotmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['name'];
    $subject = "Customer response in Dchenlawcorp";
    $message = $name . " "  . " wrote the following:" . "\n\n" . $_POST['message'];
  

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
?>