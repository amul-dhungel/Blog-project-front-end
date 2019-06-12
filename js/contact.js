
		function checkForm() {  //creating function to check empty fields
		var fname = document.forms["registrationForm"]["firstname"].value;// values of text field stored in variable
		
		var gender = document.forms["registrationForm"]["subject"].value;
		var email = document.forms["registrationForm"]["email"].value;
		var contact = document.forms["registrationForm"]["contact"].value;

		if (fname == "" || gender == "" || email == "" || contact == ""){ //checking if the fields are empty or not
		 	alert("Please fill all the empty fields!!");
		}
		else {
			alert("Sucessfully Submitted!");
		}
		}
	