function initMain() {
    data.map(createCommentElement)
    var postElement = document.querySelector("#post");
    postElement.addEventListener("click", postClickEvent)

    var bodyElmemet = document.querySelector("body")
    bodyElmemet.addEventListener("click", showTextArae)

    var submitElment = document.querySelector("#submit")
    submitElment.addEventListener("click", pushText)

    var controls = document.querySelectorAll(".controls")
    controls.forEach(function(currentValue){
        currentValue.addEventListener("click", upScore)
    })

    var subcommentEle = document.querySelectorAll(".subcomment")
    subcommentEle.forEach(function(currentValue){
        currentValue.addEventListener("click", createSubcomment)
    })
}

function createCommentElement(currentValue,index){
    if (currentValue.sub === -1){
        var commentElement = document.querySelector("#comment");
        commentElement.insertAdjacentHTML("beforeend", '<div class="articles" data-index="'+index+'">'
        +'<div class="avatar"><img src="https://cdn.v2ex.com/gravatar/'+getMd5()+'?d=retro&amp;s=64" alt="" class="avatar"></div>'
        +'<div class="article">'
            +'<div class="articlecontent">'
                +'<div class="info">'
                    +'<div class="name">'+ currentValue.name +'</div>'
                    +'<div class="data">'+ currentValue.dete +'</div>'
                    +'<div class="ua">'+ currentValue.ua +'</div>'
                    +'<div class="fas fa-quote-right subcomment" data-index="'+index+'"></div>'
                    +'<div class="controls" data-index="'+index+'">'
                        +'<i class="fas fa-thumbs-up" data-index="'+index+'"></i>'
                        +'<span data-index="'+index+'">'+ currentValue.up +'</span>'
                    +'</div>'
                +'</div>'
                +'<div class="content">'+currentValue.content+'</div>'
            +'</div>'
        +'</div>'
        +'</div>');
        commentElement.lastChild.querySelector(".controls").addEventListener("click", upScore);
    }
}


function postClickEvent (event) {
    // 阻止body的点击监听
    event.stopPropagation()
    // 显示输入框
    var showElement = document.querySelector("#show")
    showElement.style.cssText = "display: block"
    var articleContentElement = document.querySelector(".articles.comment.postcomment .articlecontent")
    articleContentElement.style.cssText = "height: 266px !important;"
    // 输入邮箱，并使用 gravatar 做头像
    getUserName()
}


// 点击body关闭输入框
function showTextArae() {
    var showElement = document.querySelectorAll("#show")
    showElement.forEach(function(cur){
        cur.style.cssText = "display: none;"
    })
    var articleContentElement = document.querySelector(".articles.comment.postcomment .articlecontent")
    articleContentElement.style.cssText = "height: 44px !important;"
}

// 提交按钮
function pushText() {
    var msg = document.getElementById('content').value
    if (msg.length>1) {
        data[data.length] = {name:userName, dete:getTime(), ua:getBrowserInfo(), up:0, sub:-1, content:msg,}
        createCommentElement(data[data.length-1], data.length-1)
        document.getElementById('content').value = ""
        }
}

// 获取日期
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

// 获取浏览器
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

// 防止在用户在输入过程中离开网页
window.onbeforeunload = function(e) {
    if(document.getElementById('content').value.length !== 0){
        var dialogText = '请不要关闭网页';
        e.returnValue = dialogText;
        return dialogText;
    }
}

// 使用 gravatar 需要邮箱MD5
function getMd5() {
    var mdStr=''
    if (userName === ""){
        mdStr = "972a36b803d3da31e70252ccfe56e9ce"
    }else{
        mdStr = md5(userName)
    }
    return mdStr
}

function upScore(event) {
    var indexNum = event.target.getAttribute("data-index");
    data[indexNum].up += 1
    var upEle = event.target.parentNode.querySelector("span")
    upEle.innerHTML = data[indexNum].up
}


// function createSubcomment(event) {
//     var subEle = event.target.parentNode.parentNode.parentNode
//     subEle.insertAdjacentHTML("beforeend", '<div class="smallcomment">'
//         +'<div class="articles">'
//             +'<div class="avatar"><img src="https://cdn.v2ex.com/gravatar/972a36b803d3da31e70252ccfe56e9ce?d=retro&amp;s=64" alt="" class="avatar "></div>'
//             +'<div class="article">'
//                 +'<div class="articlecontent">'
//                     +'<div class="info">'
//                         +'<div class="name">houzhenhong</div>'
//                         +'<div class="data">2018-11-29</div>'
//                         +'<div class="ua">Chrome</div>'
//                     +'</div>'
//                     +'<div class="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat voluptates quod expedita quis perspiciatis dolore fuga dolorem quasi, voluptate optio hic laudantium distinctio architecto accusantium officiis nostrum blanditiis suscipit.</div>'
//                 +'</div>'
//             +'</div>'
//         +'</div>'
//         +'</div>')
// }

function createSubcomment(event) {
    getUserName()
    var subEle = event.target.parentNode.parentNode.parentNode
    if (!subEle.innerHTML.includes("smallcomment")){
        subEle.insertAdjacentHTML("beforeend", '<div class="smallcomment">'
        +'<div class="articles">'
            +'<div class="avatar"><img src="https://cdn.v2ex.com/gravatar/'+getMd5()+'?d=retro&amp;s=64" alt="" class="avatar "></div>'
            +'<div class="article">'
                +'<div class="articlecontent">'
                +'<div class="postbody">'
                    +'<textarea name="content" id="content" cols="30" rows="10" autocomplete="off"></textarea>'
                +'</div>'
                +'<div class="postfoot">'
                    +'<input type="submit" name="postreply" value="发表回复" class="submit button" id="subsubmit">'
                +'</div>'
                +'</div>'
            +'</div>'
        +'</div>'
        +'</div>')
    var subSubmitElment = document.querySelector("#subsubmit")
    subSubmitElment.addEventListener("click", subPushText)
    }
}

function getUserName() {
    if (userName.length == 0) {
        userName=prompt("请输入您的邮箱","xxx@xx.com");
        var avatarElement = document.querySelector("#postavatar")
        avatarElement.innerHTML = '<img src="https://cdn.v2ex.com/gravatar/'+getMd5()+'?d=retro&amp;s=64" alt="" class="avatar "></img>'
    }
}

function subPushText(event) {
    var subEle = event.target.parentNode.parentNode.parentNode.parentNode
    var msg = subEle.querySelector('#content').value
    subEle.insertAdjacentHTML("beforebegin", '<div class="smallcomment">'
        +'<div class="articles">'
            +'<div class="avatar"><img src="https://cdn.v2ex.com/gravatar/'+getMd5()+'?d=retro&amp;s=64" alt="" class="avatar "></div>'
            +'<div class="article">'
                +'<div class="articlecontent">'
                    +'<div class="info">'
                        +'<div class="name">'+userName+'</div>'
                        +'<div class="data">'+getTime()+'</div>'
                        +'<div class="ua">'+getBrowserInfo()+'</div>'
                    +'</div>'
                    +'<div class="content">'+msg+'</div>'
                +'</div>'
            +'</div>'
        +'</div>'
        +'</div>')
    subEle.querySelector('#content').value = ""
}