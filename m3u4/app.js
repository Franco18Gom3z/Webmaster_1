let alternar = document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click', function(e) {
    e.target.classList.toggle('activo');
});