define(['jquery'],function($){
	function GoTop(){
		this.init = function(){
            this.bind()
		}
		this.init();
	}
	GoTop.prototype = {
		bind: function(){
			$('.gotop').on('click',function(){
				$(window).scrollTop(0);
				$(this).addClass('hide');
			})
			$(window).on('scroll',function(){
				var scroll = $(this).scrollTop();
				if(scroll>300){
					$('.gotop').removeClass('hide');
				}else if(scroll<300){
					$('.gotop').addClass('hide');
				}
			})
		}
	}
	return GoTop;
})