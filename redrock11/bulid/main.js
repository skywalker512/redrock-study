/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/compile.ts":
/*!************************!*\
  !*** ./src/compile.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./mvvm */ \"./src/mvvm.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, mvvm_1) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    class Compile {\r\n        constructor(el, vm) {\r\n            this.vm = vm; // 把传进来的vm 存起来，因为这个vm.a = 1 没毛病\r\n            const element = document.querySelector(el); // 拿到 app 节点\r\n            const fragment = document.createDocumentFragment(); // 创建fragment代码片段\r\n            // 这时这个节点并没有被渲染\r\n            fragment.append(element); // 把app节点 添加到 创建fragment代码片段中\r\n            this.replace(fragment); // 套数据函数\r\n            if (document.body)\r\n                document.body.appendChild(fragment); // 最后添加到body中\r\n        }\r\n        replace(frag) {\r\n            let vm = this.vm; // 拿到之前存起来的vm\r\n            // 循环frag.childNodes\r\n            Array.from(frag.childNodes).forEach((node) => {\r\n                let txt = node.textContent; // 拿到文本 例如：\"开发语言：{{language}}\"\r\n                let reg = /\\{\\{\\s*(.*?)\\s*\\}\\}/g; // 定义匹配正则\r\n                if (node.nodeType === 3 && reg.test(txt)) {\r\n                    // 如果匹配到的话，就替换文本\r\n                    replaceTxt();\r\n                    function replaceTxt() {\r\n                        node.textContent = txt.replace(reg, (matched, placeholder) => {\r\n                            new mvvm_1.Watcher(vm, placeholder, replaceTxt); // 监听变化，进行匹配替换内容\r\n                            return placeholder.split('.').reduce((val, key) => {\r\n                                return val[key];\r\n                            }, vm);\r\n                        });\r\n                    }\r\n                }\r\n                // 如果还有字节点，并且长度不为0 \r\n                if (node.childNodes && node.childNodes.length) {\r\n                    // 直接递归匹配替换\r\n                    this.replace(node);\r\n                }\r\n            });\r\n        }\r\n    }\r\n    exports.default = Compile;\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./src/compile.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./router */ \"./src/router.ts\"), __webpack_require__(/*! ./mvvm */ \"./src/mvvm.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, router_1, mvvm_1) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    const router = new router_1.default();\r\n    const mvvm = new mvvm_1.default({ el: '#app', data: { nameText: 'skywalker', ageText: 20 } });\r\n    const element = {\r\n        nameEle: document.querySelector('#name'),\r\n        ageEle: document.querySelector('#age'),\r\n        canChangeEle: document.querySelector('#can-change')\r\n    };\r\n    const addEventLisnter = () => {\r\n        const { nameEle, ageEle } = element;\r\n        nameEle.addEventListener('click', () => {\r\n            router.set('name');\r\n            handelUrlChange();\r\n        });\r\n        ageEle.addEventListener('click', () => {\r\n            router.set('age');\r\n            handelUrlChange();\r\n        });\r\n        // popstate 是 window 上的事件\r\n        window.addEventListener('popstate', () => {\r\n            handelUrlChange();\r\n        });\r\n    };\r\n    const handelUrlChange = () => {\r\n        makeViewChange(location.pathname.split('/')[location.pathname.split('/').length - 1]);\r\n    };\r\n    const makeViewChange = (path) => {\r\n        const { canChangeEle } = element;\r\n        switch (path) {\r\n            case 'name':\r\n                canChangeEle.innerHTML = `<input id=\"change-name\"  placeholder=\"修改名字\"></input>`;\r\n                document.querySelector('#change-name').addEventListener('keyup', (e) => {\r\n                    const ele = e.target;\r\n                    mvvm.nameText = ele.value;\r\n                });\r\n                break;\r\n            case 'age':\r\n                canChangeEle.innerHTML = `<input id=\"change-age\" placeholder=\"修改年龄\"></input>`;\r\n                document.querySelector('#change-age').addEventListener('keyup', (e) => {\r\n                    const ele = e.target;\r\n                    mvvm.ageText = ele.value;\r\n                });\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n    };\r\n    const onLoad = () => {\r\n        handelUrlChange();\r\n    };\r\n    const init = () => {\r\n        addEventLisnter();\r\n        onLoad();\r\n    };\r\n    init();\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/mvvm.ts":
