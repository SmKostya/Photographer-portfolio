import "./portfolio.scss";
import "../base.scss";
import "normalize.css";
import Swiper from "swiper";
import 'swiper/css/swiper.css';



window.ontouchmove = function(){
    clearTimeout(lazyloadThrottleTimeout);
    lazyload();
};
window.onscroll = function(){
    clearTimeout(lazyloadThrottleTimeout);
    lazyload();
};

$("img").on("click", function () {
    ajaxLoad(this.alt);
});

document.addEventListener("DOMContentLoaded", function () {
    $(".filter__back").click();
    loadAjaxPage();


});
window.addEventListener("hashchange", function(){
    let hash = window.location.hash.substring(1);
    if (hash != "" && hash != undefined){
        ajaxLoad(hash);
    }else{
        window.location.href = "http://anton-ph.com/portfolio";
    }
    
});
function loadAjaxPage(){
    let hash = window.location.hash.substring(1);
    if (hash != "" && hash.length> 3){
    ajaxLoad(hash);
    }
}




let css_root = document.querySelector(':root');

$(".filter__show").on("click", function(){
    css_root.style.setProperty('--marginForFilter', '200px');
    $(".filter").addClass("show");
    $(".filter").removeClass("hide");
});
$(".filter__back").parent("li").on("click", function(){
    css_root.style.setProperty('--marginForFilter', '30px');
    $(".filter").addClass("hide");
    $(".filter").removeClass("show");
}); 

$("input").parent("li").on("click", function(){
    clearTimeout(lazyloadThrottleTimeout);
    lazyload();
});





$("input").parent("li").on("click", function(){
    let cheked_counter = 0;
    let clickedChekbox = $(this).find("input");

    if (clickedChekbox.attr("id") == "all_types"){
        if(clickedChekbox.is(":checked")){
            SetAllCheckboxFalse();
        }else{
            SetAllCheckboxTrue();
        }

    }else{
        
        if(clickedChekbox.is(":checked")){
            cheked_counter = -1;
            hidePhotoType(clickedChekbox.attr("id"), "hide");
            
        }else{
            cheked_counter = 1;
            hidePhotoType(clickedChekbox.attr("id"), "show");
        }
        
        if(sumCheckedInputs() == $("input").length - 1){
            $("#all_types").prop("checked", true);
        }else{
            $("#all_types").prop("checked", false);
        }
        clickedChekbox.prop( "checked", !clickedChekbox.is(":checked"));
        footerResponsivePosition(sumCheckedInputs());
        
    }


    function SetAllCheckboxTrue(){
        $("#all_types").prop("checked", true);
        $("input").prop("checked", true);
        $(".categori").show(1000,"swing", 1000);
        document.getElementsByTagName("footer")[0].classList ="";
    }

    function SetAllCheckboxFalse(){
        $("#all_types").prop("checked", false);
        $("input").prop("checked", false);
        $(".categori").hide(1000,"swing", 1000);
        document.getElementsByTagName("footer")[0].classList.add("fixedBottom");
    }

    function hidePhotoType(element_class, action="hide", element_id=false){
        console.log(element_class);
        if (!element_id){
            var object = $("." + element_class);
        }else{
            object = $("#" + element_id);
        }
        if (action == "hide"){
            object.hide(600,"swing", 1000);
        }else if(action == "show"){
            object.show(600,"swing", 1000);
        }
    }

    function sumCheckedInputs(){
        for (let k = 1; k<$("input").length; k++){
            if ($("input").eq(k).is(":checked")){cheked_counter += 1;}
        }
        return cheked_counter;
    }

    function footerResponsivePosition(cheked_counter){
        if(cheked_counter == 0){
            document.getElementsByTagName("footer")[0].classList.add("fixedBottom");
        }else{
            document.getElementsByTagName("footer")[0].classList ="";
        }
        let windowHeight = document.documentElement.clientHeight;
        let bodyHeight = document.body.scrollHeight;
        if (bodyHeight + 180 < windowHeight){
            document.getElementsByTagName("footer")[0].classList.add("fixedBottom");
        }else{
            document.getElementsByTagName("footer")[0].classList ="";
        }
    }

});


let lazyloadImages = document.querySelectorAll("img.lazy");
let lazyloadThrottleTimeout;
function lazyload() {

    if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
        let scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
            if (img.offsetTop - 1000 < (window.innerHeight + scrollTop)+500) {
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



function ajaxLoad(page){
    $("main").load(page + ".html");
    location.hash = '#'+page;
    css_root.style.setProperty('--viewSlider', true);


    $(document).ajaxComplete(function(){
        let mainSliderSelector = '.main-slider',
        navSliderSelector = '.nav-slider',
        interleaveOffset = 0.5;
        let mainSliderOptions = {
            loop: true,
            speed: 1000,
            autoplay: {
            delay: 3000
            },
            loopAdditionalSlides: 10,
            grabCursor: true,
            watchSlidesProgress: true,
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            on: {
            init: function () {
                this.autoplay.stop();
            },
            imagesReady: function () {
                this.el.classList.remove('loading');
                this.autoplay.start();
            },
            slideChangeTransitionEnd: function () {
                let swiper = this,
                captions = swiper.el.querySelectorAll('.caption');
                for (let i = 0; i < captions.length; ++i) {
                captions[i].classList.remove('show');
                }
                swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
            },
            progress: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;

                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                    "translateX(" + innerTranslate + "px)";
                }
            },
            touchStart: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function (speed) {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                    speed + "ms";
                }
            }
            }
        };
        let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
        let navSliderOptions = {
            loop: true,
            loopAdditionalSlides: 10,
            speed: 1000,
            spaceBetween: 5,
            slidesPerView: 5,
            centeredSlides: true,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            direction: 'vertical',
            on: {
            imagesReady: function () {
                this.el.classList.remove('loading');
            },
            click: function () {
                mainSlider.autoplay.stop();
            }
            }
        };
        let navSlider = new Swiper(navSliderSelector, navSliderOptions);
        mainSlider.controller.control = navSlider;
        navSlider.controller.control = mainSlider;
    });
    document.getElementsByTagName("footer")[0].classList.add("fixedBottom");
}
