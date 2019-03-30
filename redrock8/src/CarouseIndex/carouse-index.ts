import { CustomElement } from '../CustomElement'
// 这里必须写相对路径
import template from './carouse-index.html'
import style from './carouse-index.less'

import apiData from '../json/index.json'

import { CarouselItem } from '../Item/item'

@CustomElement({
  tag: 'carouse-index',
  template,
  style,
  shadow: true,
})
export class CarouselIndex extends HTMLElement {
  _list: { "content": string; "img": string; "name": string; }[]
  $slides: HTMLUListElement;
  $inputs: HTMLDivElement;
  _activeNum: number;
  $slidesNavigation: HTMLDivElement;

  constructor() {
    super()
    this._list = apiData
    this._activeNum
  }
  connectedCallback() {
    // 模版 html 中有的
    this.$slides = this.shadowRoot.querySelector('ul.slides')
    this.$slidesNavigation = this.shadowRoot.querySelector('div#slidesNavigation')

    this.__render()

    // 动态生成的
    this.$slidesNavigation.addEventListener('click', this.handelRadioClick)
    this.$slidesNavigation.firstElementChild.classList.add('checked')
    this._activeNum = 0
  }
  __render() {
    this._list.forEach((item) => {
      // 填入信息
      const $item = <CarouselItem>document.createElement('carouse-item')
      $item._item = item
      this.$slides.appendChild($item)

      // 单选圆点
      const $radio = document.createElement('div')
      $radio.classList.add('radio')
      this.$slidesNavigation.appendChild($radio)
    })
    // 将div撑开
    this.$slides.style.width = `${this._list.length * 100}%`
  }

  handelRadioClick: EventListener = e => {
    if (e.srcElement.matches('.radio')) {
      e.srcElement.parentElement.childNodes.forEach((item: HTMLElement, index) => {
        if (item.classList.contains('checked')) item.classList.remove('checked')
        // 移动
        if (item === e.srcElement) this._activeNum = index
      })
      e.srcElement.classList.add('checked')
      this.$slides.style.transform = `translateX(-${(this._activeNum / this._list.length) * 100}%)`
    }
  }
}