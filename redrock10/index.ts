function checkedType(target: any) {
  return Object.prototype.toString.call(target).slice(8, -1)
}
//实现深度克隆---对象/数组
function clone(target: any, parent: { originParent: any, currentParent: any, parent: any } = null) {
  //判断拷贝的数据类型
  //初始化变量result 成为最终克隆的数据
  let result: any, targetType = checkedType(target), $parent = parent
  while ($parent) {
    //如果该字段引用了它的父级，则为循环引用
    // obj1.z
    // 其中 originParent -> obj1 === target
    // currentParent => 现在已经有的 result
    // $parent.parent => null
    if ($parent.originParent === target) {
      // 循环引用返回同级的新对象
      return $parent.currentParent;
    }
    $parent = $parent.parent
  }
  if (targetType === 'Object') {
    result = {}
  } else if (targetType === 'Array') {
    result = []
  } else {
    return target
  }
  //遍历目标数据
  for (let i in target) {
    //获取遍历数据结构的每一项值。
    let value = target[i]
    //判断目标结构里的每一值是否存在对象/数组
    if (checkedType(value) === 'Object' || checkedType(value) === 'Array') { //对象/数组里嵌套了对象/数组
      //继续遍历获取到value值
      result[i] = clone(value, {
        // 递归执行深拷贝，将同级的待拷贝对象与新对象传递给 parent，方便追溯循环引用
        originParent: target,
        currentParent: result,
        parent
      })
    } else { // 获取到value值是基本的数据类型或者是函数。
      result[i] = value;
    }
  }
  return result
}

const obj1 = {
  x: 1,
  y: 2,
  z: undefined
};
obj1.z = obj1;

const obj2 = clone(obj1);
console.log(obj2)
