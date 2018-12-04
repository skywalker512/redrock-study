function GetXHR() {
    var xhr = null;
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}

function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}

// 参考于 https://github.com/yuzai/ajax-/blob/master/ajax2.js

function Ajax(obj) {
    this.type = obj.type || '';
    this.url = obj.url || '';
    this.data = obj.data || '';
    this.success = obj.success || '';
    this.error = obj.error || '';
}

Ajax.prototype.send = function (type, url, data, success, error) {
    var type = type || this.type;
    var url = url || this.url;
    var data = data || this.data;
    var success = success || this.success;
    var error = error || this.error;

    // 新建ajax请求，兼容IE7以下
    var xhr = GetXHR();

    xhr.onreadystatechange = function () { //注册回调函数
        // http://www.w3school.com.cn/ajax/ajax_xmlhttprequest_onreadystatechange.asp
        // readyState 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
        if (xhr.readyState === 4) {
            switch (xhr.status) {
                case 200:
                    success(decodeUnicode(xhr.responseText));
                    break;
            
                default:
                    error('Oops')
                    break;
            }
            
        } 
    }
    var dataSend = '?';
    for (var key in data) {
        dataSend += key + '=' + data[key];
        dataSend += '&';
    }
    dataSend = dataSend.slice(0, -1); // 去掉最后的 &
    // console.log(dataSend);
    xhr.open(type, url + dataSend, true);
    xhr.send(null);
}

var ajax = new Ajax({
    type: 'get',
    url: 'https://api.tumiv.com/v2/cqupt/student',
    data: {
        page: '2',
        year: '2015',
    },
    success: function (res) {
        console.log(res)
    },
    error: function (res) {
        console.log(res);
    },
});
ajax.send();