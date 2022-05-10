chrome.storage.sync.get("params", ({ params }) => {

	document.querySelectorAll("div.col-lg-4.col-md-6.col-xs-12.fixed-height").forEach((item) => {item.setAttribute("style", "opacity: .8");});
	let div = document.querySelectorAll("._")[0];

	params['links'].forEach((item) => {
		var obj = document.createElement("li");
		obj.innerHTML = "<a href=\"" + item["link"] + "\"><span><img class=\"" + item["class"] + "\" src=\"" + item["svg"] + "\" /></span><span class=\"visible-overlay\">" + item["visible-overlay"] + "</span></a>";
		div.append(obj);
	});
});
	