/*!*********************!*\
  !*** ./src/mvvm.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./compile */ \"./src/compile.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, compile_1) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    class default_1 {\r\n        constructor(options = { el: 'body', data: {} }) {\r\n            // 这样写会将 initVm 注册到 constructor 中，这样每次实例化的时候都会 生成这个函数，内存占用\r\n            /**\r\n             * 代理 this\r\n             */\r\n            this.initVm = () => {\r\n                this.vm = new Proxy(this, {\r\n                    // 拦截get\r\n                    get: (target, key) => {\r\n                        return target[key] || target.data[key];\r\n                    },\r\n                    // 拦截set\r\n                    // 就是将所用实例化的 set 操作都 reflect 到 this.data 中\r\n                    // 但是现在只能将 Mvvm 实例设置为 Proxy\r\n                    set: (target, key, value) => {\r\n                        return Reflect.set(target.data, key, value);\r\n                    }\r\n                });\r\n            };\r\n            /**\r\n             * 代理 data 的所有层级\r\n             */\r\n            this.initObserve = () => {\r\n                this.data = observe(this.data);\r\n            };\r\n            this.data = options.data || {};\r\n            this.initVm();\r\n            this.initObserve();\r\n            new compile_1.default(options.el, this.data);\r\n            // 创建了之后吧 this.vm 也就是 this 被 proxy 的对象传出去 \r\n            return this.vm;\r\n        }\r\n    }\r\n    exports.default = default_1;\r\n    const observe = (data) => {\r\n        if (!data || typeof data !== 'object')\r\n            return data; // 如果不是对象直接返回值\r\n        const observe = new Observe(); // 对象调用Observe\r\n        return observe.doObserve(data);\r\n    };\r\n    class Observe {\r\n        constructor() {\r\n            this.dep = new Dep(); // 订阅类，后面会介绍\r\n        }\r\n        doObserve(data) {\r\n            for (let key in data) {\r\n                data[key] = observe(data[key]); // 递归调用子对象\r\n            }\r\n            return this.proxy(data);\r\n        }\r\n        proxy(data) {\r\n            let dep = this.dep;\r\n            return new Proxy(data, {\r\n                get: (target, key, receiver) => {\r\n                    if ($dep.target) {\r\n                        // 如果之前是push过的，就不用重复push了\r\n                        if (!dep.subs.includes($dep.exp)) {\r\n                            dep.addSub($dep.exp); // 教程里的 bug, 需要将 $dep.exp push 进去, 判断条件\r\n                            // $dep.target 包含 exp, 相应的函数，以及 vm\r\n                            dep.addSub($dep.target); // 把Dep.target push到sub数组里面，订阅\r\n                        }\r\n                    }\r\n                    return Reflect.get(target, key, receiver);\r\n                },\r\n                set: (target, key, value) => {\r\n                    const result = Reflect.set(target, key, observe(value)); // 对于新添加的对象也要进行添加observe\r\n                    dep.notify(); // 通知有东西改变了, notify 就执行相应的函数\r\n                    return result;\r\n                }\r\n            });\r\n        }\r\n    }\r\n    const $dep = { target: null, exp: null };\r\n    class Dep {\r\n        constructor() {\r\n            this.subs = []; // 定义数组\r\n        }\r\n        // 订阅函数\r\n        addSub(sub) {\r\n            this.subs.push(sub);\r\n        }\r\n        // 发布函数\r\n        notify() {\r\n            console.log(this.subs);\r\n            this.subs.filter(item => typeof item !== 'string').forEach(sub => sub.update());\r\n        }\r\n    }\r\n    class Watcher {\r\n        constructor(vm, exp, fn) {\r\n            this.fn = fn; // 传进来的fn\r\n            this.vm = vm; // 传进来的vm\r\n            this.exp = exp; // 传进来的匹配到exp 例如：\"language\"，\"makeUp.one\"\r\n            $dep.exp = exp; // 给Dep类挂载一个exp\r\n            $dep.target = this; // 给Dep类挂载一个watcher对象，跟新的时候就用到了\r\n            let arr = exp.split('.');\r\n            let val = vm;\r\n            arr.forEach(key => {\r\n                val = val[key]; // 获取值，这时候会粗发vm.proxy的get()函数，get()里面就添加addSub订阅函数\r\n            });\r\n            $dep.target = null; // 添加了订阅之后，把Dep.target清空\r\n        }\r\n        update() {\r\n            // 设置值会触发vm.proxy.set函数，然后调用发布的notify，\r\n            // 最后调用update，update里面继续调用this.fn(val)\r\n            let exp = this.exp;\r\n            let arr = exp.split('.');\r\n            let val = this.vm;\r\n            arr.forEach(key => {\r\n                val = val[key];\r\n            });\r\n            this.fn(val);\r\n        }\r\n    }\r\n    exports.Watcher = Watcher;\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./src/mvvm.ts?");

/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    class default_1 {\r\n        constructor() { }\r\n        set(url, data) {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                history.pushState(data || { url }, null, url);\r\n            });\r\n        }\r\n    }\r\n    exports.default = default_1;\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./src/router.ts?");

/***/ })

/******/ });