let modalBtns = document.querySelectorAll('.open'),
    modal = document.querySelectorAll('.modal');

modalBtns[0].onclick = function() {
    modal[0].style.display = 'block';
};
modalBtns[1].onclick = function() {
    modal[1].style.display = 'block';
};
modalBtns[2].onclick = function() {
    modal[2].style.display = 'block';
};
modalBtns[3].onclick = function() {
    modal[3].style.display = 'block';
};
 
let closeBtn = document.querySelectorAll('.close');

closeBtn.onclick = function() {
    if (closeBtn[0] = true) {
        modal[0].style.display = 'none';
    } 
};