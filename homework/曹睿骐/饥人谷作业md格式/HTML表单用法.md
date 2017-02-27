## HTML表单的一些用法
#### 1.表单的作用：
HTML 表单用于接收不同类型的用户输入，用户提交表单时向服务器传输数据，从而实现用户与Web服务器的交互。
#### 2.form标签————代表HTML表单
- form标签是成对出现的,以`<form>`开始,以`</form>`结束
- 属性：

（1）common -- 公共属性

（2）action -- 浏览者输入的数据被传送到的地方

（3）enctype -- 将数据发送到服务器时浏览器使用的编码类型

（4）method -- 数据传送的方法

（5）name -- 元素名称

#### 3.表单元素
###### 1.文本框
```
<input type = “text” name=“名称”/>//单行文本
<textarea cols="30" rows="10"></textarea>//多行文本
```
###### 2.密码框
```
<input type=“password” name=“名称”/>
```
###### 3.单选框
```
<input type=“radio” name=“gender” value=“male”/> 
<input type=“radio”  name=“gender” value=“female”/>
```
###### 4.复选框
```
<input type =“checkbox” name=“language” value=“Java”/> 
<input type =“checkbox”  name=“language” value=“C”/>
<input type =“checkbox” name=“language” value=“C#”/>
```
###### 5.隐藏域
隐藏域通常用于向服务器提交不需要显示给用户的信息
```
<input type=“hidden” name=“隐藏域”/>
```
###### 6.文件上传
使用file，则form的enctype必须设置为multipart/form-data，method属性为POST。
```
<input name="uploadedFile" id="uploadedFile" type="file" size="60" accept="text/*"/>
```
###### 7.下拉列表
selected="selected" 默认为选择项
```
<select name="country" size="10">
	<option value="gam">Gambia</option>
    <option value="mad" selected="selected">Madagascar</option>
    <option value="nam">Namibia</option>
</select>
```
###### 8.```<label></label>```标签
在```<input type=“text”>```前可以写普通的文本来修饰，但是单击修饰文本的时候input并不会得到焦点，而用label则可以，for属性指定要修饰的控件的id，```<label for=“txt1” >内容</label>；```
###### 9.提交按钮
```
<input type="submit" value="提交"/>
```
###### 10.重置按钮
```
<input type=“reset” value=“重置按钮"/>
```
###### 11.普通按钮
```
<input type="button" value="普通按钮"/>
```
###### 12.图像按钮
图像按钮的src属性指定图像源文件，它没有value属性。图像按钮可代替```<input type="submit"/>```，而现在也可以通过css直接将```<input type="submit"/>```按钮的外观设置为一幅图片。
```
<input type="image" src="bg.jpg" />
```
