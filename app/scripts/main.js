
function setBackground(number) {
	document.getElementById('bcg' + number).addEventListener('mouseover', function (e) {
		document.getElementById('bg-img').style.backgroundImage = 'url(images/bg/bcg' + number + '_1200.jpg)';
	});
}


document.addEventListener('DOMContentLoaded', function(event) { 

	// images preloading

	var bcg1 = new Image();
	bcg1.src = 'images/bg/bcg1_1200.jpg';

	var bcg2 = new Image();
	bcg2.src = 'images/bg/bcg2_1200.jpg';

	var bcg3 = new Image();
	bcg3.src = 'images/bg/bcg3_1200.jpg';


	// add specific id listeners

	setBackground(1);
	setBackground(2);
	setBackground(3);

	// class hover listeners

	var els = document.getElementsByClassName('bcg-link');

	for(var i=0;i<els.length; i++) {

	    if (!els.hasOwnProperty(i)) continue;

	    
	    els[i].addEventListener( 'mouseover', function() {
	        document.body.className += 'on-hover';
	    });

	    els[i].addEventListener( 'mouseout', function() {
	        document.body.className = document.body.className.replace( /(?:^|\s)on-hover(?!\S)/g , '' );
	    });
	}

});