app.get("/getNews", function(req, res){
	var news = [
		"444",
		"555",
		"666",
		"777",
		"888",
		"999",
		"000"
	]
	var data = [];
	for(var i = 0; i < 3; i++){
		var index = parseInt(Math.random() * news.length);
		data.push(news[index]);
		news.splice(index, 1);
	}
	var cb = req.query.callback;
	if(cb){
		res.send(cb + "(" + JSON.stringify(data) + ")");
	}else{
		res.send(data);
	}
})