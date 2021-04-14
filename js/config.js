import "./regSw.js";
import "../lib/movil.js";
import "../lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span
          class="material-icons">
          home
        </span>
        Inicio
      </a>
      <a href="dispositivo.html">
        <span
          class="material-icons">
          home_mini
        </span>
        Dispositivo
      </a>
      <a href="historial.html">
        <span
          class="material-icons">
          home_mini
        </span>
        Historial
      </a>
      <a href="ayuda.html">
        <span
          class="material-icons">
          help
        </span>
        Ayuda
      </a>
      `;
  }
}
customElements.define(
  "mi-nav", MiNav);