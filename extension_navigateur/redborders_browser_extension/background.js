console.log("Background running");

chrome.browserAction.onClicked.addListener(iconClicked);

function iconClicked(tab)
    {
	let msg = {
		txt : "hello"
	}
    chrome.tabs.sendMessage(tab.id, msg);
    console.log(tab.id, msg);
}