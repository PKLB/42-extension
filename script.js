document.querySelectorAll("div.col-lg-4.col-md-6.col-xs-12.fixed-height").forEach((item) => {item.setAttribute("style", "opacity: .8");});
let div = document.querySelectorAll("._")[0];
var obj = document.createElement("li");
obj.innerHTML = "<a href=\"https://google.fr\"><span class=\"link_sup-1\"></span><span class=\"visible-overlay\">Profile</span></a>";
div.append(obj);
console.log(obj);
console.log("Done!");