// export 出去后有代码提示
export interface CustomElementMetadata {
  tag?: string
  template?: string
  style?: string
  shadow: boolean
}

export interface KeyValue {
  [key: string]: any
}

export const CustomElement = (args: CustomElementMetadata) => (target: any) => {
  // 在解构的时候不需要定义 类型
  const { tag } = args
  // 装饰器不能写在没有命名的类中
  class CustomElement extends target {
    showShadowRoot: boolean
    constructor() {
      super()
      this.showShadowRoot = args.shadow
      if (!this.shadowRoot && this.showShadowRoot) {
        this.attachShadow({ mode: 'open' })
      }
    }
    @connectSuper
    connectedCallback() {
      this.__render()
    }
    @connectSuper
    __render() {
      const template = document.createElement('template')
      const style = `${args.style ? `<style>${args.style}</style>` : ''}`
      template.innerHTML = `${style}${args.template ? args.template : ''}`; // 这里为什么必须要 ; 
      (this.showShadowRoot ? this.shadowRoot : this).appendChild(template.content)
    }
  }
  customElements.define(tag, CustomElement)
}

function connectSuper (target: object, property: string, descriptor: any): void {
  const oldValue = descriptor.value
  descriptor.value = function() {
    oldValue.apply(this, arguments)
    Object.getPrototypeOf(target)[property] && Object.getPrototypeOf(target)[property].apply(this)
  }
  // 传回去的 descriptor 会在 类中执行，即会绑定相应的 this
  return descriptor
}