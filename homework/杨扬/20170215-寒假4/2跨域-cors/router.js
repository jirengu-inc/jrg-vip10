app.get('/loadData', function(req, res) {
	var disc = 'abcdefjhigklmnopqrstuvwxyz';
	var data = '';
	for(var i = 0; i < 10; i++){
		data += disc[Math.floor(Math.random() * disc.length)];
	}
	res.header("Access-Control-Allow-Origin", "http://a.yang.com:8080");
	res.send(data);
});

app.post('/loadData', function(req, res) {
	var disc = 'abcdefjhigklmnopqrstuvwxyz';
	var data = '';
	for(var i = 0; i < 10; i++){
		data += disc[Math.floor(Math.random() * disc.length)];
	}
	res.header("Access-Control-Allow-Origin", "http://a.yang.com:8080");
	res.send(data);
});