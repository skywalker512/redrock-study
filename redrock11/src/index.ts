import Router from './router'
import Mvvm from './mvvm'

const router = new Router()
const mvvm = new Mvvm({ el: '#app', data: { nameText: 'skywalker', ageText: 20 } })

const element = {
  nameEle: <HTMLButtonElement>document.querySelector('#name'),
  ageEle: <HTMLButtonElement>document.querySelector('#age'),
  canChangeEle: <HTMLDivElement>document.querySelector('#can-change')
}

const addEventLisnter = () => {
  const { nameEle, ageEle } = element

  nameEle.addEventListener('click', ()=>{
    router.set('name')
    handelUrlChange()
  })

  ageEle.addEventListener('click', ()=>{
    router.set('age')
    handelUrlChange()
  })
  // popstate 是 window 上的事件
  window.addEventListener('popstate', ()=> {
    handelUrlChange()
  })
}

const handelUrlChange = () => {
  makeViewChange(location.pathname.replace(/^\//, ''))
}

const makeViewChange = (path: string) => {
  const { canChangeEle } = element
  switch (path) {
    case 'name':
      canChangeEle.innerHTML = `<input id="change-name"  placeholder="修改名字"></input>`
      document.querySelector('#change-name').addEventListener('keyup', (e)=>{
        const ele = <HTMLInputElement>e.target
        mvvm.nameText = ele.value
      })
      break;
    case 'age':
      canChangeEle.innerHTML = `<input id="change-age" placeholder="修改年龄"></input>`
      document.querySelector('#change-age').addEventListener('keyup', (e)=>{
        const ele = <HTMLInputElement>e.target
        mvvm.ageText = ele.value
      })
      break;
    default:
      break;
  }
}

const onLoad = () => {
  handelUrlChange()
}

const init = () => {
  addEventLisnter()
  onLoad()
}

init()