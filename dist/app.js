(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let selectedBlog;

$.ajax('./db/blogs.json').done ((data) => {
	printBlogArrayToDom(data.blogs);
}).fail((error) => {
	console.log('error', error);
});

const buildDomString = (blog) => {
	let domString = "";

		domString += `<div class="blog col-md-3 col-md-offset-1">
						<header class="title">
		 					<h4>${blog.title}</h4>
		 					<h5>${blog.subTitle}</h5>
		 					<h6>${blog.date}</h6>
		 				</header>
		 				<article class="content">`;

		for (let j = 0; j < blog.content.length; j++) {
			const currentContent = blog.content[j];
			domString += 	`<p>${currentContent}</p>`;
		}
		domString +=	`</article>
					  </div>`;
	    return(domString);
};

const printBlogArrayToDom = (blogArray) => {
	for(let i = 0; i < blogArray.length; i++){
		const currentBlog = blogArray[i];
		const blogDomString = buildDomString(currentBlog);
		$("#blog-container").append(blogDomString);
	}
};

$('body').on('click', (event) => { 
	if ($(event.target).closest('div').hasClass('blog')) {
		selectedBlog = $(event.target).closest('div')[0];
		console.log("selectedBlog", selectedBlog);
	}
	viewJumboBlog();
});

const viewJumboBlog = () => {
	const title = $(selectedBlog).find('h4').html();
	const subTitle = $(selectedBlog).find('h5').html();
	const date = $(selectedBlog).find('h6').html();
	const content = $(selectedBlog).find('.content')[0].childNodes;
	let jumboDom = '';
	jumboDom += `<div class="jumbotron container">
		  			<h1>${title}</h1>
		  			<h2>${subTitle}</h2>
		  			<h4>${date}</h4>`;
  	$(content).each((paragraph) => {	
  		paragraph = $(content[paragraph]).html();
		jumboDom += 		`<p>${paragraph}</p>`;
	});
	jumboDom +=	`</div>`;
	$("#jumbo-div").html(jumboDom);
};

// ** Search Filter Feature **


$('#submit-blog-search').click((evnt) => {
	console.log("event", evnt);
	let searchField = $('#search-field').text;
	// if(evnt.key === 'Enter'){
	// 	let txt = searchField.value;
	// 	let results = blogs.filter((thing) => {
	// 		return thing.name.indexOf(txt)>-1;
	// 	});
	// 	domString(results);
	// 	console.log("yay!", results);
	// }
});









},{}]},{},[1]);
