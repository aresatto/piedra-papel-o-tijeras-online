import { Router } from '@vaadin/router';
import { state } from '../state';
const piedra = require('url:./hands/piedra.png');
const papel = require('url:./hands/papel.png');
const tijera = require('url:./hands/tijera.png');

export function initCreateRoom() {
  customElements.define(
    'x-new-room',
    class NewRoom extends HTMLElement {
      shadow = this.attachShadow({ mode: 'open' });
      constructor() {
        super();
        this.render();
      }
      listener() {
        const formEl: any = this.shadow.querySelector('.container__form');
        formEl.addEventListener('submit', (e) => {
          e.preventDefault();
          const target = e.target as any;
          const name = target.player.value;
          state.createRoom(name);
          target.player.value = '';
        });
      }
      render() {
        this.shadow.innerHTML = `
        <main class='container'>
          <h1 class='container__title'>
            <span class="title__pink">Piedra</span>
            <span class="title__blue">Papel</span>
            <span class="title__purple">o</span>
            <span class="title__yellow">Tijera</span>
          </h1>
          <form class='container__form'>
            <label class='container__form__title'>Tu nombre</label>
            <input class='container__form__input' type='text' name='player'/>
            <button class='container__form__button'>Empezar</button>
          </form>
        </main>
        <section class='container__hands'>
          <img class='container__hands__rock' src='${piedra}'/>
          <img class='container__hands__paper' src='${papel}'/>
          <img class='container__hands__scissors' src='${tijera}'/>
        </section>
      `;
        const styleEl = document.createElement('style');
        styleEl.innerHTML = `
        .container {
          padding-bottom: 20px;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          font-family: 'Odibee Sans', cursive;
        }
        .container__title {
          margin: 0;
          width: 100%;
          font-size: 60px;
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
        .container__form {
          max-width: 400px;
          padding: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-top: 100px; /* Bajado 100px */
        }
        .container__form__title {
          font-size: 45px;
          font-family: 'Odibee Sans', cursive;
          text-shadow: 0 0 5px #FFFFFF; /* Contorno blanco */
        }
        .container__form__input {
          width: 85%;
          height: 45px;
          padding: 10px;
          border-radius: 10px;
          border: solid 10px #000000; /* Borde negro */
          color: #D9D9D9;
          font-size: 45px;
          font-family: 'Odibee Sans', cursive;
          text-align: center;
        }
        .container__form__button {
          width: 95%;
          height: 80px;
          padding: 5px;
          border: solid 10px #000000; /* Borde negro */
          background-image: linear-gradient(to right, #1E90FF, #8A2BE2, #FF1493); /* Ajuste a un azul más claro, pero no celeste */
          color: white;
          border-radius: 10px;
          font-size: 45px;
          font-family: 'Odibee Sans', cursive;
          transition: background 0.1s ease-in-out, border-color 0.1s ease-in-out; /* Transición rápida */
          margin-top: 0px; /* Subido 60px */
        }
        .container__form__button:active {
          background-image: linear-gradient(to right, #FF6347, #6A5ACD, #4682B4); /* Colores complementarios */
          border-color: white; /* Borde de color blanco al presionar */
        }
        .container__hands {
          margin: 0 auto;
          width: 350px;
          display: flex;
          justify-content: space-between;
          position: absolute;
          left: 20%;
          right: 20%;
          bottom: 10px; /* Ajuste de posición */
        }
        @media (max-width: 600px) {
          .container__hands {
            left: 10%;
            right: 10%;
          }
        }
        .container__hands__rock,
        .container__hands__paper,
        .container__hands__scissors {
          width: 80px;
        }
        `;
        this.shadow.appendChild(styleEl);
        this.listener();
      }
    }
  );
}
