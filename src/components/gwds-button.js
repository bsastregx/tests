var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import globalStyles from '../_globals/global-styles';
let GwdsButton = class GwdsButton extends LitElement {
    constructor() {
        super(...arguments);
        this.label = undefined;
        this.type = 'primary';
        this.size = 'regular';
        this.url = undefined;
        this.target = '_self';
    }
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('gwds-button');
        this.type === 'primary' ? this.classList.add('gwds-button--primary') : null;
        this.type === 'secondary'
            ? this.classList.add('gwds-button--secondary')
            : null;
        this.type === 'tertiary'
            ? this.classList.add('gwds-button--tertiary')
            : null;
        this.size === 'regular' ? this.classList.add('gwds-button--regular') : null;
        this.size === 'small' ? this.classList.add('gwds-button--small') : null;
        this.url ? this.classList.add('gwds-button--with-link') : null;
    }
    render() {
        const content = this.url
            ? html `<a href=${this.url}>${this.label}</a>`
            : html `<button>${this.label}</button>`;
        return content;
    }
};
GwdsButton.styles = [
    globalStyles,
    css `
      :host(.gwds-button) {
        display: inline-block;
      }
      button,
      a {
        display: inline-block;
        font-family: var(--gwds__font-family--body);
        font-size: var(--gwds__font-size--m);
        font-weight: var(--gwds__font-weight--medium);
        cursor: pointer;
        border-radius: var(--gwds__radius--m);
        border: none;
        transition: all var(--gwds__transition--super-fast);
        padding: var(--gwds__space--s) var(--gwds__space--m);
        text-decoration: none;
      }
      button:hover,
      a:hover {
        transform: scale(1.05);
        text-decoration: none;
      }
      /*primary*/
      :host(.gwds-button--primary) button,
      :host(.gwds-button--primary) a {
        color: var(--gwds__color--white);
        background-color: var(--gwds__color--fuchsia-500);
        border: 1px solid transparent;
      }
      :host(.gwds-button--primary) button:hover,
      :host(.gwds-button--primary) a:hover {
        background-color: var(--gwds__color--fuchsia-700);
      }
      /*secondary*/
      :host(.gwds-button--secondary) button,
      :host(.gwds-button--secondary) a {
        color: var(--gwds__color--black);
        background-color: var(--gwds__color--white);
        border: 1px solid transparent;
      }
      :host(.gwds-button--secondary) button:hover,
      :host(.gwds-button--secondary) a:hover {
        background-color: var(--gwds__color--dark-100);
      }
      /*tertiary*/
      :host(.gwds-button--tertiary) button,
      :host(.gwds-button--tertiary) a {
        color: inherit;
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-color: inherit;
      }
      :host(.gwds-button--tertiary) button:hover,
      :host(.gwds-button--tertiary) a:hover {
        color: var(--gwds__color--fuchsia-700);
      }
      /*small*/
      :host(.gwds-button--small) button,
      :host(.gwds-button--small) a {
        padding: var(--gwds__space--xs) var(--gwds__space--s);
      }
    `,
];
__decorate([
    property({ type: String })
], GwdsButton.prototype, "label", void 0);
__decorate([
    property({ type: String })
], GwdsButton.prototype, "type", void 0);
__decorate([
    property({ type: String })
], GwdsButton.prototype, "size", void 0);
__decorate([
    property({ type: String })
], GwdsButton.prototype, "url", void 0);
__decorate([
    property({ type: String })
], GwdsButton.prototype, "target", void 0);
GwdsButton = __decorate([
    customElement('gwds-button')
], GwdsButton);
export { GwdsButton };
//# sourceMappingURL=gwds-button.js.map