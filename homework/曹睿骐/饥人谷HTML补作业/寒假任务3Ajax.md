# 寒假任务3-Ajax
## 题目1： ajax 是什么？有什么作用？
- AJAX即“Asynchronous JavaScript and XML”（异步的JavaScript与XML技术）
- AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。
## 题目2： 前后端开发联调需要注意哪些事情？后端接口完成前如何 mock 数据？
#### 注意事项：
- 1.方法，是post还是get
- 2.注意数据类型和参数传递
- 3.写文档
#### 如何mock数据：
- 使用mock-server，或一些其他工具（mockjs，Postman等）

## 题目3：点击按钮，使用 ajax 获取数据，如何在数据到来之前防止重复点击?
- 1.使用状态锁，当发起一个ajax请求时，把状态锁关闭，关闭期间，任何点击都无效，请求完成时，打开状态锁
- 2.设定定时器，两次提交的时间间隔必须大于某数值，不然就将计时器清零

## 题目4：封装一个 ajax 函数，能通过如下方式调用。后端在本地使用server-mock来 mock 数据
[代码](http://js.jirengu.com/funaqujoqi/1/edit)

## 题目5：实现加载更多的功能
[代码](http://js.jirengu.com/doluvaboha/1/edit?html,js,output)
