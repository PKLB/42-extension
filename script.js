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
	test.innerHTML = "<div class=\"container-inner-item boxed\" style=opacity:.8><h4 class=\"profile-title\">Todo list</h4><div id=\"push\"><input type=\"text\" placeholder=\"Add a task!\"><button id=\"push\" onclick=\"addTask()\">Add</button></div></div>";
	newBox.after(test);

});
//<div class=\"container-inner-item boxed\" style=opacity:.8><h4 class=\"profile-title\">Todo list</h4></div>



function addTask(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
	console.log("hello");
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
};