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
  $itmes: HTMLUListElement;
  $inputs: HTMLDivElement;
  _activeNum: number;
  $slidesNavigation: HTMLDivElement;

  constructor() {
    super()
    this._list = apiData
    this._activeNum
  }
  connectedCallback() {
    this.$itmes = this.shadowRoot.querySelector('ul.slides')
    this.$slidesNavigation = this.shadowRoot.querySelector('div#slidesNavigation')
    this.__render()
  }
  __render() {
    this._list.forEach((item, index)=>{
      const $item = <CarouselItem>document.createElement('carouse-item')
      $item._item = item
      this.$itmes.appendChild($item)
      this.$slidesNavigation.insertAdjacentHTML('beforeend', `<div class="radio"></div>`)
    })
  }
}