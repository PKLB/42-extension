let params = {
	"background": "",
	"links": [
		{
			"class": "link_sup link_1",
			"link": "https://unpkg.com/ionicons@5.5.2/dist/svg/fish-outline.svg",
			"svg": "https://unpkg.com/ionicons@5.5.2/dist/svg/fish-outline.svg",
			"visible-overlay": "Link"
		},
		{
			"class": "link_sup link_2",
			"link": "https://unpkg.com/ionicons@5.5.2/dist/svg/fish-outline.svg",
			"svg": "https://unpkg.com/ionicons@5.5.2/dist/svg/fish-outline.svg",
			"visible-overlay": "Linlok"
		}
	]
};

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ params });
	console.log('Default parameters set');
});