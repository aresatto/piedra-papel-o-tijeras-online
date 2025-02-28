import { Router } from '@vaadin/router';
import { state } from '../state';
export function initEntranceRoom() {
  customElements.define(
    'x-exist-room',
    class ExistingRoom extends HTMLElement {
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
          const roomCode = target['room-code'].value;
          const nameUser = target['name-user'].value;

          state.createUser(nameUser, roomCode);
          target['room-code'].value = '';
          target['name-user'].value = '';
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
            <input class='container__form__input' name='name-user' type='text' placeholder='Nombre'/>
            <input class='container__form__input' name='room-code' type='text' placeholder='codigo'/>
            <button class='container__form__button' >Ingresar a la sala</button>
          </form>
        </main>
        `;
        const styleEl = document.createElement('style');
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
        .container__form {
          max-width: 400px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-top: 100px; /* Bajado 100px */
        }
        .container__form__input {
          width: 85%;
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
          padding: 10px;
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
        `;
        this.shadow.appendChild(styleEl);
        this.listener();
      }
    }
  );
}
