
function setBackground(image_url) {

	var winW = $(window).width(),
        winH = $(window).height(),
        $bgImg = $('#bg-img');
	
	$bgImg.css('background-image', image_url);
}

$( document ).ready(function() {


	var bcg1 = new Image();
	bcg1.src = 'images/bg/bcg1_1200.jpg';

	var bcg2 = new Image();
	bcg2.src = 'images/bg/bcg2_1200.jpg';

	var bcg3 = new Image();
	bcg3.src = 'images/bg/bcg3_1200.jpg';


    $( '#bcg1' ).hover(
    	function() {
			setBackground('url(images/bg/bcg1_1200.jpg)');
		}
	);
    $( '#bcg2' ).hover(
    	function() {
			setBackground('url(images/bg/bcg2_1200.jpg)');
		}
	);
    $( '#bcg3' ).hover(
    	function() {
			setBackground('url(images/bg/bcg3_1200.jpg)');
		}
	);

    $( '.bcg-link' ).hover(
    	function() {
			$('body').addClass( 'on-hover' );
		}, function() {
			$('body').removeClass( 'on-hover' );
		}
	);


});