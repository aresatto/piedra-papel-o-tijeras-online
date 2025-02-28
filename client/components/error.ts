import { state } from '../state';
import { Router } from '@vaadin/router';

const ERROR = [
  {
    error: 'error player',
    description: 'Ups, esta sala está completa y tu nombre no coincide con nadie en la sala.',
  },
  {
    error: 'error playroom',
    description: 'Ups, esta sala no existe, regresá, crea una o comprueba si tu codigo es correcto',
  },
];
export function initErrorPage() {
  customElements.define(
    'x-error',
    class Error extends HTMLElement {
      shadow = this.attachShadow({ mode: 'open' });
      constructor() {
        super();
        this.render();
      }
      listener() {
        const buttonEl = this.shadow.querySelector('.button') as any;
        buttonEl.addEventListener('click', () => {
          Router.go('/');
        });
      }
      render() {
        const errorText: any = ERROR.find((e) => e.error == state.data.error);
        this.shadow.innerHTML = `
        <main class='container'>
          <h1 class='container__title'>
            <span class="title__pink">Piedra</span>
            <span class="title__blue">Papel</span>
            <span class="title__purple">o</span>
            <span class="title__yellow">Tijera</span>
          </h1>
          <div class='container__description'>
            <p class='container__description-text'>${errorText.description}</p>  
          </div>
          <section class='container-button'>
            <button class='button'>Volver</button>
          </section>
        </main>
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
        .container__description {
          max-width: 320px;
          display: flex;
          font-size: 45px;
          margin: 0;
          padding: 20px;
        }
        .container__description-text {
          margin: 0;
          text-align: center;
          color: red;
        }
        .container-button {
          width: 400px;
          padding: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        @media (max-width: 400px) {
          .container-button {
            padding: 10px;
            width: 350px;
          }
        }
        .button {
          width: 100%;
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
        .button:active {
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
