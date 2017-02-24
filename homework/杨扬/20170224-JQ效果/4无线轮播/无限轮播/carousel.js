/**
 * Created by Yang on 2017/2/22.
 */
//缓存变量 ↓
var $imgCt = $('.ct-img'),
    $images = $('.ct-img>li'),
    $nextBtn = $('.next'),
    $preBtn = $('.pre'),
    $bulletCt = $('.bullet>ul'),
    $bulletLis = $('.bullet li'),
    imgWidth = $images.outerWidth(true),
    imgLen = $images.length,
    bulletWidth = $bulletLis.outerWidth(true);
//初始化变量 ↓
var imgIndex = 0;
var isLoading = false;
//初始化设置 ↓
$images.eq(0).clone()
        .appendTo($imgCt);
$images.eq(imgLen-1).clone()
        .prependTo($imgCt);
$imgCt.css({
    width: (imgLen+2) * imgWidth
});
$imgCt.css({
    left: -imgWidth
});
$bulletCt.css({
    width: imgLen * bulletWidth
});
//调用自动轮播 ↓
autoPlay();
//监听两侧按钮 ↓
$nextBtn.on('click', function () {
    playNext();
});
$preBtn.on('click', function () {
    playpre();
});
//监听底部圆点标记 ↓
$bulletLis.on('mouseenter', function () {
    var bulletIndex = $(this).index();
    if(bulletIndex > imgIndex){
        playNext(bulletIndex - imgIndex)
    }else if(bulletIndex < imgIndex){
        playpre(imgIndex - bulletIndex)
    }
});
//定义图片前后滚动方法 ↓
function playNext(num) {
    var count = num || 1;
    if(isLoading){return}
    isLoading = true;
    $imgCt.animate({
        left:  '-=' + imgWidth * count
    }, function () {
        imgIndex += count;
        if(imgIndex === imgLen){
            imgIndex = 0;
            $imgCt.css({
                left: -imgWidth
            })
        }
        setBullet();
        isLoading = false;
    });
}
function playpre(num) {
    var count = num || 1;
    if(isLoading){return}
    isLoading = true;
    $imgCt.animate({
        left: '+=' + imgWidth * count
    }, function () {
        imgIndex -= count;
        if(imgIndex < 0){
            imgIndex = imgLen - 1;
            $imgCt.css({
                left: -imgWidth * imgLen
            })
        }
        setBullet();
        isLoading = false;
    });
}
//定义底部圆点显示方法 ↓
function setBullet() {
    $bulletLis.removeClass('active');
    $bulletLis.eq(imgIndex).addClass('active');
}
//定义自动播放方法  ↓
function autoPlay() {
    setInterval(function () {
        playNext();
    }, 3000)
}