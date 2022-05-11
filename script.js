chrome.storage.sync.get("params", ({ params }) => {

	document.querySelectorAll("div.col-lg-4.col-md-6.col-xs-12.fixed-height").forEach((item) => {item.setAttribute("style", "opacity: .8");});
	let div = document.querySelectorAll("._")[0];

	params['links'].forEach((item) => {
		var obj = document.createElement("li");
		obj.innerHTML = "<a href=\"" + item["link"] + "\"><span><img class=\"" + item["class"] + "\" src=\"" + item["svg"] + "\" /></span><span class=\"visible-overlay\">" + item["visible-overlay"] + "</span></a>";
		div.append(obj);
	})

});

chrome.storage.sync.get("params_col", ({ params_col }) => {

	let newBox = document.querySelectorAll(".col-lg-4.col-md-6.col-xs-12.fixed-height")[0];

		var test = document.createElement("col");
		test.classList.add('col-lg-4', 'col-md-6', 'col-xs-12', 'fixed-height');
		test.innerHTML = "<div class=\"container-inner-item boxed\" style=opacity:.8><h4 class=\"profile-title\">Todo list</h4></div>";
		newBox.after(test);

});



/*<div class="container-inner-item boxed" data-turbolinks-scaffold="inside">
<h4 class="profile-title">
Test
<div class="pull-right title-container">
<div class="school-record-container">
<button class="school-record-button dropdown-toggle" data-toggle="dropdown">
Transcript
</button>
<ul class="dropdown-menu" id="school-record-dropdown-menu" role="menu" style="text-align: center; padding: 10px;">
<form action="https://projects.intra.42.fr/users/97766/transcripts/25/generate.pdf" method="post" target="_blank">
<div class="form-group">
<label>Start Year</label>
<input class="form-control" max="2022" min="2021" name="start_year" placeholder="2021" type="number">
</div>
<div class="form-group">
<label>End Year</label>
<input class="form-control" max="2022" min="2021" name="end_year" placeholder="2022" type="number">
</div>
<div class="form-group">
<label>Choose pdf</label>
<select class="form-control" name="sr_id">
<option value="25">42cursus - English</option>
<option value="24">42cursus - Français</option>
[#&lt;SchoolRecord id: 25, content: "&lt;span style='float: left; margin: 15px 15px 0 0;'&gt;...", language_id: 2, created_at: "2021-10-12 16:20:16", updated_at: "2022-01-23 15:08:27", sign: nil, header: nil, footer: "www.42nice.fr - @42nice\r\nAssociation loi 1901 d’in...", cursus_id: 21, campus_id: 41&gt;, #&lt;SchoolRecord id: 24, content: "&lt;span style='float: left; margin: 15px 15px 0 0;'&gt;...", language_id: 1, created_at: "2021-10-12 15:59:41", updated_at: "2022-01-23 15:08:07", sign: "sign.png", header: "header.png", footer: "www.42nice.fr - @42nice\r\nAssociation loi 1901 d’in...", cursus_id: 21, campus_id: 41&gt;]</select>
</div>
<button class="btn btn-primary" type="submit">Download</button>
</form>
</ul>
</div>
<a class="simple-link mr-2 ml-2" href="/users/ple-berr/correction_point_historics">evaluation logs</a>
<a class="simple-link" href="/users/ple-berr/quests">quests</a>
</div>
</h4>
<div class="overflowable-item" style="overflow: auto">
<a class="project-item block-item" data-cursus="42cursus 42-zip" href="https://projects.intra.42.fr/42cursus-minishell/ple-berr">minishell
<div class="status pull-right-if-not-mobile">
<span class="marked-title">

</span>
</div>
</a>
</div>
</div>*/