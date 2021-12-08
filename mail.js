function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "akif.is18@sahyadri.edu.in",
	Password : "password",
	To : "akif.is18@Sahyadri.edu.in",
	From : "akif.is18@Sahyadri.edu.in",
	Subject : "Contact us",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
