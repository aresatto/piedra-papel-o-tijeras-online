const piedra = require('url:./hands/piedra.png');
const papel = require('url:./hands/papel.png');
const tijera = require('url:./hands/tijera.png');
import 'animate.css';
import { state } from '../state';
import { Router } from '@vaadin/router';

export function initGameTimer() {
  customElements.define(
    'x-game-timer',
    class GameTimer extends HTMLElement {
      shadow = this.attachShadow({ mode: 'open' });
      constructor() {
        super();
        this.render();
      }
      sendOption() {
        const rockButtonEl: any = this.shadow.querySelector('.hands__rock');
        const paperButtonEl: any = this.shadow.querySelector('.hands__paper');
        const scissorsButtonEl: any = this.shadow.querySelector('.hands__scissors');

        rockButtonEl.addEventListener('click', () => state.setMove('piedra'));
        paperButtonEl.addEventListener('click', () => state.setMove('papel'));
        scissorsButtonEl.addEventListener('click', () => state.setMove('tijera'));
      }

      timer() {
        const progressRing: any = this.shadow.querySelector('progress-ring');
        const counter: any = this.shadow.querySelector('.timer-number');

        let timeLeft = 3;
        let idInterval = setInterval(() => {
          counter.textContent = timeLeft.toString();
          progressRing.setAttribute('progress', (timeLeft / 3) * 100);

          if (timeLeft === 0) {
            clearInterval(idInterval);
          }
          timeLeft--;
        }, 1000);
      }

      render() {
        this.shadow.innerHTML = `
          <section class='timer-container'>
            <progress-ring class="progress-ring" stroke="10" radius="100" progress="100"></progress-ring>
            <h1 class="timer-number">3</h1>
          </section>
          <section class='hands'>
            <img class='hands__option hands__rock' src='${piedra}'>
            <img class='hands__option hands__paper' src='${papel}'>
            <img class='hands__option hands__scissors' src='${tijera}'>
          </section>
        `;

        const style = document.createElement('style');
        style.innerHTML = `
          .timer-container {
            margin: 0;
            height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          .progress-ring {
            position: absolute;
            width: 220px;
            height: 220px;
            z-index: -1; /* Lo coloca detrás del número */
          }
          .timer-number {
            font-size: 90px;
            font-weight: bold;
          }
          .hands {
            margin: 0 auto;
            width: 350px;
            display: flex;
            justify-content: space-between;
            position: absolute;
            left: 20%;
            right: 20%;
            bottom: -30px;
          }
          @media (max-width: 600px) {
            .hands {
              width: 300px;
              left: 10%;
              right: 10%;
            }
          }
          .hands__rock, .hands__paper, .hands__scissors {
            width: 100px;
            opacity: 0.5;
          }
          @media (max-width: 600px) {
            .hands__rock, .hands__paper, .hands__scissors {
              width: 80px;
            }
          }
          .hands__rock:hover, .hands__paper:hover, .hands__scissors:hover {
            position: relative;
            bottom: 50px;
            opacity: 1;
          }
        `;

        this.shadow.appendChild(style);
        this.timer();
        this.sendOption();
      }
    }
  );
}
