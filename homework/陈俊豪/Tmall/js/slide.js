window.slides = function(element){
	var $el  = $(element)
	let $view = $el.children('.view')
	var $width = $el.width()
	var count = $el.find('.slide').length

	var $ol = $('<ol class="controls"></ol>')

	for(let i=0;i<count;i++){
		$ol.append('<li></li>')	
	}
	$el.append($ol)
	
	// 移入current
	$ol.on('mouseover','li',function(e){
		let $li = $(e.currentTarget)
		let index = $li.index()

		$li.addClass('active')
		.siblings()
		.removeClass('active')
		gotoSlide(index)
	})
	// setInterval(function(){

	// },3000)

	// 移动
	function gotoSlide(index){
		let number = - $width *index
		$view.css({
			transform :`translateX(${number}px)`
		})
	}
	// 图片占位符
	function imgs(){
		var $allImg = $el.find('img')
		var i
		for(i=0;i<$allImg.length;i++){
			let img = $allImg[i]

			let url = img.getAttribute('data-src')

			let tempImage = $('<img></img>')

			let index = i

			tempImage.src = url

			tempImage.ready(function(){
				img.src = url
			})
		}
	}
	imgs()
}

