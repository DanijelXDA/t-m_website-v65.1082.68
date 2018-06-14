<?php
	// CODE BY DANIJEL JOVANOVIĆ  //
	// 		ALL RIGHT RESERVED 	 //
	
	$email = $_POST['email'];
	$fp = fopen('loginData.txt', 'a');
	$savestring = $email . "" . PHP_EOL;
	fwrite($fp, $savestring);
	fclose($fp);
	header("Location: pocetna.html"); // redirect back to your main page
	exit;
?>