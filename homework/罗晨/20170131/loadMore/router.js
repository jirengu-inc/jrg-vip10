app.get('/loadMore', function(req, res) {
    var start = parseInt(req.query.start) +1,
        length = parseInt(req.query.length);
    var data = [];
    for (var i = start; i < length + start; i++) {
        data.push(i);
    }
    res.send({
        status: 1,
        data: data
    });
});