    function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
        var username = "webMaster"; 
        var password = "P@ssw0rd";
        if ((un == username) && (pw == password)) {
            return true;
        }
        else {
			var x = document.getElementById("myDIV");
            x.style.display = "block";
			document.getElementById("usr").value = "";
			document.getElementById("pword").value = "";
            return false;
        }
  }