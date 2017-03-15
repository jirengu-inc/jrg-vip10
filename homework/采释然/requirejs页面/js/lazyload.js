define(['jquery'],function($){
	function LazyLoad(){
	    this.init = function(){
	    	this.render()
            this.bind();
	    }
	    this.init();
	}
    LazyLoad.prototype = {
    	bind: function(){
    		var _this = this,
    		    lock;
    		$(window).on('scroll',function(){
                if(lock){
                	clearTimeout(lock)
                }
                lock = setTimeout(function(){
                	_this.render()
                },100)
    		})
    	},
    	render: function(){
            var img = $('#lazyload img');
            $.each(img,function(i,v){
            	var height = $(window).height(),
            	    scroll = $(window).scrollTop();
            	if($(v).offset().top <= (height+scroll) && $(v).attr('data-src') != $(v).attr('src')){
                    $(v).attr('src',$(v).attr('data-src'))
            	}
            })
    	}
    }
    return LazyLoad
})