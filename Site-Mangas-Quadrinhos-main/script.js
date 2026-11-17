document.addEventListener('DOMContentLoaded', function() {

    const botao = document.querySelector('.btn-menu');
    const menu = document.querySelector('.menu');

    botao.addEventListener('click', function() {

        menu.classList.toggle('ativo');

    });

});


'use strict';

        document.addEventListener('DOMContentLoaded', function () {
            const switcher = document.querySelector('.tema');

            switcher.addEventListener('click', function () {
                const modoEscuro = document.body.classList.toggle('tema-escuro');
                document.body.classList.toggle('tema-claro', !modoEscuro);
                this.textContent = modoEscuro ? '☼' : '☽';
            });
        });
    