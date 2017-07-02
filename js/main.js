window.addEventListener('load', function() {
    // animate in shortcut buttons and yb image
    setTimeout(function(){
        var ybi = document.getElementById("topYBImg");
        ybi.style.transform = "scale(1)"
        fadeInElement(ybi, 0);
        fadeInElementsTrig("topButton");
    }, 750)

    // sets default topNavButton for use when changing
    prevTopContentBtn = document.getElementById("topNB1");
    prevTopContent = document.getElementById('topButtons')
})
window.addEventListener("resize", function(){
    var body = document.getElementById('body');
    if (body.offsetWidth > 600) {
        changeTopContent("topNB1");
    }
})
var menuOpenDur = 200;
function openMenu(btn) {
    var tog = document.getElementById(btn),
        men = document.getElementById('menu'),
        cov = document.getElementById('pageCover');
    tog.style.boxShadow = "0px 0px 0px black";
    // move tog down and left 5 to give 3d button feel
    tog.style.transform = "translate3d(-5px, 5px, 0px)"
    tog.style.opacity = "0";
    cov.style.display = 'block';
    setTimeout(function(){
        men.style.transform = "translate3d(300px, 0px, 0px)"
        men.style.boxShadow = "5px 0px 15px black";
        setTimeout(function(){
            cov.style.backgroundColor = 'rgba(0, 0, 0, .4)';
        }, 0)
        tog.style.boxShadow = "-5px 5px 10px black";
        tog.style.transform = "translate3d(0px, 0px, 0px)"
        tog.style.opacity = "1";
    }, menuOpenDur)
}
function closeMenu() {
    var men = document.getElementById('menu'),
        cov = document.getElementById('pageCover');
    men.style.transform = "translate3d(0px, 0px, 0px)"
    men.style.boxShadow = "0px 0px 0px black";
    cov.style.backgroundColor = "rgba(0, 0, 0, 0)"
    setTimeout(function(){
        cov.style.display = "none";
    }, menuOpenDur)
}
function fadeInElementsTrig(elements) {
    var ele = document.getElementsByClassName(elements);
    for (i=0;i<ele.length;i++) {
        fadeInElement(document.getElementById(ele[i].id), (350 * (i / 2)))
    }
}
function fadeInElement(element, timeOut) {
    setTimeout(function(){
        element.style.opacity = '1';
    }, timeOut)
}
function changeTopContent(btn) {
    var tb = document.getElementById(btn),
        ptcB = prevTopContentBtn,
        ptc = prevTopContent,
        curSec;
    if (tb != ptcB) {
        tb.style.boxShadow = "0px 0px 10px black";
        tb.style.color = "white";
        tb.style.backgroundColor = "rgba(100, 100, 100, .8";
        ptcB.style.boxShadow = "0px 0px 0px black";
        ptcB.style.color = "black";
        ptcB.style.backgroundColor = "rgba(255, 255, 255, .3)";
        ptc.style.display = 'none';
        if (tb.id == "topNB1") {
            var curSec = document.getElementById("topButtons");
            curSec.style.display = "block";
            ptc = curSec;
        } else if (tb.id == "topNB2") {
            var curSec = document.getElementById("topCover");
            curSec.style.display = "block";
            ptc = curSec;
        } else if (tb.id == "topNB3") {
            var curSec = document.getElementById("topQuotes");
            curSec.style.display = "block";
            ptc = curSec;
        }
        prevTopContentBtn = tb;
        prevTopContent = ptc;
    }
}
