const piedra = require('url:./hands/piedra.png');
const papel = require('url:./hands/papel.png');
const tijera = require('url:./hands/tijera.png');
import { Router } from '@vaadin/router';
import { state } from '../state';

export function initStartGame() {
  customElements.define(
    'x-start-game',
    class StartGame extends HTMLElement {
      shadow = this.attachShadow({ mode: 'open' });
      codeRoom: number = state.data.keyRoom;
      meName = state.data.namePlayers.me;
      otherName = state.data.namePlayers.other;
      constructor() {
        super();
        this.render();
      }
      listener() {
        const buttonEl: any = this.shadow.querySelector('.button-main');
        buttonEl.addEventListener('click', () => {
          state.data.flagStart = true;
          state.resetStartGame();
          Router.go('/waiting-room');
        });
      }
      userOnline(otherOnline: boolean) {
        const iconEl: any = this.shadow.querySelector('.icon-inline-other');
        if (otherOnline) {
          iconEl.setAttribute('class', 'icon-inline-other online');
        } else {
          iconEl.setAttribute('class', 'icon-inline-other offline');
        }
      }
      render() {
        this.shadow.innerHTML = `
        <header class='header'>
          <aside class='header__players-score'>
            <h2 class='header__players-score__me'>
              <div class='icon-inline-me online'></div>
              <div class='players-points'>
              ${this.meName}: ${state.data.points.me}
              </div>
            </h2>
            <h2 class='header__players-score__another'>
              <div class='icon-inline-other offline'></div>
              <div class='players-points'>
              ${this.otherName}: ${state.data.points.other}
              </div>
            </h2>
          </aside>
          <aside class='header__room'>
            <h2 class='header__room__title'>Sala:</h2>
            <h2 class='header__room__code'>${this.codeRoom}</h2>
          </aside>
        </header>
        <h1 class='title-main'>
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </h1>
        <div class='btn-container'>
          <button class='button-main'>¡Jugar!</button>
        </div>
        <footer class='hands'>
          <img class='container__hands__rock' src='${piedra}'/>
          <img class='container__hands__paper' src='${papel}' />
          <img class='container__hands__scissors' src='${tijera}' />
        </footer>
        `;
        const styleEl = document.createElement('style');
        styleEl.innerHTML = `
        .header {
          display: flex;
          justify-content: space-between;
          padding: 0 40px;
          font-size: 24px;
          font-family: 'Odibee Sans', cursive;
          align-items: center;
        }
        .header__players-score,
        .header__room {
          height: 120px;
        }
        .header__players-score__me {
          margin: 0;
        }
        .header__players-score__another {
          margin: 0;
          color: #FF6442;
        }
        .header__players-score__me,
        .header__players-score__another {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header__room__title {
          margin: 0;
        }
        .header__room__code {
          font-weight: 400;
          margin: 0;
        }
        .icon-inline-me,
        .icon-inline-other {
          display: inline;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .online {
          background-color: #a4de02;
        }
        .offline {
          background-color: red;
        }
        .title-main {
          width: 380px;
          font-size: 60px;
          font-family: 'Odibee Sans', cursive;
          text-align: center;
          margin: 0 auto;
        }
        @media (max-width: 390px) {
          .title-main {
            width: 300px;
            font-size: 50px;
          }
        }
        .btn-container {
          display: flex;
          justify-content: center;
          margin-top: 25px; /* Ajuste de la posición */
        }
        .button-main {
          width: 300px;
          margin: 0 auto;
          padding: 5px;
          border: solid 10px #000000; /* Borde negro */
          border-radius: 10px;
          color: white;
          background-image: linear-gradient(to right, #1E90FF, #8A2BE2, #FF1493); /* Degradado azul, morado y rosa */
          font-family: 'Odibee Sans', cursive;
          font-size: 35px;
          transition: background 0.1s ease-in-out, border-color 0.1s ease-in-out; /* Transición rápida */
        }
        .button-main:active {
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
            width: 300px;
            left: 10%;
            right: 10%;
          }
        }
        @media (max-width: 375px) {
          .hands {
            width: 300px;
            left: 5%;
            right: 5%;
          }
        }
        .container__hands__rock,
        .container__hands__paper,
        .container__hands__scissors {
          width: 60px;
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
          text-shadow: 0 0 5px #FF69B4, 0 0 10px #FFFFFF; /* Contorno blanco */
        }
        .title__blue {
          color: #1E90FF; /* Azul */
          text-shadow: 0 0 5px #1E90FF, 0 0 10px #FFFFFF; /* Contorno blanco */
        }
        .title__purple {
          color: #8A2BE2; /* Morado */
          text-shadow: 0 0 5px #8A2BE2, 0 0 10px #FFFFFF; /* Contorno blanco */
        }
        .title__yellow {
          color: #FFD700; /* Amarillo */
          text-shadow: 0 0 5px #FFD700, 0 0 10px #FFFFFF; /* Contorno blanco */
        }
        `;
        this.userOnline(state.data.otherOnline);
        this.shadow.appendChild(styleEl);
        this.listener();
      }
    }
  );
}
