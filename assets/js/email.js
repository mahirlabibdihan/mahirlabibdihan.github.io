function submitForm(){
	let email = document.querySelector(".email").value;
	let message = document.querySelector(".message").value;
	document.querySelector(".email-form").reset();
	sendEmail(email,message);
}
function sendEmail(email,message){
	Email.send({
		Host: "smtp.gmail.com",
		Username: "mahirlabibdihan@gmail.com",
		Password: "fsgfflxszeprmnip",
		To: "mahirlabibdihan@gmail.com",
		From: "mahirlabibdihan@gmail.com",
		Subject: email,
		Body: message
	}).then((message)=>alert("Email has been succeessfully sent"));
}

document.querySelector(".email-send-button").addEventListener("click",submitForm);