window.addEventListener('load', function() {
    navBarBackFill()
})
window.addEventListener("resize", function(){
    var body = document.getElementById('body'),
        menuState = document.getElementById("navMenuBtn");
    navBarBackFill()
    if ((menuState.dataset.state == "open") && (window.innerWidth >= 800)) {
        console.log("k")
        toggleMenu("navMenuBtn")
    }
})
function fadeInElementsTrig(elements, timeOut) {
    var ele = document.getElementsByClassName(elements);
    for (i=0;i<ele.length;i++) {
        fadeInElement(document.getElementById(ele[i].id), (timeOut * (i / 2)))
    }
}
function fadeInElement(element, timeOut) {
    setTimeout(function(){
        element.style.opacity = '1';
    }, timeOut)
}
function navBarBackFill() {
    var navBar = document.getElementById("navBar"),
        navBarBackFiller = document.getElementById("navBarBackFiller");

    navBarBackFiller.style.height = navBar.offsetHeight + "px";
    return navBar.offsetHeight;
}
function toggleMenu(tog) {
    var btn = document.getElementById(tog),
        menu = document.getElementById("navMenuMobile"),
        nmc = document.getElementById("navMenuCover"),
        bd = document.getElementById("body");

    if (btn.dataset.state == "close") {
        btn.style.opacity = "0";
        btn.style.transform = "scale(.95)";
        btn.style.boxShadow = "0px 0px 0px black";
        nmc.style.display = "block";
        setTimeout(function(){
            btn.dataset.state = "open";
            menu.style.transform = "translate3d(0px, 0px, 0px)";
            nmc.style.backgroundColor = "rgba(0, 0, 0, .75)";
            bd.style.overflow = "hidden";
            setTimeout(function() {
                btn.style.opacity = "1";
                btn.style.transform = "scale(1)";
                btn.style.boxShadow = "-5px 5px 10px black";
            }, 350)
        }, 200)
    } else if (btn.dataset.state == "open") {
        menu.style.transform = "translate3d(-100%, 0px, 0px)";
        btn.dataset.state = "close";
        nmc.style.backgroundColor = "transparent";
        bd.style.overflow = "auto";
        setTimeout(function(){
            nmc.style.display = "none"
        }, 200);
    }
}
function menuItemSelection(btn, animateDelay, pageDelay) {
    var item = document.getElementById(btn),
        page = item.dataset.page;
    setTimeout(function(){
        if (item.id.substr(11, 6).toLowerCase() == "mobile") {
            toggleMenu("navMenuBtn")
        }
        JSLink(btn, "external", pageDelay);
    }, animateDelay)
}
function bottomSlide(btn) {
	var btnId = document.getElementById(btn + "Hr");
    btnId.style.transform = "rotateY(0deg)";
    btnId.style.opacity = "1";
	setTimeout( function() {
        btnId.style.transform = "rotateY(180deg)";
        btnId.style.opacity = "0";
	}, 250)
}
function JSLink(btn, IntExt, delay) {
    if (IntExt == 'external') {
        var url = document.getElementById(btn).dataset.page;
        setTimeout( function() {
            window.open(url, "_self")
        }, delay)
    } else if (IntExt == 'newTab') {
        var url = document.getElementById(btn).dataset.page;
        window.open(url)
    } else if (IntExt == 'back') {
        window.history.back()
    } else if (IntExt == 'internal') {
        var location = document.getElementById(btn).dataset.page,
            section = document.getElementById(location).offsetTop - navBarBackFill() - 50;
        setTimeout( function() {
            window.scrollTo(0, section);
        }, delay)
    };

}
function loadYBIMG(imgLoc, destination, num) {
    window.addEventListener('load', function () {
       var location = document.getElementById(destination);
       /*Student Pics*/
       for (i = 1; i <= num; i++) {
           var img = document.createElement('img'),
           imgSrc = imgLoc;
           img.src = imgSrc + i + '_small.jpg';
           img.setAttribute('class', 'ybIMG');
           img.setAttribute('id', 'img' + i);
           img.setAttribute('data-page', imgSrc + i + '.jpg');
           img.setAttribute('onclick', "JSLink(this.id, 'newTab', 0)");
           location.appendChild(img);
        }
        fadeInElementsTrig("ybIMG", 200);
       })
}
