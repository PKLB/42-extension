let div = document.getElementById("ul");

document.querySelectorAll(".FrameButtons").forEach(function (a) {
	a.addEventListener("click", function (item) {
		item.preventDefault();
		document.querySelectorAll(".container").forEach(function (container) {
			container.classList.remove("active");
		});
		document.getElementById(item.srcElement.dataset.target).classList.add("active");
	});
});

console.log(window.location.origin);

chrome.storage.sync.get("params", ({ params }) => {
	const links_list = document.getElementById("links_list");

	params['links'].forEach(function (link) {
		var close = document.createElement('button');
		var li = document.createElement('li');
		close.type = "button";
		close.classList.add("btn-close", "links_delete_button");
		close.setAttribute("aria-label", "Delete");
		li.classList.add("list-group-item");
		li.innerText = link["visible-overlay"];
		li.append(close);
		links_list.insertBefore(li, links_list.firstChild);
	});

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {return new bootstrap.Tooltip(tooltipTriggerEl);});

});