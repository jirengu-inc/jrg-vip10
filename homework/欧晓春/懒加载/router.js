/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
var news = [
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153837606_150120/0',
		link: 'http://news.qq.com/a/20170218/001455.htm',
		title: '英国首相与法国总理会晤 商讨英国脱欧事务'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153558644_150120/0',
		link: 'http://news.qq.com/a/20170217/057692.htm',
		title: '印度打算给豪华婚礼征税 税收将用来救济穷人家新娘'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153870123_150120/0',
		link: 'http://news.qq.com/a/20170218/001317.htm',
		title: '工信部回应系列热点：或调整政策防新能源汽车骗补'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153845553_150120/0',
		link: 'http://news.qq.com/a/20170218/001531.htm',
		title: '男子在ATM机上查余额 隔壁机器突然“吐”出9000元'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153808313_150120/0',
		link: 'http://news.qq.com/a/20170218/001052.htm',
		title: '福建渔船马祖海上起火 8名渔民获救1人失踪'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153837606_150120/0',
		link: 'http://news.qq.com/a/20170218/001455.htm',
		title: '英国首相与法国总理会晤 商讨英国脱欧事务'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153558644_150120/0',
		link: 'http://news.qq.com/a/20170217/057692.htm',
		title: '印度打算给豪华婚礼征税 税收将用来救济穷人家新娘'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153870123_150120/0',
		link: 'http://news.qq.com/a/20170218/001317.htm',
		title: '工信部回应系列热点：或调整政策防新能源汽车骗补'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153845553_150120/0',
		link: 'http://news.qq.com/a/20170218/001531.htm',
		title: '男子在ATM机上查余额 隔壁机器突然“吐”出9000元'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153808313_150120/0',
		link: 'http://news.qq.com/a/20170218/001052.htm',
		title: '福建渔船马祖海上起火 8名渔民获救1人失踪'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153837606_150120/0',
		link: 'http://news.qq.com/a/20170218/001455.htm',
		title: '英国首相与法国总理会晤 商讨英国脱欧事务'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153558644_150120/0',
		link: 'http://news.qq.com/a/20170217/057692.htm',
		title: '印度打算给豪华婚礼征税 税收将用来救济穷人家新娘'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153870123_150120/0',
		link: 'http://news.qq.com/a/20170218/001317.htm',
		title: '工信部回应系列热点：或调整政策防新能源汽车骗补'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153845553_150120/0',
		link: 'http://news.qq.com/a/20170218/001531.htm',
		title: '男子在ATM机上查余额 隔壁机器突然“吐”出9000元'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153808313_150120/0',
		link: 'http://news.qq.com/a/20170218/001052.htm',
		title: '福建渔船马祖海上起火 8名渔民获救1人失踪'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153837606_150120/0',
		link: 'http://news.qq.com/a/20170218/001455.htm',
		title: '英国首相与法国总理会晤 商讨英国脱欧事务'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153558644_150120/0',
		link: 'http://news.qq.com/a/20170217/057692.htm',
		title: '印度打算给豪华婚礼征税 税收将用来救济穷人家新娘'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153870123_150120/0',
		link: 'http://news.qq.com/a/20170218/001317.htm',
		title: '工信部回应系列热点：或调整政策防新能源汽车骗补'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153845553_150120/0',
		link: 'http://news.qq.com/a/20170218/001531.htm',
		title: '男子在ATM机上查余额 隔壁机器突然“吐”出9000元'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153808313_150120/0',
		link: 'http://news.qq.com/a/20170218/001052.htm',
		title: '福建渔船马祖海上起火 8名渔民获救1人失踪'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153837606_150120/0',
		link: 'http://news.qq.com/a/20170218/001455.htm',
		title: '英国首相与法国总理会晤 商讨英国脱欧事务'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153558644_150120/0',
		link: 'http://news.qq.com/a/20170217/057692.htm',
		title: '印度打算给豪华婚礼征税 税收将用来救济穷人家新娘'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153870123_150120/0',
		link: 'http://news.qq.com/a/20170218/001317.htm',
		title: '工信部回应系列热点：或调整政策防新能源汽车骗补'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153845553_150120/0',
		link: 'http://news.qq.com/a/20170218/001531.htm',
		title: '男子在ATM机上查余额 隔壁机器突然“吐”出9000元'
	},
	{
		img: 'http://inews.gtimg.com/newsapp_ls/0/1153808313_150120/0',
		link: 'http://news.qq.com/a/20170218/001052.htm',
		title: '福建渔船马祖海上起火 8名渔民获救1人失踪'
	},
]
app.get('/more', function(req, res) {
	var count = parseInt(req.query.count),
	    newsArray = [];
	for(var i = count; i < count+3; i++){
		newsArray.push(news[i])
		if(count >= news.length){
			res.send([]);
		}
	}
	res.send(newsArray);
	
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/:uid', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // 'ruoyu'
	res.send({
		status: 1,
		errorMsg: "请先注册"
	});
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