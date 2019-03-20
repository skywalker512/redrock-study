// 参考于 https://github.com/yuzai/ajax-/blob/master/ajax2.js

function Ajax(obj) {
    this.type = obj.type || '';
    this.url = obj.url || '';
    this.data = obj.data || '';
    this.success = obj.success || '';
    this.error = obj.error || '';
    var type = type || this.type;
    var url = url || this.url;
    var data = data || this.data;
    var success = success || this.success;
    var error = error || this.error;

    var dataSend = '?';
    for (var key in data) {
        dataSend += key + '=' + data[key];
        dataSend += '&';
    }
    dataSend = dataSend.slice(0, -1); // 去掉最后的 &

    fetch(url + dataSend, {
        method: type,
    }).then(function (response) {
        // Promise的设计文档中说了，[[PromiseValue]]是个内部变量，外部无法得到，只能在then中获取
        response.json().then(function (result) {
            success(result);
            console.log(this);
        });
    }).catch(function (e) {
        error(e);
    });
}