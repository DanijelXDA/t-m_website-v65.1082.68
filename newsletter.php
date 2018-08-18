<?php 
	$email = $_POST['mejl'];
	$formcontent="Успешно си се пријавио на Newsletter Техничке школе.\nХвала на пријави!";
	$recipient = $email;
	$subject = "Претплата на Newsletter | Техничка школа";
	$headers = 'From: no-reply-newsletter@tehnickaskola.edu.rs' . "\r\n" .
		'Reply-To: no-reply-newsletter@tehnickaskola.edu.rs' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();
	mail($recipient, $subject, $formcontent, $headers) or die("Greska!");
	header( 'Location: pretplata-na-newsletter.html' );
	header('Refresh: 10; URL=https://tehnickaskola.edu.rs/');
?>