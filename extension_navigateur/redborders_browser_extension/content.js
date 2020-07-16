chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendresponse) {
    let imgs = document.getElementsByTagName("img");
	for(elt of imgs)
	{
		elt.style['border'] = '10px solid #FF0000';
	}
}