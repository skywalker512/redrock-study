import { addEventListeners } from './eventListener';

// export 出去后有代码提示
export interface CustomElementMetadata {
  tag?: string
  template?: string
  style?: string
  shadow: boolean
}
export const CustomElement = (args: CustomElementMetadata) => (target: any) => {
  // 在解构的时候不需要定义 类型
  const { tag } = args;

  // 装饰器不能写在没有命名的类中
  class customElement extends target {
    showShadowRoot: boolean;

    constructor() {
      super();
      this.showShadowRoot = args.shadow;
      if (!this.shadowRoot && this.showShadowRoot) {
        this.attachShadow({ mode: 'open' });
      }
    }

    connectedCallback() {
      this.$render();
      // eslint-disable-next-line no-unused-expressions
      super.connectedCallback && super.connectedCallback();
      addEventListeners(this);
    }

    $render() {
      const template = document.createElement('template');
      const style = `${args.style ? `<style>${args.style}</style>` : ''}`;
      template.innerHTML = `${style}${args.template ? args.template : ''}`;

      if (this.showShadowRoot) {
        this.shadowRoot.appendChild(template.content);
      } else {
        this.appendChild(template.content);
      }
    }
  }

  customElements.define(tag, customElement);
};
