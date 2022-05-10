document.querySelectorAll("div.col-lg-4.col-md-6.col-xs-12.fixed-height").forEach((item) => {item.setAttribute("style", "opacity: .8");});
let div = document.querySelectorAll("._")[0];
var elements = [
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
];

// let element_class 1=
elements.forEach((item) => {
	var obj = document.createElement("li");
	obj.innerHTML = "<a href=\"" + item["link"] + "\"><span><img class=\"" + item["class"] + "\" src=\"" + item["svg"] + "\" /></span><span class=\"visible-overlay\">" + item["visible-overlay"] + "</span></a>";
	div.append(obj);
});
// console.log(obj);
// console.log("Done!");
