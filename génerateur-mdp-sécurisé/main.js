function generatePassword(charNo) {
	var characters =
		" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
	result = "";
	for (var i = 0; i < charNo; i++) {
		var charLength = characters.length;
		var randomNo = Math.floor(Math.random() * charLength);
		result += characters.charAt(randomNo);
	}
	return result;
}

function handleClick() {
	var passwordBox = document.getElementById("password");

	passwordBox.innerText = generatePassword(20);
}
