/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
var user = {oxc:'123oxc123',hunger:'123hunger123'}
app.post('/test', function(req, res) {
	var error = ['账号可以使用','此账号已被注册','账号格式不符合']
	var test = {status: 0}
	var regUsername = /^\w{3,10}$/
	var b = req.body

	if(b.username in user){
		test.status = error[1];
	}else if(!(b.username in user)){
		test.status = error[0];
	}
	if(regUsername.test(b.username) === false){
		test.status = error[2];
	}
	if('password' in b){
		testPassword(b.password)
		res.send(test)
	}
	res.send(test)
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/test', function(req, res) {
	var error = ['账号可以使用','此账号已被注册','账号格式不符合']
	var test = {status: 0}
	var regUsername = /^\w{3,10}$/
	var b = req.query

	if(b.username in user){
		test.status = error[1];
	}else if(!(b.username in user)){
		test.status = error[0];
	}
	if(regUsername.test(b.username) === false){
		test.status = error[2];
	}
	if('password' in b){
		testPassword(b.password)
		res.send(test)
	}
	res.send(test)
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});