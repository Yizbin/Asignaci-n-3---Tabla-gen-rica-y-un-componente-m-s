export interface Columna {
  clave: string;
  titulo: string;
}

export class TablaGenerica extends HTMLElement {
  private _columnas: Columna[] = [];
  private _filas: Record<string, any>[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get columnas(): Columna[] {
    return this._columnas;
  }

  set columnas(val: Columna[]) {
    this._columnas = val;
    this.render();
  }

  get filas(): Record<string, any>[] {
    return this._filas;
  }

  set filas(val: Record<string, any>[]) {
    this._filas = val;
    this.render();
  }

  private render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./tabla-generica.css">
      ${
        this._filas.length === 0
          ? `<div class="sin-datos">Sin datos</div>`
          : `
            <table>
              <thead>
                <tr>
                  ${this._columnas.map(col => `<th>${col.titulo}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${this._filas.map(fila => `
                  <tr>
                    ${this._columnas.map(col => `<td>${fila[col.clave] ?? ''}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          `
      }
    `;
  }
}

customElements.define('tabla-generica', TablaGenerica);