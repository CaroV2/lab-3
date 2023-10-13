import { getDigimon } from "./components/data";
import "./components/card/Card"; // Importamos la definición del componente Card

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const digimonData = await getDigimon();
    this.render(digimonData);
  }

  render(digimonData: any[]) {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/style.css">
        <div class="card-container">
          ${digimonData
            .map(
              (digimon) => `
            <my-card
              img="${digimon.img}"
              name="${digimon.name}"
              level="${digimon.level}"
            ></my-card>
          `
            )
            .join("")}
        </div>
      `;
    }
  }
}

customElements.define("app-container", AppContainer);
