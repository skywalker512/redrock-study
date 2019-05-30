import Router from './router'
import Mvvm from './mvvm'

const router = new Router()
const mvvm = new Mvvm({ el: '#app', data: { nameText: '姓名' } })

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
      canChangeEle.innerHTML = `<div>name</div>`
      break;
    case 'age':
      canChangeEle.innerHTML = `<div>age</div>`
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