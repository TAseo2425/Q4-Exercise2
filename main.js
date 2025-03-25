function verify() {
			var age = document.getElementById("age").value * 1;
				if (age >= 18) {
	  				window.alert("You are eligible to vote.");
	  			} else {
	  				window.alert("You are not eligible to vote.");
				}
		}