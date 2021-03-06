import { CustomElement } from '../CustomElement';
import { Listen } from '../CustomElement/eventListener';
// 这里必须写相对路径
import template from './carouse-index.html';
import style from './carouse-index.less';

import apiData from '../json/index.json';

import CarouselItem from '../Item/item';

@CustomElement({
  tag: 'carouse-index',
  template,
  style,
  shadow: true,
})
export default class CarouselIndex extends HTMLElement {
  $slides: HTMLUListElement;

  $slidesNavigation: HTMLDivElement;

  $carousel: HTMLDivElement;

  state: {
    list: { content: string; img: string; name: string; }[],
    activeNum: number,
    time: number,
    autoChangeNum: number,
    transitionMode: string,
  };

  constructor() {
    super();
    this.state = {
      list: [], activeNum: null, time: null, autoChangeNum: null, transitionMode: null,
    };
  }

  connectedCallback(): void {
    // 注入 state
    this.state.list = apiData;
    this.state.activeNum = 0;
    this.state.time = parseInt(this.getAttribute('time'), 10);
    this.state.transitionMode = this.getAttribute('transition-mode');

    // 模版 html 中有的
    this.$slides = this.shadowRoot.querySelector('ul.slides');
    this.$slidesNavigation = this.shadowRoot.querySelector('div#slidesNavigation');
    this.$carousel = this.shadowRoot.querySelector('div.carousel');

    this.render();

    // 动态生成的
    this.$slidesNavigation.firstElementChild.classList.add('checked');

    this.handelAutoChange();
  }

  render() {
    this.state.list.forEach(item => {
      // 填入信息
      const $item = <CarouselItem>document.createElement('carouse-item');
      $item.item = item;
      this.$slides.appendChild($item);

      // 单选圆点
      const $radio = document.createElement('div');
      $radio.classList.add('radio');
      this.$slidesNavigation.appendChild($radio);
    });
    // 将div撑开
    if (this.state.transitionMode === 'slide') this.$slides.style.width = `${this.state.list.length * 100}%`;
  }

  // 通过装饰器后 使用 call 绑定了 this, 不再需要使用 箭头方法了
  @Listen('click', '$slidesNavigation')
  handelRadioClick(e: Event) {
    const ele = <HTMLElement>e.srcElement;
    if (!ele.matches('.radio')) {
      return;
    }
    ele.parentNode.childNodes.forEach((item: HTMLElement, index: number) => {
      if (item === ele) this.handelChangeRadio(index);
    });
  }

  // mouseenter 不会冒泡，到了才触发
  @Listen('mouseenter', '$carousel')
  handelMouseenter() {
    clearInterval(this.state.autoChangeNum);
  }

  @Listen('mouseleave', '$carousel')
  handelMouseleave() {
    this.handelAutoChange();
  }

  handelChangeRadio = (index: number) => {
    this.$slidesNavigation.childNodes.forEach((item: HTMLElement, num) => {
      if (num === this.state.activeNum) item.classList.remove('checked');
      if (num === index) item.classList.add('checked');
    });
    this.state.activeNum = index;
    if (this.state.transitionMode === 'slide') {
      this.$slides.style.transform = `translateX(-${(this.state.activeNum / this.state.list.length) * 100}%)`;
    }
  };

  handelAutoChange = () => {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(this.state.time)) {
      this.state.autoChangeNum = setInterval(this.handelAutoChangeRadio, this.state.time);
    }
  };

  handelAutoChangeRadio = () => {
    this.handelChangeRadio((this.state.activeNum + 1) % this.state.list.length);
  }
}
