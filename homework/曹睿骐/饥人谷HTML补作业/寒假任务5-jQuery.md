
# 一.为什么会有跨域问题？

**不通俗地来说：**浏览器出于安全方面的考虑，只允许与**本域**下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。

    本域：
    - 1.同协议：都是http，https，ftp等；
    - 2.同域名：都是a.rickyer.com或者都是b.rickyer.com；
    - 3.同端口：都是80端口或者443端口；

 **通俗地来说：** 比如有2个页面，一个是我的个人网站，一个是你的支付宝，如果浏览器允许随意跨域，那么我就可以通过操作我个人网站上的js代码来对你的支付宝进行操作，这样是不是很危险啊？所以浏览器要杜绝这种现象，不会让你去操作其他页面。


-------

# 二.跨域的几种实现方式

*本文只讨论实现方式，不讨论其中的安全问题*

-------

## 1. JSONP（JSON with Padding）

#### 原理：

- 虽然Ajax直接请求普通文件存在跨域无权限访问的问题，但是Web页面上调用js文件时不受是否跨域的影响。

- `<script>`标签在请求别的资源时不受跨域影响，不管是js，txt或者别的类型的资源

- 利用`<script>`标签的特性，前端传递参数的时候加上一个参数，服务器端包装数据，让其返回可执行的 JS 函数，将要返回的数据作为参数传进函数，从而实现跨域


-------

## 2. CORS

CORS全称跨域资源共享（Cross-Origin Resource Sharing），是一种 ajax 跨域请求资源的方式，支持现代浏览器，IE支持10以上。

#### 原理：
- 当你使用 XMLHttpRequest 发送请求时，浏览器发现该请求不符合同源策略，会给该请求加一个请求头：Origin，后台进行一系列处理，如果确定接受请求则在返回结果中加入一个响应头：`Access-Control-Allow-Origin`


- 浏览器判断该相应头中是否包含 Origin 的值，如果有则浏览器会处理响应，我们就可以拿到响应数据，如果不包含浏览器直接驳回，这时我们无法拿到响应数据。所以 CORS 的表象是让你觉得它与同源的 ajax 请求没啥区别，代码完全一样。


-------

## 3. 降域
具有一定限制，通常用于子域名之间的资源访问。

例如：

- `a.rickyer.com` 和  `b.rickyer.com`之间的资源访问可以用降域；

- `a.rickyer.com` 和 `b.baidu.com` 之间就不能降域

#### 原理：

- 通过设置`document`对象中的`domain`属性,将两个子域名的域降到一样的，就可以实现跨域资源访问（两个子域名都需要设置`domain`属性）


```
document.domain = "rickyer.com";
```

## 4.PostMessage
常用场景：

- 1.页面和其打开的新窗口的数据传递

- 2.多窗口之间消息传递

- 3.页面与嵌套的iframe消息传递

- 4.上面三个问题的跨域数据传递

#### 原理：

- 利用`window.postMessage()`方法。`postMessage()`方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。

#### 语法：

```
otherWindow.postMessage(message, targetOrigin, [transfer]);
```
- `otherWindow`: 其他窗口的一个引用，比如iframe的contentWindow属性、执行window.open返回的窗口对象、或者是命名过或数值索引的window.frames。

- `message`: 将要发送到其他 window的数据。它将会被结构化克隆算法序列化。这意味着你可以不受什么限制的将数据对象安全的传送给目标窗口而无需自己序列化。

- `targetOrigin`: 通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。

- `transfer `  *可选*  ： 是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

# 三. 关键代码

## 1.JSONP

前端：

```
$('.change').addEventListener('click', function(){ // 绑定事件
    var script = document.createElement('script'); // 创建一个script标签
    script.src = 'http://localhost:8080/getNews?callback=appendHtml'; // 设置请求资源的地址,并加上callback参数
    document.head.appendChild(script); // 将标签添加到html页面的head部分
    document.head.removeChild(script); // 移除标签，防止页面产生过多script标签
  })
```

后端：


```
var cb = req.query.callback; // 提取前端提交的callback部分的值
	if(cb){
		res.send(cb + '('+ JSON.stringify(data) + ')'); // 如果传递的callback，则包装数据，构造可执行的JS函数
	}else{
		res.send(data); //没有就直接返回原数据
	}
```

## 2. CORS
在后端添加一个`Access-Control-Allow-Origin`相应头即可

```
res.header("Access-Control-Allow-Origin", "*"); 
res.header("Access-Control-Allow-Origin", "a.rickyer.com");

//"*"代表所有域都可以用，也可以替换为给定的域，例如"a.rickyer.com"
```


## 3.降域

只需要在页面`script`标签末尾添加一行`document.domain = "rickyer.com"`就可以

```
<script>
    ······
    ······
    document.domain = "rickyer.com"
</script>
```

## 4. PostMessage

```
window.onload=function(){
            window.frames[0].postMessage('getNews','http://rickyer.com');
        }
```


# 四. 总结
 - 1.跨域都需要服务器的支持，不能强求
 
 - 2.跨域有许多安全性的问题，使用的时候要注意

 - 3.貌似带有属性`src`的都不受跨域限制，例如`iframe` `img` `script`



-------

参考资料：

* [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

* [JSONP](https://zh.wikipedia.org/wiki/JSONP)

* [详解JS跨域](https://segmentfault.com/a/1190000000718840)
 













