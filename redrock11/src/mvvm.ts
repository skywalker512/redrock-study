import Compile from "./compile";

export interface IOptions {
  el?: string,
  data?: IData,
}

export interface IData {
  [propName: string]: any
}

export default class {
  constructor(options: IOptions = { el: 'body', data: {} }) {
    this.data = options.data || {}
    this.initVm()
    this.initObserve()
    new Compile(options.el, this.data)
    // 创建了之后吧 this.vm 也就是 this 被 proxy 的对象传出去 
    return this.vm
  }

  vm: this
  data: IData
  [propName: string]: any

  // 这样写会将 initVm 注册到 constructor 中，这样每次实例化的时候都会 生成这个函数，内存占用
  /**
   * 代理 this
   */
  initVm = () => {
    this.vm = new Proxy(this, {
      // 拦截get
      get: (target, key: string) => {
        return target[key] || target.data[key]
      },

      // 拦截set
      // 就是将所用实例化的 set 操作都 reflect 到 this.data 中
      // 但是现在只能将 Mvvm 实例设置为 Proxy
      set: (target, key, value) => {
        return Reflect.set(target.data, key, value)
      }
    })
  }

  /**
   * 代理 data 的所有层级
   */
  initObserve = () => {
    this.data = observe(this.data)
  }
}

const observe = (data: IData) => {
  if (!data || typeof data !== 'object') return data // 如果不是对象直接返回值
  const observe = new Observe() // 对象调用Observe
  return observe.doObserve(data)
}

class Observe {
  dep: Dep
  constructor() {
    this.dep = new Dep() // 订阅类，后面会介绍
  }
  doObserve(data: IData) {
    for (let key in data) {
      data[key] = observe(data[key]) // 递归调用子对象
    }
    return this.proxy(data)
  }
  proxy(data: IData) {
    let dep = this.dep
    return new Proxy(data, {
      get: (target, key, receiver) => {
        return Reflect.get(target, key, receiver)
      },
      set: (target, key, value) => {
        const result = Reflect.set(target, key, observe(value)) // 对于新添加的对象也要进行添加observe
        return result
      }
    })
  }
}

class Dep {
  constructor() {
    this.subs = [] // 定义数组
  }
  subs: any[]
  // 订阅函数
  addSub(sub: any) {
    this.subs.push(sub)
  }
  // 发布函数
  notify() {
    this.subs.filter(item => typeof item !== 'string').forEach(sub=> sub.update())
  }
}