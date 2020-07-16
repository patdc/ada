chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendresponse) {
    let body = document.getElementsByTagName("body");
 
	// let h1 = document.getElementsByTagName("h1");
    // let h2 = document.getElementsByTagName("h2");
    // let h3 = document.getElementsByTagName("h3");
    // let p = document.getElementsByTagName("p");

	// for(elt of h1)
	// {
	// 	elt.style['font-size'] = '150%';
	// }

	// for(elt of h2)
	// {
	// 	elt.style['font-size'] = '150%';
	// }

	// for(elt of h3)
	// {
	// 	elt.style['font-size'] = '150%';
	// }

	// for(elt of p)
	// {
	// 	elt.style['font-size'] = '150%';
	// }

	for(elt of body)
	{
		elt.style['font-size'] = '150%';
	}





}