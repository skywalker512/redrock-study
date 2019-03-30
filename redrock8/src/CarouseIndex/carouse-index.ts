import { CustomElement } from '../CustomElement'
// 这里必须写相对路径
import template from './carouse-index.html'
import style from './carouse-index.less'

import apiData from '../json/index.json'

import {CarouselItem} from '../Item/item'

@CustomElement({
  tag: 'carouse-index',
  template,
  style,
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
    this._list.forEach((item, index)=>{
      const $item = <CarouselItem>document.createElement('carouse-item')
      $item._item = item
      this.appendChild($item)
    })
  }
}