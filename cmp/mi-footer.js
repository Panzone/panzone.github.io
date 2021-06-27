class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Aguilera Ortega Jordy Ariel.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
