define(['jquery','eventCenter'],function($,eventCenter){
    function Carousel(){
    	this.init = function(){
			$('#carousel').width($(window).width());
			$('#carousel>ul').width($(window).width()*4);
			$('#carousel>ul>li').width($(window).width());
            this.index = 0;
            this.bind();
    	}
    	this.init()
    }
    Carousel.prototype = {
    	bind: function(){
    	   var _this = this;
    	   $(window).on('resize',function(){
				$('#carousel').width($(window).width());
				$('#carousel>ul').width($(window).width()*4);
				$('#carousel>ul>li').width($(window).width());
				$('#carousel>ul').css({
           	    	left: 0
           	    })
           	    _this.index = 0;
           	    eventCenter.fire('click',_this.index);
    	   })
           $('.pre').on('click',function(){
               _this.pre()
               console.log(_this.index)
           })
            $('.next').on('click',function(){
               _this.next()
               console.log(_this.index)
           })
    	},
        next: function(){
           var imgWidth =  $('#carousel li').width(),
               _this = this;
           if(_this.index === 3){
           	    $('#carousel>ul').css({
           	    	left: 0
           	    })
           	    _this.index = 0;
           	    eventCenter.fire('click',_this.index)
           }else{
           	    $('#carousel>ul').css({
           	    	left: '-='+imgWidth
           	    })
           	    _this.index++
           	    eventCenter.fire('click',_this.index)
           }
           
        },
        pre: function(){
            var imgWidth =  $('#carousel li').width(),
               _this = this;
            if(_this.index === 0){
            	$('#carousel>ul').css({
           	    	left: -imgWidth*3
           	    })
           	    _this.index = 3;
           	    eventCenter.fire('click',_this.index)
            }else{
            	$('#carousel>ul').css({
           	    	left: '+='+imgWidth
           	    })
           	    _this.index--
           	    eventCenter.fire('click',_this.index);
            }
           
        }
    }
    return Carousel
})