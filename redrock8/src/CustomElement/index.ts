export interface CustomElementMetadata {
  tag: string
  template?: string
  style?: string
  shadow: boolean
}

export interface KeyValue {
  [key: string ]: any
}

export const CustomElement = (args: CustomElementMetadata) => {
  return (target: any) => {
    const tag: string = args.tag
    const customElement: any = class extends (target as { new (): any }) {
      showShadowRoot: boolean
      constructor() {
        super()
        this.showShadowRoot = args.shadow
        if(!this.shadowRoot && this.showShadowRoot){
          this.attachShadow({ mode: 'open' })
        }
      }
      connectedCallback() {
        this.__render();
        super.connectedCallback && super.connectedCallback()
      }
      __render() {
        const template = document.createElement('template')
        const style = `${args.style ? `<style>${args.style}</style>` : ''}`
        template.innerHTML = `${style}${args.template ? args.template : ''}`;
        (this.showShadowRoot ? this.shadowRoot : this).appendChild(template.content)
        console.log(template.content)
      }
    };

    if(!customElements.get(tag)){
      customElements.define(tag, customElement)
    }
    return customElement
  };
};