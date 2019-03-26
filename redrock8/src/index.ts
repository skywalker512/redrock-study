import { CustomElement } from './CustomElement'

@CustomElement({
  tag: 'counter-element',
  template: `<button id="count"></button>`,
  style: '',
  shadow: true,
})
export class CounterElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log(3)
  }
  __render() {
    console.log(4)
  }
}