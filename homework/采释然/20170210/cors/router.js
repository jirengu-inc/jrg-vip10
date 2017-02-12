app.get('/getMore',function(req,res){
	var data = ["I'll be the paint on the wall","I'll be the rain in the fall","I will be anything you want "];
	res.header("Access-Control-Allow-Origin",'http://a.hello.com:8080');
	res.send(JSON.stringify(data))
})