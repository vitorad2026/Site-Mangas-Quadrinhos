document.addEventListener('DOMContentLoaded', function() {

    const botao = document.querySelector('.btn-menu');
    const menu = document.querySelector('.menu');

    botao.addEventListener('click', function() {

        menu.classList.toggle('ativo');

    });

});