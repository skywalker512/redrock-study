### 第四周作业

#### todo
- [x] 自动切换
- [ ] 左右切换
- [x] 底部切换
- [x] 鼠标移入停止自动切换，移出开始自动切换
- [ ] 为切换时间展示相应的进度条
- [x] 组件参数
  - [ ] 轮播图张数
  - [ ] 切换时的渐变效果（左右渐变和透明度渐变）
  - [x] 可设置切换时间
- [ ] 卸载的时候清楚监听和定时器
#### 打包

https://github.com/skywalker512/redrock-study/releases/download/work8/dist.zip


#### 装饰器

##### 创建类
web-components 创建类的时候要写许多重复的代码，这时就可以对类进行装饰。
实现参照 https://github.com/geocine/custom-elements-ts/blob/master/src/custom-element.ts

实际创建 customElements 是由装饰器中的 继承的类来创建的，

而继承的装饰器中的类，只需要能够调用父类以及自己的生命周期函数

但是最大的 bug 就是，子父类调用的顺序，所以这里就不能对类的方法使用装饰器了

#### 监听
监听同样也是要写大量重复代码的地方，想要有一种 jq 的监听方式

实现参照 https://github.com/geocine/custom-elements-ts/blob/master/src/listen.ts

在 target 的中管理一个 listener 的列表，这样就可以实现使用装饰器来创建监听函数

同时也可以解决类方法的 this 问题，就不需要 bind 或者箭头方法了

同时也可以很好的在卸载的时候清楚监听

### TS
目前感觉 ts 能够更方便的使用编辑器的代码提示，告诉编辑器这是什么。而且在赋值的时候也能进行检查





