const executeAfterBlogsFileLoads = () => {
	console.log("this", this.responseText);
	let data = JSON.parse(this.responseText);
	domString(data.blogs);
}

const executeThisCodeIfFileErrors = () => {
	console.log("Shit Broke");
}

let myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeAfterBlogsFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "blogs.json");
myRequest.send();

allBlogs.push(blog1);
allBlogs.push(blog2);
allBlogs.push(blog3);
allBlogs.push(blog4);
allBlogs.push(blog5);

let blogContainer = document.getElementById("blog-container");

let domString = "";	
for (let i = 0; i < allBlogs.length; i++){
	const currentBlog = allBlogs[i];
	console.log("current blog", currentBlog);
	domString += '<div class="blog col-md-3 col-md-offset-1">';
	domString += 	'<header class="title">';
	domString += 		'<h4>' + currentBlog.title +'</h4>';
	domString += 		'<h5>' + currentBlog.subTitle +'</h5>';
	domString += 		'<h6>' + currentBlog.date + '</h6>';
	domString +=	'</header>';
	domString +=	'<article class="content">'

	for (let j = 0; j < currentBlog.content.length; j++) {

		const currentContent = currentBlog.content[j];

		domString += 		'<p>' + currentContent + '</p>';
	}

	domString +=	'</article>';
	domString += '</div>';

    blogContainer.innerHTML = domString;
}

let blog = document.getElementById("blog");

document.addEventListener("click", (event) => {
	if(event.target.parentNode.parentNode.classList.contains('blog')){
		selectedBlog = event.target.parentNode.parentNode;
	}
	else if(event.target.parentNode.classList.contains('blog')){
		selectedBlog = event.target.parentNode;
	}
	else if(event.target.classList.contains('blog')){
		selectedBlog = event.target;
	}

	viewJumboBlog();

});

const viewJumboBlog = () => {
	const title = selectedBlog.childNodes[0].childNodes[0].innerHTML;
	const subTitle = selectedBlog.childNodes[0].childNodes[1].innerHTML;
	const date = selectedBlog.childNodes[0].childNodes[2].innerHTML;

	const content = selectedBlog.childNodes[1].childNodes;
	console.log("content", content);

	console.log("selected blog", selectedBlog);
	let jumboDom = '';
	jumboDom += `<div class="jumbotron container">`;
  	jumboDom +=		`<h1>${title}</h1>`;
  	jumboDom +=		`<h2>${subTitle}</h2>`;
  	jumboDom +=		`<h4>${date}</h4>`;

  	content.forEach((paragraph) => {	
  		paragraph = paragraph.innerHTML;
		jumboDom += 		`<p>${paragraph}</p>`;
	})

	jumboDom +=	`</div>`

	document.getElementById("jumbo-div").innerHTML = jumboDom;
}










