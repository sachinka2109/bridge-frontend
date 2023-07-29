let menuIcon = document.getElementsByClassName('fa-bars')[0];
let closeIcon = document.getElementsByClassName('fa-xmark')[0];
let menuBar = document.getElementsByClassName('navbar-inner')[0];

menuIcon.addEventListener('click', function(){
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    menuBar.style.display = 'inline-block';
})

closeIcon.addEventListener('click', function(){
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    menuBar.style.display = 'none';
})