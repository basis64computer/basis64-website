let bot = {
	TOKEN: "6782845267:AAGBdmLNBYXJL5D3mmjvCq2qrY_tlysSY5Y",
	ChatID: "5981475588",
}

function telegramSendMessage(message) {
	let msg = message.replace("_", "\\_").replace("_bold_", "*").replace("_italic_", "_")
	fetch(encodeURI(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.ChatID}&parse_mode=markdown&text=${msg}`), {
		method: "GET"
	}).then(success => {
		alert("Berhasil mengirim feedback.");
	}, error => {
		console.log(error);
	})
}
