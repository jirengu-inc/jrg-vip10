app.get('/loadData', function (req, res) {
	var len = req.query.len;
	var data = '';
	var disc = 'abcdefjhigklmnopqrstuvwxyz';
	for(var i = 0; i < len; i++){
		data += disc[Math.floor(Math.random() * disc.length)];
	}
	res.send(data);
})