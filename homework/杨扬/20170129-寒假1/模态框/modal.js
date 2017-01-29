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
// 点击按钮打开modal
btn.addEventListener('click', function(e) { 
    e.stopPropagation();
    openHandler();
});
// 点击按钮关闭modal
for(var i = 0; i < close.length; i++){ 
    close[i].addEventListener('click', function (e) {
        e.stopPropagation();
        closeHandler();
    });
}
// 点击modal以外modal关闭；点击modal不关闭
document.body.addEventListener('click', closeHandler); 
modalCt.addEventListener('click', function (e) {
    e.stopPropagation();
    openHandler();
});