var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import globalStyles from '../_globals/global-styles';
import { getSvgContent, iconContent } from '../../utils/requests';
import { ifDefined } from 'lit/directives/if-defined.js';
let GwdsIcon = class GwdsIcon extends LitElement {
    constructor() {
        super(...arguments);
        /*The icon color. Allowed values: any of the "gwds" colors present in the system.*/
        this.color = null;
        /*If "autocolor" attribute is present and no "color" was provided, the icon color will be its original color*/
        this.autoColor = false;
        /*If enabled, the icon will be loaded lazily when it's visible in the viewport.*/
        this.lazy = false;
        /*The size of the icon. Possible values: small, medium, large.*/
        this.size = 's';
        /*The URL of the icon.*/
        this.src = '';
        /*The icon name (only for gwds system icons, at assets/icons) "src" attribute will be ignored if this attribute is present.*/
        this.name = '';
        this.isVisible = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('gwds-icon');
        /* purposely do not return the promise here because loading
        the svg file should not hold up loading the app
        only load the svg if it's visible */
        this.waitUntilVisible(this, '50px', () => {
            this.isVisible = true;
            this.getIcon();
        });
    }
    disconnectedCallback() {
        if (this.io !== undefined) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, rootMargin, callback) {
        if (this.lazy &&
            typeof window !== 'undefined' &&
            window.IntersectionObserver) {
            const io = (this.io = new window.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    callback();
                }
            }, { rootMargin }));
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            callback();
        }
    }
    async getIcon() {
        if (this.isVisible) {
            if (this.src || this.name) {
                const source = this.name ? `./assets/icons/${this.name}.svg` : this.src;
                if (iconContent.has(this.src)) {
                    this.svgContent = iconContent.get(source);
                }
                else {
                    this.svgContent = await getSvgContent(source);
                }
            }
            else {
                this.svgContent = '';
                return;
            }
        }
    }
    iconColor() {
        if (!this.color) {
            if (!this.autoColor) {
                //If color is not defined, set color equal to inherited color
                const inheritedColor = window
                    .getComputedStyle(this, null)
                    .getPropertyValue('color');
                return inheritedColor;
            }
            else {
                return;
            }
        }
        else {
            return `var(--gwds__color--${this.color})`;
        }
    }
    render() {
        const content = html `<div
      class="gwds-icon__div"
      .innerHTML=${ifDefined(this.svgContent)}
      style="width: var(--gwds__icon-size--${this
            .size}); height: var(--gwds__icon-size--${this
            .size}); --gwds__icon-color: ${this.iconColor()}"
    />`;
        return content;
    }
};
GwdsIcon.styles = [
    globalStyles,
    css `
      :host(.gwds-icon) {
        display: inline-block;
        line-height: 0;
      }
      div {
        display: inline-block;
        line-height: 0;
      }
      svg {
        width: 100%;
        height: 100%;
        fill: var(--gwds__icon-color);
      }
      :host(.gwds-icon:not([autocolor])) svg * {
        fill: var(--gwds__icon-color);
      }
      /* RESPONSIVE */
      /*sm*/
      @media (min-width: 576px) {
      }
      /*md*/
      @media (min-width: 768px) {
      }
      /*lg*/
      @media (min-width: 992px) {
      }
      /*xl*/
      @media (min-width: 1200px) {
      }
      /*xxl*/
      @media (min-width: 1400px) {
      }
    `,
];
__decorate([
    property({ type: String })
], GwdsIcon.prototype, "color", void 0);
__decorate([
    property({ type: Boolean })
], GwdsIcon.prototype, "autoColor", void 0);
__decorate([
    property({ type: Boolean })
], GwdsIcon.prototype, "lazy", void 0);
__decorate([
    property({ type: String })
], GwdsIcon.prototype, "size", void 0);
__decorate([
    property({ type: String })
], GwdsIcon.prototype, "src", void 0);
__decorate([
    property({ type: String })
], GwdsIcon.prototype, "name", void 0);
__decorate([
    state()
], GwdsIcon.prototype, "isVisible", void 0);
__decorate([
    state()
], GwdsIcon.prototype, "svgContent", void 0);
GwdsIcon = __decorate([
    customElement('gwds-icon')
], GwdsIcon);
export { GwdsIcon };
//# sourceMappingURL=gwds-icon.js.map