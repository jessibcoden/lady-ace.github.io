var allBlogs = [];

var blog1 = {
	title: "Hip, hip, Array!",
	subTitle: "Week 3",
	date: "July 30, 2017",
	content: ["This was week 3 as a bootcamp student in the NSS “part-time” program. Weeks 1 & 2 focused on HTML and CSS and I found myself thinking I’ve got this. This isn’t so hard! Week 3 began javascript and … holy… this shit IS hard!",

		" We focused on objects, arrays, and for loops. From what I can gather OBJECTS are basically variables that can contain values (properties) and ARRAYS too are used to store multiple values in a single variable. It seems, at this point in my journey, that the main differentiator is that arrays are for numerically indexed data. Exactly when, why, and where to use which is a frustrating mystery at this point that has lead to obsessive pondering and stomach cramps.",

		"FOR LOOPS hurt a little at first. It took a bit to envision it in practical application but the in class e-com exercise helped to unmuddy the waters; I’m beginnig to understand why we’d need to execute a block of code a number of times.",
		
		"After suffering a brain sprain I was able to restabelize and even pulled off a nested loop in the Boy Bands project. I’m absolutely loving this.. even the frustration is kinda fun!"],
}

var blog2 = {
	title: "Entry2",
	subTitle: "Week 4",
	date: "August 6, 2017",
	content: ["Waiting for the Emmys. BTW did you know won 6 Emmys and was still canceled early by Fox? COME ON. When a man needs to prove to a woman that he's actually… When a man loves a woman… Taste the happy, Michael. Taste it. It tastes kind of like sad.", 

		"You need to do more with Rita. Believe me, I'd like to. She keeps saying that God is going to show me a sign. The… something of my ways. Wisdom? No one's called him Baby Buster since high school. He's going to be all right. However, she mistook the drowsy eye alcohol warning for a winking eye alcohol suggestion."],
}

var blog3 = {
	title: "Entry3",
	subTitle: "Week 5",
	date: "August 13, 2017",
	content: ["Wow, this is the best free scrapbooking class I've ever taken! ps This one really cracks me up for some reason. No. I was ashamed to be _seen_ with you. I like being with you.You're losing blood, aren't you? Probably, my socks are wet. Hey, it was one night of wild passion! Michael: And yet you didn't notice her body? Gob: I like to look in the mirror.Maybe it was the eleven months he spent in the womb. The doctor said there were claw marks on the walls of her uterus. Stop licking my hand, you horse's ass! You mean the guy we're meeting with can't even grow his own hair? Come on!"],
}

var blog4 = {
	title: "Entry4",
	subTitle: "Week 6",
	date: "August 20, 2017",
	content: ["Mr. Zuckerkorn, you've been warned about touching. You said spanking. Everything they do is so dramatic and flamboyant. It just makes me want to set myself on fire. - Lucille Bluth. No one was making fun of Andy Griffith. I can't emphasize that enough. Saw this on the highway and almost blue myself. Hop on? Obviously this blue part here is the land. Let me out that Queen. You boys know how to shovel coal?"],
}

var blog5 = {
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

var blogContainer = document.getElementById("blog-container");

for (var i = 0; i < allBlogs.length; i++){

	var currentBlog = allBlogs[i];

	var domString = "";
	
	domString += '<div class="blog">';
	domString += 	'<header class="title">';
	domString += 		'<h4>' + currentBlog.title +'</h4>';
	domString += 		'<h5>' + currentBlog.subTitle +'</h5>';
	domString += 		'<h6>' + currentBlog.date + '</h6>';
	domString +=	'</header>';
	domString +=	'<article class="content">'

	for (var j = 0; j < currentBlog.content.length; j++) {

		var currentContent = currentBlog.content[j];

		domString += 		'<p>' + currentContent + '</p>';
	}

	domString +=	'</article>';
	domString += '</div>';

    blogContainer.innerHTML += domString;
}
















