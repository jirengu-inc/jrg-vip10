## h1-h6 标题
## p 段落，表示大段文字
## a 链接，链接到一个地址
1.href
2.target
3.title 鼠标放在上面就会提示
```
<a href="#" target="_blank" title="nihao">饥人谷</a>
```
```
<img src="nihao.com/123123.png" alt="tupian">
alt在图片有问题的时候会显示一段alt中的文字，还有视力有问题的人看网页的时候会给他们展示alt文字说明
```
自闭和标签

## div 语义为“一大块”，用于给页面划分
```
<div id="header">一大段</dv>
```
id是唯一的名字

class是类的名字

## ul li 无序列表 可以嵌套，表示并列的内容
导航栏什么的……

## ol li 有序列表，带有表示步骤或者编号的内容

## dl dt dd 用于展示一系列“标题：内容” 的场景
```
<dl>
	<dt>商品名称</dt> title
    <dd>青花瓷</dd> 描述descibe
</dl>
```

## button 按钮

## strong em span 包裹某些文字
- em 
- strong
- span


## iframe 用于嵌入一个页面,注意跨域操作
```
<iframe src="fsdf" name="myPage"></iframe>
<p><a href="qwe" target="myPage">23123</a></p>
```

## table 展示表格，不要用来做布局
- tr
- th
- td

## 

# 注意点：
- 标签属性全小写
- 标签要闭合，自闭合标签可以省略/
- 标题里不能有段落，段落里不能有标题

## 块级元素和行内元素

## HTML 表单 必须用<form>包裹
 ```
 <div class="username">
 	
 </div>
 ```
 
 ```
 <form action="/abd" method="post"></form>
 ```
- action
- method

POST 和 GET 区别：
GET会出现信息
POST不会

安全问题，数据量问题 
用post传数据大概没有限制

## 什么时候用GET,什么时候用POST
我向后台要数据:GET


向后台传数据：POST
安全性较高： POST


 ## 表单元素
 form标签，表单外壳：
 - action
 - method
 - target
 - enctype  编码方式，在发送前编码所有字符
input type:
```
<input id="username" type="text" name="username" placeholder="nihao">
```输入框中默认的提示选项

placeholder代表
- password
- text
- checkbox 

lable:
```
<lable for="username" name="hobby" value="read">xingming</lable>
```

```
<input typr="radio" name="sex">nan
```

flie:文件上传
```
<input type="file" accept="images/png">
```

## 下拉菜单
```
<h3>下拉菜单</h3>
<select>
	<option value="beijing"></option>
    <option value="beijing"></option>
    <option value="beijing"></option>
    <option value="beijing" selected></option>
</select>
```

## 多行文本
```
<textarea></textarea>
```

```
<input tpye="hidden" name="abcd">
```
hidden的作用是暂存一些信息，csrf攻击。





