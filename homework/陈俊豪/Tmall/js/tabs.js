window.tabs = function(element){
	var $tabs = $(element)
	let selector = 'ol[data-role="nav"]>li'

	$('.tabs').on('mouseover',selector,function(e){
		//找到选中的li，是第几个
		$li = $(e.currentTarget)
		$index = $li.index()
		// 1.先给当前li添加一个active
		$li.addClass('active')
		// 2.找到他的兄弟
		 .siblings().
		// 3.移除兄弟的active 
		 removeClass('active')

		// 4.先从当前li一直往父级找 ol[data-role="nav"] 
		$li.closest('ol[data-role="nav"]')
		// 5.再找到兄弟 ol[data-role="panes"]
		.siblings('ol[data-role="panes"')
		// 6.找到里面的li
		.find('li')
		// 7.找到第几个li
		.eq($index)
		// 8.给选中的li添加active
		.addClass('active')
		// 9.再找到li他的兄弟
		.siblings()
		// 10.移除它的active
		.removeClass('active')
	})

	$(".tabs").on("mouseout", ".content li", function(e){
		$(".content li").removeClass("active");
		$(".list li").removeClass("active");
	})

}