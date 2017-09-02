const allBlogs = [];


const blog1 = {
	title: "Hip, hip, Array!",
	subTitle: "Week 3",
	date: "July 30, 2017",
	content: ["This was week 3 as a bootcamp student in the NSS “part-time” program. Weeks 1 & 2 focused on HTML and CSS and I found myself thinking I’ve got this. This isn’t so hard! Week 3 began javascript and … holy… this shit IS hard!",

		" Instructor Lauren lead us through some peer coding focused on objects, arrays, and for loops (I'm pretty sure she moonlights as a wizard). OBJECTS are basically variables that can contain values (properties) and ARRAYS too are used to store multiple values in a single variable. It seems, at this point in my journey, that the main differentiator is that arrays are for numerically indexed data. Exactly when, why, and where to use which is a frustrating mystery at this point that has lead to obsessive pondering and stomach cramps.",

		"FOR LOOPS hurt a little at first. It’s been a struggle to envision it in practical application but the in-class e-com exercise helped to unmuddy the waters a bit; I’m beginning to understand why we’d need to execute a block of code a number of times.",
		
		"After suffering a brain sprain I was able to get my feet under me and even pulled off a nested loop in the Boy Bands project. I’m absolutely loving this… even the frustration is fun!"],
}

const blog2 = {
	title: "I’ll Never Eat Another Nugget",
	subTitle: "Week 4",
	date: "August 6, 2017",
	content: ["I started off the week feeling pretty great. Objects and arrays… easy. Loops… I got this! I’d even revisited what I’d covered on functions in the pre work and was all set and ready for the deep dive on Monday.", 

		"To illustrate functions Instructor Callan subjected us to a horrendous cartoon video supposedly designed to teach math concepts to middle schoolers.  It started with adorably illustrated chickens lining up in a row,  then entering a nugget factory conveyor belt style where they were then chopped up into bits by a guillotine mechanism and packaged.",

		"It went on to slaughter cows and process them into packaged hamburger patties and fish into fish sticks. Okay, okay, make it stop! I get it! The factory is the function which was ran over and over to produce an outcome.",

		"Instructor Zoe had a much less grotesque approach to introducing us to GitHub projects before assigning us a project building a temperature converter. So far, I’ve had the most fun with this particular assignment as it’s the first one with an end result that leveraged HTML, CSS, and Java Script. Very, very rewarding!",

		"At this point I’ve learned a ton in a short period of time while working full time and managing a family. It’s getting harder and harder to shut off my brain at night and most days I’m doing good to call my children by the correct name, BUT I can write a hell of a function!"
		],
}

const blog3 = {
	title: "Entry3",
	subTitle: "Week 5",
	date: "August 13, 2017",
	content: ["Wow, this is the best free scrapbooking class I've ever taken! ps This one really cracks me up for some reason. No. I was ashamed to be _seen_ with you. I like being with you.You're losing blood, aren't you? Probably, my socks are wet. Hey, it was one night of wild passion! Michael: And yet you didn't notice her body? Gob: I like to look in the mirror.Maybe it was the eleven months he spent in the womb. The doctor said there were claw marks on the walls of her uterus. Stop licking my hand, you horse's ass! You mean the guy we're meeting with can't even grow his own hair? Come on!"],
}

const blog4 = {
	title: "Entry4",
	subTitle: "Week 6",
	date: "August 20, 2017",
	content: ["Mr. Zuckerkorn, you've been warned about touching. You said spanking. Everything they do is so dramatic and flamboyant. It just makes me want to set myself on fire. - Lucille Bluth. No one was making fun of Andy Griffith. I can't emphasize that enough. Saw this on the highway and almost blue myself. Hop on? Obviously this blue part here is the land. Let me out that Queen. You boys know how to shovel coal?"],
}

const blog5 = {
	title: "Entry5",
	subTitle: "Week 7",
	date: "August 27, 2017",
	content: ["Family Love Michael. It's as Ann as the nose on Plain's face. I've got a nice hard cot with his name on it. You'd do that to your own brother? I said 'cot.' Maybe it was the other George Michael. You know, the singer-songwriter. Am I in two thirds of a hospital room? You can control your bladder when you're dead!"],
}

allBlogs.push(blog1);
allBlogs.push(blog2);
allBlogs.push(blog3);
allBlogs.push(blog4);
allBlogs.push(blog5);

let blogContainer = document.getElementById("blog-container");

for (let i = 0; i < allBlogs.length; i++){

	const currentBlog = allBlogs[i];

	const domString = "";
	
	domString += '<div class="blog">';
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


    blogContainer.innerHTML += domString;
}














