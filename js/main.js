/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	// Disable animations/transitions until everything's loaded.
	$body.addClass('is-loading');

	$window.on('load', function() {
		$body.removeClass('is-loading');
	});

	// Poptrox.
	$window.on('load', function() {

		$('.thumbnails').poptrox({
			onPopupClose: function() { $body.removeClass('is-covered'); },
			onPopupOpen: function() { $body.addClass('is-covered'); },
			baseZIndex: 10001,
			useBodyOverflow: false,
			usePopupEasyClose: true,
			overlayColor: '#000000',
			overlayOpacity: 0.75,
			popupLoaderText: '',
			fadeSpeed: 500,
			usePopupDefaultStyling: false,
			windowMargin: (skel.breakpoint('small').active ? 5 : 50)
		});

	});

});

/*
	her is the main struchter
*/ 
var mainData= new XMLHttpRequest();  
mainData.open('GET', 'json/mainData.json');

// lading the data. aboutBox
mainData.onload = function name() {
	const myData = JSON.parse(mainData.responseText);
	
	// The main image on top
	document.getElementById("avatar").innerHTML = `<img src="img/${myData.avatar}" alt="${myData.myName} profile image" />`
	// The big image on about section
	document.getElementById("bigIamge").innerHTML = `<img src="img/${myData.mainImage}" alt="${myData.myName} profile image" />`
	// bring the main Name on header section.
	document.getElementById("welcome").innerText = myData.Welcome_Sentence;
	// A welcome sentence
	document.getElementById("headerName").innerHTML = myData.myName;
	// About Section
	document.getElementById("aboutBox").innerHTML = `
	<span> 
		<span class="title">${myData.myName}</span> ${myData.mian_About} <br /> 
		<a href="img/pdf/${myData.myCV}"><button class="btn"><i class="fa fa-download"></i> Download my CV</button></a>
	</span>`;
	// loop throu the Social media
	document.getElementById("social_Media").innerHTML = myData.social_Media.map(loopsocial).join('')
	// loop throu The languages
	document.getElementById("langBox").innerHTML = myData.languages.map(langStruct).join('')
};
mainData.send();

function downloadButton() {
	return ``
}

// 
const edu_xper  = new XMLHttpRequest()
edu_xper.open('GET', 'json/edu_exper.json');
// lading the data.
edu_xper.onload = function() {
	const theData = JSON.parse(edu_xper.responseText);

	// education
	document.getElementById("education").innerHTML = 
	'<span class="title">My <strong>Education</strong></span>' + theData.education.map(eduStruct).join('')
	// experience
	document.getElementById("experience").innerHTML = 
	'<span class="title">My <strong>Education</strong></span>' + theData.experience.map(experStruct).join('')
}
edu_xper.send();

// thumbnails
const thumbnails  = new XMLHttpRequest()
thumbnails.open('GET', 'json/thumbnails.json');
// thumbnails
thumbnails.onload = function() {
	const thumbData = JSON.parse(thumbnails.responseText);
	
	document.getElementById("thumbnails").innerHTML = `
	<div id="thCol_1"> ${thumbData.col_1.map(colStruct).join('')} </div>
	`  + `
	<div id="thCol_1"> ${thumbData.col_2.map(colStruct).join('')} </div>
	`  + `
	<div id="thCol_1"> ${thumbData.col_3.map(colStruct).join('')} </div>
	`  + `
	<div id="thCol_1"> ${thumbData.col_4.map(colStruct).join('')} </div>
	`
}; thumbnails.send();


// Skils
const skils  = new XMLHttpRequest()
skils.open('GET', 'json/skils.json');

// lading the data.
skils.onload = function() {
	const skilsData = JSON.parse(skils.responseText);
	// education
	document.getElementById("SkilsBox").innerHTML = skilsData.skils.map(skilsStruct).join('')
}; skils.send();

/*
	=================================================================
	all sections structcher
	=================================================================
*/

// social icons.
function loopsocial(social) {
	return `<li><a href="${social.link}" class="icon style2 fa-${social.acount}"></a></li>`
};

// languages struccher
function langStruct(data) {
	return `
	<div class="skilBox">
		<div class="text">
			<span class="sikl">${data.languageName}</span>
			<span class="percentage">${ typeof data.rate === 'string'  ? 'native' : data.rate }</span>
		</div>
		<div class="label"><div style="width: ${data.rate}%;" class="inner"></div></div>
	</div>	
	`
}

// education struccher
function eduStruct(data) {
	return `
	<div class="contBox">
		<div class="date">
		<span class="start">${data.startDate}</span> - <span class="end">${data.endDate}</span>
		</div>
		<span class="unversity">${data.University}</span>
		<span class="feld">${data.fald}</span>
	</div>
	`
};

// education struccher
function experStruct(data) {
	return `
	<div class="contBox">
		<div class="date">
		<span class="start">${data.startDate}</span> - <span class="end">${data.endDate}</span>
		</div>
		<span class="unversity">${data.jopPlaece}</span>
		<span class="feld">${data.jopType}</span>
	</div>
	`
};

// Skils struccher
function skilsStruct(data) {
	return `
	<div class="skilBox">
		<div class="text">
			<span class="sikl">${data.skilName}</span>
			<span class="percentage">${data.rate}%</span>
		</div>
		<div class="label"><div style="width: ${data.rate}%;" class="inner"></div></div>
	</div>
	`
}

// thumbnails columes struccher
function colStruct(data) {
	return `
	<a href="img/fulls/${data.imageLink}">
		<img src="img/thumbs/${data.imageLink}" alt="" />
		<h3>${data.description}</h3>
	</a>
	`
}