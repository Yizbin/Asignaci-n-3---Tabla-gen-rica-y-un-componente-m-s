export class ContadorCantidad extends HTMLElement {
  static get observedAttributes() {
    return ['valor', 'min', 'max'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get valor(): number {
    return Number(this.getAttribute('valor')) || 1;
  }

  set valor(val: number) {
    this.setAttribute('valor', val.toString());
  }

  get min(): number {
    return Number(this.getAttribute('min')) || 1;
  }

  get max(): number {
    return Number(this.getAttribute('max')) || 99;
  }

  private cambiar(delta: number) {
    const nuevoValor = Math.min(Math.max(this.valor + delta, this.min), this.max);
    if (nuevoValor !== this.valor) {
      this.valor = nuevoValor;
      this.dispatchEvent(new CustomEvent('cambio-cantidad', {
        detail: { cantidad: this.valor },
        bubbles: true,
        composed: true
      }));
    }
  }

  private render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./contador-cantidad.css">
      <button id="btn-menos" ${this.valor <= this.min ? 'disabled' : ''}>-</button>
      <span>${this.valor}</span>
      <button id="btn-mas" ${this.valor >= this.max ? 'disabled' : ''}>+</button>
    `;

    this.shadowRoot.querySelector('#btn-menos')?.addEventListener('click', () => this.cambiar(-1));
    this.shadowRoot.querySelector('#btn-mas')?.addEventListener('click', () => this.cambiar(1));
  }
}

customElements.define('contador-cantidad', ContadorCantidad);