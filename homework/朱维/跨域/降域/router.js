// /**
//  * 使用范例
//  */


// /**
//  * 发送 GET 请求， 无参数
//  * GET /hello
//  * 返回响应数据
//  */
// app.get('/hello', function(req, res) {
// 	res.send({
// 		status: 0,
// 		msg: "hello 饥人谷"
// 	});
// });


// /**
//  * 发送 GET 请求, 有参数
//  * GET /user/100
//  * query = { name: 'ruoyu', age: 28 }
//  */
// app.get('/user/:uid', function(req, res) {
// 	console.log(req.params.uid); //100
// 	console.log(req.query.name); // 'ruoyu'
// 	res.send({
// 		status: 1,
// 		errorMsg: "请先注册"
// 	});
// });


// *
//  * 发送 POST 请求， 有参数
//  * POST /comment
//  * query = { comment: "这是评论内容" }
 
// app.post('/comment', function(req, res) {
// 	console.log(req.body.comment); // "这是评论内容"
// 	res.send({
// 		status: 0,
// 		data: {
// 			cid: 100,
// 			comment: "这是评论内容"
// 		}
// 	});
// });



// /**
//  * 页面路由，从模板渲染页面渲染页面, 
//  * htttp://localhost:8080/user
//  * 支持 ejs, jade 模板
//  */
// app.get('/user', function(req, res) {
// 	res.render('user.ejs', {
// 		username: '饥人谷'
// 	});
// });
app.post("/news",function (req,res) {
    var news = [
        "新闻2",
        "新闻1",
        "新闻3",
        "新闻4",
        "新闻5",
        "新闻6",
        "新闻7"
    ]
    var newsDis = [];
    for(var i = 0;i<3;i++){
        var index = Math.floor(Math.random()*news.length);
        newsDis.push(news[index]);
    }
    // res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin","http://zhuwei_leo.com:8080");
    res.send(newsDis);
})