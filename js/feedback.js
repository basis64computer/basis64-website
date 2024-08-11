let feedbackForm = document.querySelector("#feedbackForm");

let bot = {
	TOKEN: "6782845267:AAGBdmLNBYXJL5D3mmjvCq2qrY_tlysSY5Y",
	ChatID: "5981475588",
}

feedbackForm.addEventListener("submit", e => {
	e.preventDefault();

	let name = document.querySelector("#name");
	let message = document.querySelector("#message");

	let name_value = name.value;
	let message_value = message.value;


	document.getElementById("name").value = "";
	document.getElementById("message").value = "";

	fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.ChatID}&parse_mode=markdown&text=*Pesan dari ${name_value}*%0A${message_value}`, {
		method: "GET"
	}).then(success => {
		alert("Masukkan Anda berhasil dikirim.");
	}, error => {
		alert("Masukkan Anda tidak dapat dikirim.")
		console.log(error);
	})
})

function send_message(message) {
	let msg = message.replace("_", "\\_").replace("_bold_", "*").replace("_italic_", "_")
	fetch(encodeURI(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.ChatID}&parse_mode=markdown&text=${msg}`), {
		method: "GET"
	}).then(success => {
		
	}, error => {
		console.log(error);
	})
}
