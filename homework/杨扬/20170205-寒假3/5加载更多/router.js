/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/loadMore', function(req, res) {
	var startIndex = req.query.startIndex;
	var more = req.query.more;
	var back = [];
	for(var i = 0; i < more; i++) {
		back.push( '新闻' + (parseInt(startIndex) + (i+1)) )
	}
	res.send(back);
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/loadMore', function(req, res) {
	console.log(req.body.loadMore);
	var startIndex = req.body.startIndex;
	var more = req.body.more;
	var back = [];
	for(var i = 0; i < more; i++) {
		back.push( '新闻' + (parseInt(startIndex) + (i+1)) )
	}
	res.send(back);
});