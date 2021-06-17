class MiFooter extends HTMLElement {
  connectedCallback(){
    thi.innerHTML = /* html */
      'Copyright &copy; 2021 Aguilera Ortega Jordy Ariel.';
  }
}
customElements.define("mi-footer",MiFooter);
