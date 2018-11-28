function initMain() {
    var mainElement = document.querySelector("body");
    mainElement.innerHTML = "<div id='contian'></div><div id='top'></div>"

    data.map(createBlog);
    
    window.addEventListener("scroll", topControler)

    var topElement = document.querySelector("#top")
    topElement.addEventListener("click", scrollToTop)
}

function createBlog(value) {
    var controlerElement = document.querySelector("#contian");
    controlerElement.insertAdjacentHTML("beforeend", "<div class='text'>" + value.text + "</div>")
}



function topControler() {
    var topElement = document.querySelector("#top")

    window.scrollY > window.innerHeight
    ? topElement.style.display = "block"
    : topElement.style.display = "none"

    window.clearInterval(scrollToTop)
}

function scrollToTop () {
    var originalPos = window.pageYOffset;
    var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if ( pos > 0 ) {
            window.scrollTo( 0, pos - originalPos/50 ); // 每次循环的步长
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 20);
}
