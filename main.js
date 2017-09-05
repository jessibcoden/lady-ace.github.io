function executeAfterBlogsFileLoads(){
	// console.log("this", this.responseText);
	let data = JSON.parse(this.responseText).blogs;
	printBlogArrayToDom(data);
	blogsData = data;

}

let blogsData = "";
console.log(blogsData);

const executeThisCodeIfFileErrors = () => {
	console.log("Shit Broke");
}

let myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeAfterBlogsFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "blogs.json");
myRequest.send();

// blogs.push(blog1);
// blogs.push(blog2);
// blogs.push(blog3);
// blogs.push(blog4);
// blogs.push(blog5);

const blogContainer = document.getElementById("blog-container");

const buildDomString = (blog) => {
	let domString = "";

		domString += `<div class="blog col-md-3 col-md-offset-1">`;
		domString += 	`<header class="title">`;
		domString += 		`<h4>${blog.title}</h4>`;
		domString += 		`<h5>${blog.subTitle}</h5>`;
		domString += 		`<h6>${blog.date}</h6>`;
		domString +=	`</header>`;
		domString +=	`<article class="content">`;

		for (let j = 0; j < blog.content.length; j++) {

			const currentContent = blog.content[j];

			domString += 		`<p>${currentContent}</p>`;
		}

		domString +=	`</article>`;
		domString += `</div>`;

	    return(domString);
}

const printBlogArrayToDom = (blogArray) => {
	for(let i = 0; i < blogArray.length; i++){

		const currentBlog = blogArray[i];
		const blogDomString = buildDomString(currentBlog);
		blogContainer.innerHTML += blogDomString;
	}
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

// ** Search Filter Feature **

// let searchField = document.getElementById("search-field");

// searchField.addEventListener('keypress', function(ev){
// 	// console.log("event", ev.key);
// 	if(ev.key == 'Enter'){
// 		let txt = searchField.value;
// 		//1. filter blogs array
// 		let results = blogs.filter(function(thing){
// 			console.log("filter blog", thing);
// 			return thing.name.indexOf(txt)>-1;
// 		})
// 		//domString
// 		domString(results);
// 		console.log('yay', results);
// 	}
// })







