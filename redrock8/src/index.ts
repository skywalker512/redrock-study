import { CustomElement } from './CustomElement'
// 这里必须写相对路径
import temp from './counter-element.html'
import css from './ccs.less'
@CustomElement({
  tag: 'counter-element',
  template: temp,
  style: css,
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