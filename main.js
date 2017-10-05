// let blogsData = "";

$.ajax('blogs.json').done ((data) => {
	// blogsData = data;
	printBlogArrayToDom(data.blogs);
}).fail((error) => {
	console.log('error', error)
});

// const blogContainer = document.getElementById("blog-container");
// console.log("anything", blogContainer);

// const blogContainer = $("#blog-container")[0];
// console.log("jquery", blogContainer);


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
		// blogContainer.innerHTML += blogDomString;
		$("#blog-container").append(blogDomString);
	}
}


// let blog = $('#blog');

// document.addEventListener("click", (event) => {
$('body').on('click', (event) => { 
	if ($(event.target).closest('div').hasClass('blog')) {
		selectedBlog = $(event.target).closest('div')[0];
	}
	// if(event.target.parentNode.parentNode.classList.contains('blog')){
	// 	selectedBlog = event.target.parentNode.parentNode;
		console.log(selectedBlog);
	// }
	// else if(event.target.parentNode.classList.contains('blog')){
	// 	selectedBlog = event.target.parentNode;
	// 	console.log(selectedBlog);

	// }
	// else if(event.target.classList.contains('blog')){
	// 	selectedBlog = event.target;
	// 	console.log(selectedBlog);

	// }

	viewJumboBlog();

});

const viewJumboBlog = () => {
	// console.log("jumbo function", selectedBlog);
	// const title = selectedBlog.childNodes[0].childNodes[0].innerHTML;
	const title = $(selectedBlog).find('h4').html();
	// const subTitle = selectedBlog.childNodes[0].childNodes[1].innerHTML;
	const subTitle = $(selectedBlog).find('h5').html();
	// const date = selectedBlog.childNodes[0].childNodes[2].innerHTML;
	const date = $(selectedBlog).find('h6').html();

	// const content = selectedBlog.childNodes[1].childNodes;
	const content = $(selectedBlog).find('.content')[0].childNodes;
	console.log("content", content);

	// console.log("selected blog", selectedBlog);
	let jumboDom = '';
	jumboDom += `<div class="jumbotron container">`;
  	jumboDom +=		`<h1>${title}</h1>`;
  	jumboDom +=		`<h2>${subTitle}</h2>`;
  	jumboDom +=		`<h4>${date}</h4>`;

  	$(content).each((paragraph) => {	
  		paragraph = $(content[paragraph]).html();
		jumboDom += 		`<p>${paragraph}</p>`;
	})

	jumboDom +=	`</div>`
	$("#jumbo-div").html(jumboDom);
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







