/**
 * Created by Yang on 2017/2/5.
 */

// ajax 调用格式
/*
ajax（{
     method: '',
     url: '',
     data: {},
     // dataType: '', // 若需要则添加，否则不需添加
     asyns: true, // 根据需要可以设置封装函数的默认值为 true
     success: function () {},
     error: function () {}
}）
*/

// ajax 简单封装
function ajax(opts) {
    // 三、对数据进行处理
    // 3.1、若数据存在，将数据组装成字符串
    if(opts.data){
        var dataStr = '';
        for(var key in opts.data){
            dataStr = dataStr + key + '=' + opts.data[key] + '&';
        }
        opts.data = dataStr.substring(0, dataStr.length-1);
    }
    // 3.2、将方法处理为小写
    opts.method = opts.method.toLowerCase();
    // 3.3、若为 get 方法，重新组装 url
    if( (opts.method == 'get') && opts.data){
        opts.url = opts.url + '?' + opts.data;
    }
    // 四、开始 AJAX 函数
    // 4.1、创建 AJAX 对象
    var xhr = new XMLHttpRequest();
    // 4.2、规定所需数据格式
    xhr.open(opts.method, opts.url, opts.asyns);
    // 4.3、发送请求
    if(opts.method == 'get'){
        xhr.send();
    }else if(opts.method == 'post'){
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(opts.data);
    }
    // 4.4、检测服务器响应
    xhr.onreadystatechange = function () {
        if( (xhr.readyState == 4) && (xhr.status == 200) ){
            opts.success( JSON.parse(xhr.responseText) );
            console.log(opts.method);
        }else {
            opts.error();
        }
    }
}