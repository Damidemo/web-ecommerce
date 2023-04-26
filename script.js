const ham = document.querySelector('.ham');
const nav = document.getElementById('navbar');
const barras = document.querySelectorAll('.ham span');


ham.addEventListener('click', () => {
    nav.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});