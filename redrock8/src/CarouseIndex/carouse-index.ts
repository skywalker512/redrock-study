import { CustomElement } from '../CustomElement'
// 这里必须写相对路径
import template from './carouse-index.html'
import style from './carouse-index.less'

import apiData from '../json/index.json'
@CustomElement({
  tag: 'carouse-index',
  template: template,
  style: style,
  shadow: true,
})
export class CarouselIndex extends HTMLElement {
  _list: { "content": string; "img": string; "name": string; }[]
  constructor() {
    super()
    this._list = apiData
  }
  connectedCallback() {
    console.log(this.getAttribute('time'))
  }
  __render() {
    // this._list.forEach((item, index)=>{

    // })
    console.log(1)
  }
}