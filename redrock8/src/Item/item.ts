import { CustomElement } from '../CustomElement';
// 这里必须写相对路径
import template from './item.html';
import style from './item.less';

@CustomElement({
  tag: 'carouse-item',
  template,
  style,
  shadow: true,
})
export default class CarouselItem extends HTMLElement {
  item: { 'content': string; 'img': string; 'name': string; };

  $content: HTMLQuoteElement;

  $img: HTMLImageElement;

  $name: HTMLSpanElement;

  connectedCallback() {
    this.$content = this.shadowRoot.querySelector('q');
    this.$img = this.shadowRoot.querySelector('img');
    this.$name = this.shadowRoot.querySelector('span.author-name');
    this.render();
  }

  render() {
    this.$content.textContent = this.item.content;
    this.$img.src = this.item.img;
    this.$name.textContent = this.item.name;
  }
}
