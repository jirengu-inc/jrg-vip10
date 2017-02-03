app.get('/getNums', function(req, res) {
	var array = [
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
	    data.push(array[parseInt(Math.random() * array.length)]);
	    array.splice(parseInt(Math.random() * array.length), 1);
    }
    res.header("Access-Control-Allow-Origin", "http://b.com:8080");
    res.send(data);
});