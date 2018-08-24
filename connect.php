 <?php 
 	$ime = filter_input(INPUT_POST, 'ime');
	$email = filter_input(INPUT_POST, 'imejl');
	$password = filter_input(INPUT_POST, 'sifra');

	$host = "localhost";
	$dbusername = "root";
	$dbpassword = "";
	$dbname = "tsm_baza_za_sajt";

	// Create connection
	$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

	if (mysqli_connect_error()){
	  die('Connect Error ('. mysqli_connect_errno() .') '
		. mysqli_connect_error());
	}
	else{
	  $sql = "INSERT INTO account (ime, imejl, sifra)
	  values ('$ime','$email', '$password')";
	  if ($conn->query($sql)){
		header( 'Location: prijava.html' );
	  }
	  else{
		echo "Error: ". $sql ."
	". $conn->error;
	  }
	  $conn->close();
	}

?>