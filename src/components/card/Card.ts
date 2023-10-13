export enum Attribute {
  "img" = "img",
  "name" = "name",
  "level" = "level",
}

class Card extends HTMLElement {
  img?: string;
  name?: string;
  level?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      img: null,
      name: null,
      level: null,
    };
    return Object.keys(attrs);
  }

  attributeChangedCallback(
    propName: Attribute,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      case Attribute.img:
        this.img = newValue;
        break;
      case Attribute.name:
        this.name = newValue;
        break;
      case Attribute.level:
        this.level = newValue;
        break;
    }
    this.render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <link href="/src/components/card/Card.css" rel="stylesheet">
        <div class="card">
        <img src="${this.img}" alt="${this.name}" class="card-img" />
          <div class="card-info">
            <p class="text-title">${this.name}</p>
            <p class="text-body">${this.level}</p>
          </div>
        </div>
      `;
    }
  }
}

customElements.define("my-card", Card);
export default Card;
