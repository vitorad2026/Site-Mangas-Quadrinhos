
'use strict';

// MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', function () {

    const botao = document.querySelector('.btn-menu');
    const menu = document.querySelector('.menu');

    if (botao && menu) {
        botao.addEventListener('click', function () {
            menu.classList.toggle('ativo');
        });
    }

});

// TEMA CLARO E ESCURO
document.addEventListener('DOMContentLoaded', function () {

    const switcher = document.querySelector('.tema');

    if (switcher) {
        switcher.addEventListener('click', function () {

            const modoEscuro = document.body.classList.toggle('tema-escuro');

            document.body.classList.toggle('tema-claro', !modoEscuro);

            this.textContent = modoEscuro ? '☼' : '☽';
        });
    }

});

// CARROSSEL DOS CARDS
document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll(".carrossel-container").forEach(carrossel => {

        const cards = carrossel.querySelector(".card-box");
        const esquerda = carrossel.querySelector(".seta-esquerda");
        const direita = carrossel.querySelector(".seta-direita");

        if (!cards) return;

        // Botão para voltar
        if (esquerda) {
            esquerda.addEventListener("click", () => {
                cards.scrollBy({
                    left: -cards.clientWidth * 0.8,
                    behavior: "smooth"
                });
            });
        }

        // Botão para avançar
        if (direita) {
            direita.addEventListener("click", () => {
                cards.scrollBy({
                    left: cards.clientWidth * 0.8,
                    behavior: "smooth"
                });
            });
        }

        // Arrastar com o mouse
        let pressionado = false;
        let inicioX = 0;
        let posicaoInicial = 0;
        let arrastou = false;

        cards.addEventListener("pointerdown", (e) => {

            if (e.pointerType !== "mouse" || e.button !== 0) return;

            pressionado = true;
            arrastou = false;
            inicioX = e.clientX;
            posicaoInicial = cards.scrollLeft;

        });

        cards.addEventListener("pointermove", (e) => {

            if (!pressionado) return;

            const movimento = e.clientX - inicioX;

            if (Math.abs(movimento) > 5) {
                arrastou = true;
            }

            if (arrastou) {
                cards.scrollLeft = posicaoInicial - movimento;
            }

        });

        cards.addEventListener("pointerup", () => {
            pressionado = false;
        });

        cards.addEventListener("pointercancel", () => {
            pressionado = false;
        });

    });

});
