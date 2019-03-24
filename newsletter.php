<?php 
	$email = $_POST['mejl'];
	$formcontent="Успешно си се пријавио на Newsletter Техничке школе.\n\nХвала на пријави!\n\nСрдачан поздрав, \nУредништво Техничке школе Младеновац.";
	$recipient = $email;
	$subject = "Претплата на Newsletter | Техничка школа";
	$headers = 'From: no-reply-newsletter@tehnickaskola.edu.rs' . "\r\n" .
		'Reply-To: no-reply-newsletter@tehnickaskola.edu.rs' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();
	mail($recipient, $subject, $formcontent, $headers) or die("Greska!");
	header( 'Location: pretplata.html' );
?>