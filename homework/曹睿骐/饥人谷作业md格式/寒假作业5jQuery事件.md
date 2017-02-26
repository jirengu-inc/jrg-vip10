
## 题目1--库和框架的区别
#### 库（Library）：提供函数的封装

库是将代码集合成的一个产品，供程序员调用。面向对象的代码组织形式而成的库也叫类库。面向过程的代码组织形式而成的库也叫函数库。
在函数库中的可直接使用的函数叫库函数。开发者在使用库的时候，只需要使用库的一部分类或函数，然后继续实现自己的功能。
#### 框架（Framework）：抽象的软件结构

框架则是为解决一个(一类)问题而开发的产品，框架用户一般只需要使用框架提供的类或函数，即可实现全部功能。可以说，框架是库的升级版。
开发者在使用框架的时候，必须使用这个框架的全部代码。

## 题目二--jquery 能做什么
**jQuery库为Web脚本编程提供了通用(跨浏览器)的抽象层，使得它几乎适用于任何脚本编程的情形**

jQuery通常为我们提供以下功能：

1.方便快捷获取DOM元素


```
$('div.content').find('p');
```

2.动态修改页面样式

```
$('ul > li:first').addClass('active');
```

3.动态改变DOM内容


```
$('#container').append('<a href="more.html">more</a>');
```

4.响应用户的交互操作

```
 $('button.show-details').click(function() {
   $('div.details').show();
 });
```

5.为页面添加动态效果

```
$(function () {
            $("#btnShow").click(function () {
                $("#msubject").hide("slow");
            });
        });
```

6.统一Ajax操作


```
$.ajax({
  accepts: {
    mycustomtype: 'application/x-some-custom-type'
  },
 
  // Instructions for how to deserialize a `mycustomtype`
  converters: {
    'text mycustomtype': function(result) {
      // Do Stuff
      return newresult;
    }
  },
 
  // Expect a `mycustomtype` back from server
  dataType: 'mycustomtype'
});
```

7.简化常见的JavaScript任务

```
$.each(obj, function(key, value) {
  total += value;
});

```

## 题目3--jQuery 对象和 DOM 原生对象有什么区别？如何转化？

1.区别：

- jquery选择器得到的jquery对象和标准的 javascript中的document.getElementById()取得的dom对象是两种不同的对象类型，两者不等价；

- jQuery无法使用DOM对象的任何方法，同理DOM对象也不能使用jQuery里的方法. 乱使用会报错。

2.转化：

- 原生DOM对象转jQuery对象：


```
var box = document.getElementById('box');
var $box = $(box);
```

- jQuery对象转原生DOM对象：


```
var $box = $('#box');
var box1 = $box[0];
var box2 = $box.get(0);
```

## 题目4--jQuery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？
- `bind` `unbind` `delegate` `live` `on` `off``都是绑定事件的方法

- 现在一般使用 `on` 和 `off`

- 使用on绑定事件使用事件代理的写法:


```
<div id="ct">
    <ul>
        <li>123</li>
        <li>123</li>
    </ul>
</div>
$('#ct').on('click','li',{name: "ruiqi"},function(e){
    console.log(e.data)
})
```

## 题目5--jQuery 如何展示/隐藏元素
- 展示元素：


```
$('#ct').on('click',function(){
    $('p').show(speed,callback); //speed控制速度 （取值为slow，fast等），callback是展示完之后执行的函数名
})
```

- 隐藏元素


```
$('#ct').on('click',function(){
    $('p').hide(speed,callback); 
})

```

## 题目6--jquery 动画如何使用
- 语法：


```
$(selector).animate({params},speed,callback);
```
必需的 params 参数定义形成动画的 CSS 属性。
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是动画完成后所执行的函数名称。

- 例子：


```
$("button").click(function(){
  $("div").animate({left:'250px'});
}); 
```

## 题目7--如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？
- 设置和获取元素内部HTML内容

不带参数表获取，带参数表设置

```
$('#ct').html()
```

- 设置和获取元素内部文本

 
不带参数表获取，带参数表设置

```
$('#ct').text()
```


## 题目8--如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？
- 设置和获取表单用户输入或者选择的内容


```
$('#ct').val()
```

- 设置和获取元素属性


```
$('#ct').attr('name','ricky')
```



## 题目9--二级列表
#### [代码地址](https://github.com/jirengu-inc/jrg-vip10/blob/master/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A15-jQuery%E9%80%89%E6%8B%A9%E5%99%A8%E4%BA%8B%E4%BB%B6/%E9%A2%98%E7%9B%AE11-%E4%BB%A3%E7%90%86/index.html)
#### [预览](http://book.jirengu.com/jirengu-inc/jrg-vip10/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A15-jQuery%E9%80%89%E6%8B%A9%E5%99%A8%E4%BA%8B%E4%BB%B6/%E9%A2%98%E7%9B%AE9-%E4%BA%8C%E7%BA%A7%E5%88%97%E8%A1%A8/index.html)
## 题目10--Tab切换
[代码地址](https://github.com/jirengu-inc/jrg-vip10/blob/master/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A15-jQuery%E9%80%89%E6%8B%A9%E5%99%A8%E4%BA%8B%E4%BB%B6/%E9%A2%98%E7%9B%AE10-tab%E5%88%87%E6%8D%A2/index.html)
[预览](http://book.jirengu.com/jirengu-inc/jrg-vip10/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A15-jQuery%E9%80%89%E6%8B%A9%E5%99%A8%E4%BA%8B%E4%BB%B6/%E9%A2%98%E7%9B%AE10-tab%E5%88%87%E6%8D%A2/index.html)
## 题目11--代理
[代码地址](https://github.com/jirengu-inc/jrg-vip10/blob/master/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A15-jQuery%E9%80%89%E6%8B%A9%E5%99%A8%E4%BA%8B%E4%BB%B6/%E9%A2%98%E7%9B%AE11-%E4%BB%A3%E7%90%86/index.html)
[预览](http://book.jirengu.com/jirengu-inc/jrg-vip10/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A15-jQuery%E9%80%89%E6%8B%A9%E5%99%A8%E4%BA%8B%E4%BB%B6/%E9%A2%98%E7%9B%AE11-%E4%BB%A3%E7%90%86/index.html)


 



