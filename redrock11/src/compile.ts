import { IData, Watcher } from "./mvvm";

export default class Compile {
  vm: IData
  constructor(el: string, vm: IData) {
    this.vm = vm // 把传进来的vm 存起来，因为这个vm.a = 1 没毛病
    const element = document.querySelector(el) // 拿到 app 节点
    const fragment = document.createDocumentFragment() // 创建fragment代码片段
    // 这时这个节点并没有被渲染
    fragment.append(element) // 把app节点 添加到 创建fragment代码片段中
    this.replace(fragment) // 套数据函数
    if(document.body) document.body.appendChild(fragment) // 最后添加到body中
  }
  replace(frag: DocumentFragment | HTMLElement) {
    let vm = this.vm // 拿到之前存起来的vm
    // 循环frag.childNodes
    Array.from(frag.childNodes).forEach((node: HTMLElement) => {
      let txt = node.textContent // 拿到文本 例如："开发语言：{{language}}"
      let reg = /\{\{\s*(.*?)\s*\}\}/g // 定义匹配正则
      if (node.nodeType === 3 && reg.test(txt)) {
        // 如果匹配到的话，就替换文本
        replaceTxt()
        function replaceTxt() {
          node.textContent = txt.replace(reg, (matched, placeholder) => {
            new Watcher(vm, placeholder, replaceTxt);   // 监听变化，进行匹配替换内容
            return placeholder.split('.').reduce((val: IData, key:string) => {
              return val[key]
            }, vm)
          })
        }
      }
      // 如果还有字节点，并且长度不为0 
      if (node.childNodes && node.childNodes.length) {
        // 直接递归匹配替换
        this.replace(node)
      }
    })
  }
}