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

// lading the data.
mainData.onload = function name() {
	const myData = JSON.parse(mainData.responseText);

	// social icons.
	function loopsocial(social) {
		return `
		<li>
			<a href="${social.link}" class="icon style2 fa-${social.acount}"></a>
		</li>
		`
	}
	
	
	
	// bring the main Name on header section.
	document.getElementById("headerName").innerHTML = myData.myName;
	// loop throu th Social media
	document.getElementById("social_Media").innerHTML = myData.social_Media.map(loopsocial).join('')


};
mainData.send();