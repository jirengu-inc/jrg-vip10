/**
 * Created by Yang on 2017/1/25.
 */

var btn = document.querySelector('#btn'),
    modal = document.querySelector('#modal'),
    modalCt = document.querySelector('.modal-ct'),
    close = document.querySelectorAll('.close');

function openHandler() {
    modal.classList.add('show');
}
function closeHandler() {
    modal.classList.remove('show');
}

btn.addEventListener('click', function(e) { // 点击按钮打开modal
    e.stopPropagation();
    openHandler();
});

for(var i = 0; i < close.length; i++){ // 点击按钮关闭modal
    close[i].addEventListener('click', function (e) {
        e.stopPropagation();
        closeHandler();
    });
}

document.body.addEventListener('click', closeHandler); // 点击以为modal关闭
modalCt.addEventListener('click', function (e) { // 点击modal不关闭
    e.stopPropagation();
    openHandler();
});

// 注释：事件特性：事件传递到目标元素后就开始回城，例如：监听body，到了body，就开始返回，此时只要拦截body内的相同事件不到达body即可不处罚body程序