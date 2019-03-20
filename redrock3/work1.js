function dig(obj, target) {
	target in obj
	? console.log(obj[target])
	// values https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values  返回数组中装的对象
	// reduce https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	: Object.values(obj).forEach(function (val) {
		if (typeof val === "object") return dig(val, target)
	})
}

var data = {
	level1: {
		level2: {
			level3: 'some data'
		}
	}
}
dig(data, 'level1') // { level2: {level3: 'some data'} }
dig(data, 'level2') // { level3: 'some data' }
dig(data, 'level3') // 'some data'
dig(data, 'level4') // undefined 是因为在最后的 level4 时 val 不等于 object 所以不返回，即为 undefined