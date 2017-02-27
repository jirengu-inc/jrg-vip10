/**
 * Created by Yang on 2017/2/22.
 */
//缓存变量 ↓
var $images = $('.ct-img>li'),
    $nextBtn = $('.next'),
    $preBtn = $('.pre'),
    $bulletCt = $('.bullet>ul'),
    $bulletLis = $('.bullet>ul>li'),
    imgLen = $images.length;
//初始化变量 ↓
var imgIndex = 0;
var isLoading = false;
//JS控制底部圆点容器宽度，增减数量后仍然居中 ↓
$bulletCt.css({
    width: imgLen * 25
});
//监听三种操控按钮 ↓
$preBtn.on('click', function () {
    playPre()
});
$nextBtn.on('click', function () {
    playNext()
});
$bulletLis.on('mouseenter', function () {
    var idx = $(this).index();
    play(idx)
});
//第一次进入页面的渲染，以及自动播放 ↓
play(0);
aotoPlay();
//定义上下按钮的执行逻辑 ↓
function playNext() {
    var idx = (imgIndex+1)%imgLen;
    play(idx);
    setBullet(idx)
}
function playPre() {
    var idx = (imgIndex-1+imgLen)%imgLen;
    play(idx);
    setBullet(idx)
}
//定义代码核心滚动逻辑 ↓
function play(idx) {
    if(isLoading){return}
    isLoading = true;
    $images.eq(imgIndex).fadeOut(500);
    // $images.eq(imgIndex).slideUp(500);//slide可以实现，但是觉得不太好
    $images.eq(idx).fadeIn(500, function () {
        imgIndex = idx;
        setBullet(idx);
        isLoading = false;
    });
}
//定义底部圆点显示方法 ↓
function setBullet(idx) {
    $bulletLis.removeClass('active');
    $bulletLis.eq(idx).addClass('active');
}
//定义自动播放方法 ↓
function aotoPlay() {
    setInterval(function () {
        playNext()
    }, 3000)
}