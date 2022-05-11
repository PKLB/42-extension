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
			"class": "link_sup_test",
			"link": "https://unpkg.com/ionicons@5.5.2/dist/svg/fish-outline.svg",
			"svg": "https://media3.giphy.com/media/eHjrC6X9zDIMI0alnP/giphy.webp?cid=ecf05e47e0hycnon5xyu7wx4w7x6bfvb29pde5qsnrx1w68v&rid=giphy.webp&ct=s",
			"visible-overlay": "Linlok"
		}
	]
};

let params_col = {
	"background": "",
	"col": [
		{
			"class": "col col_1",
		},
		{
			"class": "col col_2",
		}
	]
};

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ params });
	chrome.storage.sync.set({ params_col });
	console.log('Default parameters set');
});