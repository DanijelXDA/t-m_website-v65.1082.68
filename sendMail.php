<?php
$to      = 'danijelj2001.xda@gmail.com';
$subject = 'Питање/Сугестија | Техничка школа';
$message = 'hello';
$headers = 'From: no-reply@tehnickaskola.edu.rs' . "\r\n" .
    'Reply-To: no-reply@tehnickaskola.edu.rs' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?> 