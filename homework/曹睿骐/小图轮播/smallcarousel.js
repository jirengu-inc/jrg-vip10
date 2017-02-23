/**
 * Created by Ricky on 17/2/22.
 * Date:二月
 * Project Name: 小图轮播.
 * Package Name: .
 * ©2016-2017 Ricky. All Rights Reserved.
 */

$pic = $('.carousel .pic-wrap >li');
$picWrap = $('.carousel .pic-wrap');
$next = $('.carousel .next');
$pre = $('.carousel .pre');

$foot = $('.carousel .foot-wrap >li');

var pageIndex = 0;
var isAnimate = false;


var picWidth = $pic.width();
var picCount = $pic.length;
//克隆头尾元素
$picWrap.append($pic.eq(0).clone());
$picWrap.prepend($pic.eq(3).clone());
//设置li父容器ul的宽度，使之并排
$picWrap.width((picCount+2)*picWidth);
//移动ul的css,使之出现原来的第一张图片，而不是克隆的图
$picWrap.css({left: -picWidth});


//给左右按钮添加事件
$next.on('click',function () {
    playNext(1);
});

$pre.on('click',function () {
    playPre(1);
});
//len表示一次滚动几格
function playNext(len) {
    if (isAnimate){
        return
    }
    isAnimate = true;
    $picWrap.animate({
        left: '-='+len*picWidth,
    },function () {
        pageIndex += len;
        if (pageIndex === picCount){
            pageIndex = 0;
            $picWrap.css({left: -picWidth});

        }
        setFoot();
        isAnimate = false;
    })
}
function playPre(len) {
    if (isAnimate){
        return
    }
    isAnimate = true;
    $picWrap.animate({
        left: '+='+len*picWidth,
    },function () {
        pageIndex -= len;
        if (pageIndex === -1){
            pageIndex = picCount-1;
            $picWrap.css({left: -picWidth*picCount});

        }
        setFoot();
        isAnimate = false;
    })
}

//底部四个小图标点击跳转图片
$foot.on('click',function () {
    var index = $(this).index();
    if (index>pageIndex){
        playNext(index-pageIndex)
    }else if (index<pageIndex){
        playPre(pageIndex-index)
    }
})


//底部4个小图标变色
function setFoot() {
    $foot.removeClass('active').eq(pageIndex).addClass('active');

}




















