jQuery(function(){

    //visual
	var $visual_box = $('.visual'),
	$visual = $visual_box.find('.slide_box'),
	visualLength = $visual_box.find('.cont_box').length;

	if(visualLength>1){
		$visual_box.find('.auto').addClass('pause').text('정지');
	} else{
		$visual_box.find('.auto').addClass('play').text('재생');
	};
	$('.visual .slide_box').slick({
		swipe : true,

		fade: true,
		cssEase: 'linear',
		speed: 200,
		infinite: true,
		autoplay : true,
		variableWidth: false,
		centerMode: true,
        draggable : true,
		prevArrow : $visual_box.find('.prev'),
		nextArrow : $visual_box.find('.next'),
		responsive: [
			{
				breakpoint: 640,
				settings: {
					
				}
			}
		]
	});
	$visual_box.find('.auto').click(function(){
		var NowPlaying = $(this).is('.pause');
		if(visualLength>1){
			if(NowPlaying==true){
				$visual.slick('slickPause');
				$(this).removeClass('pause').addClass('play').text('재생');
			} else if(NowPlaying==false){
				$visual.slick('slickPlay');
				$(this).removeClass('play').addClass('pause').text('정지');
			};
		};
	});
	$visual_box.find('.slick-arrow').on('click', function(){
		$visual.slick('slickPause');
		$visual_box.find('.auto').addClass('pause').text('멈춤');
	});
//shorutcut
$('#section03 .rowgroup .list_box .inner_wrap').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
})
});

