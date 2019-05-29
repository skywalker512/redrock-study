export default class {
  constructor () {}

  async set (url: string, data?: any) {
    history.pushState(data || {url}, null, url)
  }
}