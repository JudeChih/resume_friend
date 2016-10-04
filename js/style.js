$(function(){
	var px=0,py=0,sx=0,sy=0,_scrollTop = 0;
	var ww=$(window).width();

	/* 偵測滑鼠位置 */
	$(document).mousemove(function (e) {
		/* 網頁中滑鼠的位置 */
		px = e.pageX + document.documentElement.scrollTop;
		py = e.pageY + document.documentElement.scrollLeft;
		/* 螢幕視窗中滑鼠的位置 */
		sx = e.clientX;
		sy = e.clientY;
		ww=$(window).width();
		if(ww>=769){
			if(sy<=50){
				$('header').fadeIn();
			}else if(sy>=50 && _scrollTop<=50){
				$('header').stop(true,false).fadeIn();
			}else{
				$('header').stop(true,false).fadeOut();
			}
		}
	});
	/* 偵測捲動的高度 */
	$(window).scroll(function(e) {
		ww=$(window).width();
		if(ww>=769){
			_scrollTop= $(this).scrollTop();
			if(_scrollTop<=50){
				$('header').stop(true,false).fadeIn();
			}else{
				$('header').stop(true,false).fadeOut();
			}
		}
	});

	



	

})


