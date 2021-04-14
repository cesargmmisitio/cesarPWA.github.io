class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Gonzalez Mendez Cesar Enrique;
  }
}
customElements.define(
  "mi-footer", MiFooter);
