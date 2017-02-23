/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /getMore
 * 返回响应数据
 */
app.get('/getMore', function(req, res) {
	var len = req.query.len,
	    start = req.query.start,
	    data = [];
	    for(var i = 0;i<len;i++){
	    	data[i] =  '内容'+ (parseInt(start)+i)
	    }

	res.send(data);
});


