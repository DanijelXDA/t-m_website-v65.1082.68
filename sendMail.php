<?php
	$sadrzajMejla = 'Име: '. $_POST['ime'] . "" . PHP_EOL . 'Е-адреса: '. $_POST['ime'] . "" . PHP_EOL . $_POST['poruka'];
	$to      = 'danijelj2001.xda@gmail.com';
	$subject = 'Питање/Сугестија | Техничка школа';
	$message = wordwrap($message, 70, "\r\n");
	$headers = 'From: no-reply@tehnickaskola.edu.rs' . "\r\n" .
		'Reply-To: no-reply@tehnickaskola.edu.rs' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
?> 