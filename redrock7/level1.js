const arr = [1, 2, 3, 4, 2]
console.log([...new Set(arr)])


const unique = arr => {
  const res = new Map()
  // 返回条件为真的数组元素
  return arr.filter(e => !res.has(e) && res.set(e, 1))
}
console.log(unique(arr))


console.log(arr.map((e, index) => arr.indexOf(e, index + 1) === -1 ? e : null).filter(e => e !== null))