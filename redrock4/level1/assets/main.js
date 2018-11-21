function initMain() {
    var mainElement = document.querySelector("body");
    mainElement.innerHTML = "<div id='control'></div><div id='red-box'></div>";

    data.map(createControler);

    var controlerElement = document.querySelector("#control");
    controlerElement.addEventListener("click", changeRedBoxPosition);

    // left是获取该dom元素的css，所以如果是固定值则带上'px',可读写
    // offsetLeft 是一个只读属性，返回当前元素左上角相对于 HTMLElement.offsetParent 节点的左边界偏移的像素值。
    var redBoxElement = document.querySelector("#red-box");
    redBoxElement.style.left = "8px";
    redBoxElement.style.top = "40px";
}

function createControler(value) {
    var controlerElement = document.querySelector("#control");
    controlerElement.insertAdjacentHTML("beforeend", "<button id=" + value.id + ">" + value.text + "</button>")
}

function changeRedBoxPosition(event) {
    if (event.target.tagName.toLowerCase() === "button") {
        var redBoxElement = document.querySelector("#red-box");
        switch (event.target.getAttribute("id")) {
            case "up":
                if (parseInt(redBoxElement.style.top) > 40) redBoxElement.style.top = parseInt(redBoxElement.style.top) - 100 + "px";
                break;
            case "down":
                if(window.innerHeight > parseInt(redBoxElement.style.top) + document.querySelector("#red-box").offsetHeight + document.querySelector("#control").offsetHeight + 10) redBoxElement.style.top = parseInt(redBoxElement.style.top) + 100 + "px";
                break;
            case "left":
                if (parseInt(redBoxElement.style.left) > 8) redBoxElement.style.left = parseInt(redBoxElement.style.left) - 100 + "px";
                break;
            case "right":
                if(window.innerWidth > parseInt(redBoxElement.style.left) + document.querySelector("#red-box").offsetWidth + 40) redBoxElement.style.left = parseInt(redBoxElement.style.left) + 100 + "px";
                break;

            default:
                break;
        }
    }

}