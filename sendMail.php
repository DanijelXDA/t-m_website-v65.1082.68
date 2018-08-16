<?php 
	$name = $_POST['ime'];
	$email = $_POST['email'];
	$message = $_POST['poruka'];
	$formcontent="Име: $name \nE-адреса: $email\nПорука: $message\n";
	$recipient = "danijelj2001.xda@gmail.com";
	$subject = "Питање/Сугестија | Техничка школа";
	$headers = 'From: no-reply@tehnickaskola.edu.rs' . "\r\n" .
		'Reply-To: no-reply@tehnickaskola.edu.rs' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();
	mail($recipient, $subject, $formcontent, $headers) or die("Greska!");
	echo "Vas mejl je poslat!";
?>