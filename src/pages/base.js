import "hc-offcanvas-nav/src/scss/hc-offcanvas-nav.scss";
import "hc-offcanvas-nav/src/js/hc-offcanvas-nav.js";
import "hc-offcanvas-nav";

document.addEventListener('DOMContentLoaded', function () {
    footerResponsivePosition();

    lazyload();
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});
jQuery(document).ready(function ($) {
    loadResponseMenu();
    setActivePageInMenu();
    setUrlInHomeLinks();


});

function loadResponseMenu(){
    $('#main-nav').hcOffcanvasNav({
        maxWidth: 815,
        position: 'left',
        pushContent: $(".logo").find("label"),
        insertClose: false,
        levelSpacing: 40,
        navTitle: null,
        navClass: 'menu',
        disableBody: true,
        closeOnClick: true,
        customToggle: null
    });
}
function setActivePageInMenu(){
    let url = location.href.split(/\/+/)[1];
    let pageWithTabs = location.href.split(url +"/")[1];
    let page = pageWithTabs.split("#")[0];
    for (let i = 0; i < $("#main-nav a").length; i++){
      if($("#main-nav a").eq(i).attr("href") == page){
        $("#main-nav a").eq(i).addClass("active");
      }
    }
}

function setUrlInHomeLinks(){
    let css_root = document.querySelector(':root');
    let url = "http://"+location.href.split(/\/+/)[1] + "/";
    css_root.style.setProperty("--sute_url", url);
    $(".footer a").prop("href", url);
    $(".logo label a").prop("href", url);
    $("#main-nav a").eq(0).prop("href", url);
}


function footerResponsivePosition(){
    let windowHeight = document.documentElement.clientHeight;
    let bodyHeight = document.body.scrollHeight;
    if (bodyHeight + 180 < windowHeight) {
        document.getElementsByTagName("footer")[0].classList.add("fixedBottom");
    } else if (document.getElementsByTagName("footer")[0].classList.contains("fixedBottom")) {
        document.getElementsByTagName("footer")[0].classList.remove("fixedBottom");
    }
}

function lazyload() {
    let lazyloadImages = document.querySelectorAll("img.lazy");
    let lazyloadThrottleTimeout;
    if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
        let scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
            if (img.offsetTop - 400 < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            }
        });
        if (lazyloadImages.length == 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
}

