/**
 * Created by Yang on 2017/1/25.
 */

var tabHeader = document.querySelector('.tab-header');
var tabLis = document.querySelectorAll('.tab-header>li');
var panals = document.querySelectorAll('.tab-content>li');

tabHeader.addEventListener('click', function (e) {
    if(e.target.tagName.toLowerCase() === 'li'){
        console.log(this); // 此处 this 指的是 tabHeader
        for(var i = 0; i < tabLis.length; i++){ // 删除所有 active 标题样式
            tabLis[i].classList.remove('active');
        }
        e.target.classList.add('active'); // 添加触发源 active 标题样式

        var index = [].indexOf.call(tabLis, e.target); // 获取触发源编号
        console.log(index);

        for(var x = 0; x < panals.length; x++ ){  // 隐藏所有面板
            panals[x].classList.remove('active');
        }
        panals[index].classList.add('active');  // 展示对应面板
    }
});