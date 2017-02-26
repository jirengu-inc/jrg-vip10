# 寒假任务6-jquery 动画与 ajax

题目1： jQuery 中， $(document).ready()是什么意思？
题目2： $node.html()和$node.text()的区别?
题目3： $.extend 的作用和用法? 
题目4： jQuery 的链式调用是什么？
题目5： jQuery 中 data 函数的作用

## 题目1： jQuery 中， $(document).ready()是什么意思？
如果把script文件放在head中或者body上方，就需要用到这个

意思就是当页面中的DOM元素都加载完成之后，再执行script中的文件

## 题目2： `$node.html()`和`$node.text()`的区别?
- `$node.html()`：

相当于原生JS中的`innerHTML`，设置每一个匹配元素的html内容，返回一个jquery对象

- `$node.text()`：

相当于原生JS中的`innerTEXT`，设置所有匹配元素的文本内容,与 html() 类似, 但将编码 HTML (将 "<" 和 ">" 替换成相应的HTML实体).返回一个jquery对象

## 题目3： $.extend 的作用和用法? 

```
jQuery.extend([deep,] target [, object1 ] [, objectN ] )
```
将两个或更多对象的内容合并到第一个对象。

在默认情况下，通过$.extend()合并操作**不是递归**的;如果要递归，则需要将`true`作为第一个参数传递

```
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
```

```
$.extend( object1, object2 );
```
不传递参数true的情况，返回：

```
apple: 0
banana: { price: 200 }
cherry: 97
durian:100
```
传递参数true的情况，返回：

```
apple: 0
banana: { weight: 52, price: 200 }//递归合并了
cherry: 97
durian:100
```
## 题目4： jQuery 的链式调用是什么？
例子：

```
$('.footer').css({top: 50px}).addClass('.active').find('p').animate({left: -20px})
```
优点：

1.节省代码量，代码看起来更优雅

2.返回的都是同一个对象，可以提高代码的效率

3.另外还有一种就是让代码流程更清晰

## 题目5： jQuery 中 data 函数的作用

在匹配元素上存储任意相关数据 或 返回匹配的元素集合中的第一个元素的给定名称的数据存储的值。

```
$("body").data("foo", 52);
$("body").data("bar", { myType: "test", count: 40 });
$("body").data({ baz: [ 1, 2, 3 ] });
 
$("body").data("foo"); // 52
$("body").data(); // { foo: 52, bar: { myType: "test", count: 40 }, baz: [ 1, 2, 3 ] }
```

## 题目6：写出以下功能对应的 jQuery 方法

1.给元素 $node 添加 class active，给元素 $node 删除 class active

```
$node.addClass('active')
$node.removeClass('active')
```
2.展示元素$node, 隐藏元素$node

```
$node.show()
$node.hide()
```

3.获取元素$node 的 属性: id、src、title， 修改以上属性

```
$node.attr('id','src','title')
```

4.给$node 添加自定义属性data-src

```
$node.attr('data-src','123')
```

5.在$ct 内部最开头添加元素$node

```
$ct.prepend($node)
```
6.在$ct 内部最末尾添加元素$node

```
$ct.append($node)
```
7.删除$node

```
$node.remove()//不保存
$node.detach()//保存
```
8.把$ct里内容清空

```
$node.empty()
```
9.在$ct 里设置 html <div class="btn"></div>

```
$ct.html('<div class="btn"></div>')
```
10.获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)

```
$node.width()
$node.heigth()

$node.innerWidth() 包括内容，内边距，不包括边框
$node.innerHeight()

$node.outerWidth() 包括内容，内边距，边框
$node.outerHeight()

$node.outerWidth(true) 包括内容，内边距，边框,外边距
$node.outerHeight(true)
```
11.获取窗口滚动条垂直滚动距离

```
$(window).scroll(function(event) {
	/* Act on the event */
	console.log($(window).scrollTop())
});
```
12.获取$node 到根节点水平、垂直偏移距离

```
$node.offset()
```
13.修改$node 的样式，字体颜色设置红色，字体大小设置14px

```
#node.css({
    'font-color': 'red',
    'font-size': '14px'
})
```
14.遍历节点，把每个节点里面的文本内容重复一遍

```
$.each($node,function(){
    var text = $node.text()
    $node.text(text+text)
})
```
15.从$ct 里查找 class 为 .item的子元素

```
$ct.find('.item')
```
16.获取$ct 里面的所有孩子

```
$ct.children()
```
17.对于$node，向上找到 class 为'.ct'的父亲，在从该父亲找
到'.panel'的孩子

```
$node.parent().find('.panel')
```
18.获取选择元素的数量

```
$node.length
```
19.获取当前元素在兄弟中的排行

```
$node.index()
```

## 题目7:
[预览](http://book.jirengu.com/jirengu-inc/jrg-vip10/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A16-jQuery%E4%B8%8EAjax/%E9%A2%98%E7%9B%AE7-%E5%90%84%E7%A7%8D%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95/timu7.html)
[代码](https://github.com/jirengu-inc/jrg-vip10/tree/master/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A16-jQuery%E4%B8%8EAjax/%E9%A2%98%E7%9B%AE7-%E5%90%84%E7%A7%8D%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)


## 题目8:
本地mock成功
[代码](https://github.com/jirengu-inc/jrg-vip10/tree/master/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A16-jQuery%E4%B8%8EAjax/%E9%A2%98%E7%9B%AE8mock)

## 题目9:
[预览](http://book.jirengu.com/jirengu-inc/jrg-vip10/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A16-jQuery%E4%B8%8EAjax/%E9%A2%98%E7%9B%AE9-Ajax%E5%A4%A9%E6%B0%94/weather.html)
[代码](https://github.com/jirengu-inc/jrg-vip10/tree/master/homework/%E6%9B%B9%E7%9D%BF%E9%AA%90/%E5%AF%92%E5%81%87%E4%BB%BB%E5%8A%A16-jQuery%E4%B8%8EAjax/%E9%A2%98%E7%9B%AE9-Ajax%E5%A4%A9%E6%B0%94)




