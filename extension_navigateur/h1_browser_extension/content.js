chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendresponse) {
    let h1 = document.getElementsByTagName("h1");
	for(elt of h1)
	{
		elt.style['color'] = '#9ACD32';
	}
}