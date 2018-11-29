function initMain() {
    data.map(createCommentElement)
    
    var postElement = document.querySelector("#post");
    postElement.addEventListener("click", postClickEvent);

    var bodyElmemet = document.querySelector("body")
    bodyElmemet.addEventListener("click", showTextArae)

    var submitElment = document.querySelector("#submit")
    submitElment.addEventListener("click", pushText)
}

function createCommentElement(currentValue){
    var commentElement = document.querySelector("#comment");
    commentElement.insertAdjacentHTML("beforeend", '<div class="articles">'
    +'<div class="avatar"><img src="https://cdn.v2ex.com/gravatar/972a36b803d3da31e70252ccfe56e9ce?d=retro&amp;s=64" alt="" class="avatar"></div>'
    +'<div class="article">'
        +'<div class="articlecontent">'
            +'<div class="info">'
                +'<div class="name">'+ currentValue.name +'</div>'
                +'<div class="data">'+ currentValue.dete +'</div>'
                +'<div class="ua">'+ currentValue.ua +'</div>'
            +'</div>'
            +'<div class="content">'+ currentValue.content +'</div>'
        +'</div>'
    +'</div>'
    +'</div>');        
}


function postClickEvent (event) {
    event.stopPropagation()
    var showElement = document.querySelector("#show")
    showElement.style.cssText = "display: block"
    var articleContentElement = document.querySelector(".articles.comment.postcomment .articlecontent")
    articleContentElement.style.cssText = "height: 266px !important;"
    if (userName.length == 0) {
        userName=prompt("请输入您的邮箱","xxx@xx.com");
    }
}

function showTextArae() {
    var showElement = document.querySelector("#show")
    showElement.style.cssText = "display: none;"
    var articleContentElement = document.querySelector(".articles.comment.postcomment .articlecontent")
    articleContentElement.style.cssText = "height: 44px !important;"
}

function pushText() {
    var msg = document.getElementById('content').value
    if (msg.length>1) {
        data[data.length] = {name:userName, dete:getTime(), ua:getBrowserInfo(), content:msg,}
        createCommentElement(data[data.length-1])
        document.getElementById('content').value = ""
    }
}
function getTime() {
    var date = new Date();

    // 获取当前月份
    var nowMonth = date.getMonth() + 1;
    
    // 获取当前是几号
    var strDate = date.getDate();
    
    // 添加分隔符“-”
    var seperator = "-";
    
    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
       nowMonth = "0" + nowMonth;
    }
    
    // 日期进行处理，1-9号在前面添加一个“0”
    if (strDate >= 0 && strDate <= 9) {
       strDate = "0" + strDate;
    }
    
    // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
    var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;

    return nowDate;
    
    // 作者：LeoLeeYEAH
    // 链接：https://www.jianshu.com/p/3415c3aa722d
    // 來源：简书
    // 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
}

function getBrowserInfo(){
    var ua = navigator.appVersion
    if (ua.includes('MSIE')){
        var re ="Internet Explorer";
    }
    if (ua.includes('Safari')){
        var re ="Safari";
        // https://stackoverflow.com/questions/4024230/strange-user-agent-with-google-chrome
        if (ua.includes('Chrome')){
            var re ="Chrome";
        }
    }
    if (ua.includes('Firefox')){
        var re ="Firefox";
    }
    return re
}