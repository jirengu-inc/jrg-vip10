
define(['jquery','eventCenter','lazyload','carousel','goTop'],function($,eventcenter,lazyload,carousel,gotop){
	new lazyload();
	new carousel();
	new gotop();
	var bgArr = ['#FD9915','#C5E3FE','#D28E7E','#000000'],
	    textColorArr  = ['#000000','#209BA3','#C0200F','#F6F8FF']
	    textArr = ['人在保护自己最重要的人时就会变得很强','男人至死都保持“少年之心”啊。','那一天，人类终于回想起曾经一度被他们所支配的恐怖，还有囚禁于鸟笼中的那份屈辱','在战争中平等的只有伤痛。']
	eventcenter.on('click',function(index){
        $('.title').text(textArr[index]);
        $('.title').css({
        	color: textColorArr[index]
        })
        $('body').css({
        	backgroundColor: bgArr[index]
        });
	})
})