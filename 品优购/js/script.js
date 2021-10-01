window.onload = function() {
    let dd = document.querySelector('.dd');
    let dt =document.querySelector('.dt');
    dt.onmouseenter = function() {
        dd.style.display = 'block';
    }
    dt.onmouseleave = function() {
        dd.style.display = 'none';
    }
    dd.onmouseenter = function() {
        dd.style.display = 'block';
    }
    dd.onmouseleave = function() {
        dd.style.display = 'none';
    }
}