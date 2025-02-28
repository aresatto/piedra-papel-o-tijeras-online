import { Router } from '@vaadin/router';
const piedra = require('url:./hands/piedra.png');
const papel = require('url:./hands/papel.png');
const tijera = require('url:./hands/tijera.png');

export function initHomePage() {
  customElements.define(
    'x-home',
    class Home extends HTMLElement {
      shadow = this.attachShadow({ mode: 'open' });
      constructor() {
        super();
        this.render();
      }
      buttonListener() {
        const btnNewGameEl: any = this.shadow.querySelector('.container__btn-new-game');
        const btnRoomEl: any = this.shadow.querySelector('.container__btn-room');

        btnNewGameEl.addEventListener('click', () => {
          Router.go('/new-room');
        });
        btnRoomEl.addEventListener('click', () => {
          Router.go('/exist-room');
        });
      }
      render() {
        const containEl = document.createElement('div');
        const styleEl = document.createElement('style');
        containEl.innerHTML = `
        <main class='container'>
          <h1 class='container__title'>
            <span class="title__pink">Piedra</span>
            <span class="title__blue">Papel</span>
            <span class="title__purple">o</span>
            <span class="title__yellow">Tijera</span>
          </h1>
          <div class='btn-container'>
            <button class='container__btn-new-game'>Nuevo Juego</button>
            <button class='container__btn-room'>Ingresar a una sala</button>
          </div>
          <div class='hands'>
            <img class='hands__rock' src='${piedra}'/>
            <img class='hands__paper' src='${papel}'/>
            <img class='hands__scissors' src='${tijera}'/>
          </div>
        </main>
        `;

        styleEl.innerHTML = `
        .container {
          height: 100vh;
          padding-bottom: 20px;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          font-family: 'Odibee Sans', cursive;
        }
        .container__title {
          margin: 0;
          font-size: 80px;
          color: #009048;
          max-width: 280px;
          text-align: center;
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-top: 22px; /* Bajado 22px */
        }
        .title__pink {
          color: #FF69B4; /* Rosa fuerte */
          text-shadow: 0 0 5px #FF69B4, 0 0 10px #000000; /* Contorno negro */
        }
        .title__blue {
          color: #1E90FF; /* Azul */
          text-shadow: 0 0 5px #1E90FF, 0 0 10px #000000; /* Contorno negro */
        }
        .title__purple {
          color: #8A2BE2; /* Morado */
          text-shadow: 0 0 5px #8A2BE2, 0 0 10px #000000; /* Contorno negro */
        }
        .title__yellow {
          color: #FFD700; /* Amarillo */
          text-shadow: 0 0 5px #FFD700, 0 0 10px #000000; /* Contorno negro */
        }
        .btn-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-top: 70px; /* Ajuste de la posición */
        }
        .container__btn-new-game,
        .container__btn-room {
          width: 320px;
          height: 80px;
          font-size: 45px;
          font-family: 'Odibee Sans', cursive;
          color: white;
          background-image: linear-gradient(to right, #1E90FF, #8A2BE2, #FF1493); /* Degradado azul, morado y rosa */
          border: solid 10px #000000; /* Borde negro */
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.1s ease-in-out, border-color 0.1s ease-in-out; /* Transición rápida */
        }
        .container__btn-new-game:active,
        .container__btn-room:active {
          background-image: linear-gradient(to right, #FF6347, #6A5ACD, #4682B4); /* Colores complementarios */
          border-color: white; /* Borde de color blanco al presionar */
        }
        .hands {
          margin: 0 auto;
          width: 350px;
          display: flex;
          justify-content: space-between;
          position: absolute;
          left: 20%;
          right: 20%;
          bottom: 15px; /* Ajuste de la posición */
        }
        @media (max-width: 600px) {
          .hands {
            left: 10%;
            right: 10%;
          }
        }
        .hands__rock,
        .hands__paper,
        .hands__scissors {
          width: 80px;
        }
        `;

        this.shadow.appendChild(styleEl);
        this.shadow.appendChild(containEl);
        this.buttonListener();
      }
    }
  );
}
