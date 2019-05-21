function deepCopy3(obj) {
  // hash表，记录所有的对象的引用关系
  let map = new WeakMap();
  function dp(obj) {
      let result = null;
      let keys = Object.keys(obj);
      let key = null,
          temp = null,
          existobj = null;

      existobj = map.get(obj);
      //如果这个对象已经被记录则直接返回
      // 第一次调用是 obj 没有被记录 因为根本还没有 map.set
      // 第二次调用的 时候是 obj.a 没有记录
      // ...
      // 到 obj.c.d.e 调用 dp() 时 obj 是 obj.a 有记录
      // 通过 WeakMap 记录下来了 obj.a 所对应的指针
      if(existobj) {
          return existobj;
      }

      result = {}
      // 第一次将 obj set 到 map 中
      // 第二次将 obj.a 同时将 obj.a 的值记录
      map.set(obj, result);

      for(let i =0,len=keys.length;i<len;i++) {
          key = keys[i];
          // 执行到 obj.c.d.e 时的值为 obj.a 
          temp = obj[key];
          if(temp && typeof temp === 'object') {
              result[key] = dp(temp);
          }else {
              result[key] = temp;
          }
      }
      return result;
  }
  return dp(obj);
}

const obj= {
  a: {
      name: 'a'
  },
  b: {
      name: 'b'
  },
  c: {
    d: {
      e: undefined
    }
  }
};
obj.c.d.e = obj.a;

const copy = deepCopy3(obj);