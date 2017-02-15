app.get('/loadData', function(req, res) {
	var dataStr = '';
	var len = 10;
	var disc = 'abcdefjhigklmnopqrstuvwxyz';
	for(var i = 0; i < len; i++){
		dataStr += disc[Math.floor(Math.random() * disc.length)];
	}
	var callback = req.query.callback;
	data = callback + '(' + JSON.stringify(dataStr) + ');';
	// console.log(dataStr);
	// console.log(data);
	res.send(data);
});