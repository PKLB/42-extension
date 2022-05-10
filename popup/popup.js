let div = document.getElementById("ul");

chrome.storage.sync.get("params", ({ params }) => {
	params['links'].forEach(link => {
		var li = document.createElement('li');
		li.innerText = link['visible-overlay'];
		div.append(li);
	});
});