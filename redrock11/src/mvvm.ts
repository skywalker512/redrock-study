export interface IOptions {
  el: string,
  data: IData,
}

export interface IData {
  [propName: string]: any 
}

export default class {
  constructor(options: IOptions = { el: 'body', data: null }) {
    this.data = options.data
  }
  
  vm: this
  data: IData

  init = (data: IData) => {
    this.vm = new Proxy(this, {
      // 拦截get
      get: (target, key: string, receiver) => {
        return this[key] || this.data[key]
      },
      // 拦截set
      set: (target, key, value) => {
        return Reflect.set(this.data, key, value)
      }
    })
    return this.vm
  }
}