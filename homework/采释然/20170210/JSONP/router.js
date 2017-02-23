app.get('/getMore',function(req,res){
	var data = ['姓名：小明','年龄：20','性别：男']
	var cb = req.query.callback;
	res.send(cb+'('+JSON.stringify(data)+')');
})