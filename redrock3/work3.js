// https://helloworlderly.github.io/HelloWorld_Blog/2016/07/19/%E5%85%A8%E6%8E%92%E5%88%97%E7%AE%97%E6%B3%95JavaScript%E5%AE%9E%E7%8E%B0/
// 例如输入abc
//       str    str.slice(1)
//       abc    bc   -> stringPermutations -|
//    |- bc     c                <-| 
//    | 
//    |   result = preResult
//    |-> [ 'bc', 'cb' ]          -----------------------------|
//        [ 'abc', 'bac', 'bca', 'acb', 'cab', 'cba' ]       <-| 
function stringPermutations(str) {
    var result = [];
    // 递归底部
    if (str.length == 1) {
        return [str]
    } else {
        var preResult = stringPermutations(str.slice(1));
        // console.log("preResult: " + preResult);
        // console.log("preResult.length: " + preResult.length);
        for (var j = 0; j < preResult.length; j++) {
            // console.log("preResult[j].length: " + preResult[j].length);
            for (var k = 0; k < preResult[j].length + 1; k++) {
                //将首字母插入k位置
                // null + b + c
                // c + b + null
                var temp = preResult[j].slice(0, k) + str[0] + preResult[j].slice(k);
                // console.log("temp: " + temp);
                result.push(temp);
            }
        }
        return result;
    }
}

console.log(stringPermutations("abc"));