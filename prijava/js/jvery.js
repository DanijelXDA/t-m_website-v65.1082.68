    function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
		
        var u1 = "d.jovanovic"; 
        var p1 = "sifraJeSifra";
		
		var u2 = "p.matovic";
		var p2 = "sifraJePasvord";
		
		var u3 = "s.maricic";
		var p3 = "sifraNijeSifra";
		
		
        if ((un == u1) && (pw == p1))
            return true;
        else if ((un == u2) && (pw == p2))
			return true;
		else if ((un == u3) && (pw == p3))
			return true;
        else {
			var x = document.getElementById("myDIV");
            x.style.display = "block";
			document.getElementById("usr").value = "";
			document.getElementById("pword").value = "";
            return false;
        }
  }