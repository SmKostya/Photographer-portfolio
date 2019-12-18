import $ from "jquery";
import "./portfolio.scss";
import "../base.scss";
import "normalize.css";
import Swiper from "swiper";
import 'swiper/css/swiper.css';




$("input").on("click", function(){
    
    if (this.id == "all_types"){
        if(this.checked == true){
            $("input").prop("checked", true);
            $(".categori").show();
        }else{
            $("input").prop("checked", false);
            $(".categori").hide();
        }
    }else{
        if(this.checked == true){
            $("." + this.id).show();
        }else{
            $("." + this.id).hide();
        }
    }

    let inputs = $("input").splice(1);
    let chek_counter = 0;
    for (let k = 0; k<inputs.length; k++){
        if (inputs[k].checked == true){chek_counter += 1}
    }
    if(chek_counter > inputs.length-1){
        $("#all_types").prop("checked", true);
    }else{
        $("#all_types").prop("checked", false);
    }


    let windowHeight = document.documentElement.clientHeight;
    let bodyHeight = document.body.scrollHeight;
    if (bodyHeight + 180 < windowHeight){
        document.getElementsByTagName("footer")[0].classList.add("fixedBottom");
    }else if(document.getElementsByTagName("footer")[0].classList.contains("fixedBottom"))
    {
        document.getElementsByTagName("footer")[0].classList.remove("fixedBottom");
    }
});



document.addEventListener("DOMContentLoaded", function(){
    let hash = window.location.hash.substring(1);
    if (hash != "" && hash.length> 3){
        ajaxLoad(hash);
    }
});

window.addEventListener("hashchange", function(){
    let hash = window.location.hash.substring(1);
    if (hash != "" && hash != undefined){
        ajaxLoad(hash);
    }else{
        window.location.href = "portfolio";
    }
    
});

function ajaxLoad(page){
    $("main").load(page + ".html");
    $(document).ajaxComplete(loadSlider);
}


$("img").on("click", function (e) {
  $("main").load(this.alt + ".html");
  $(document).ajaxComplete(loadSlider);
  location.hash = '#'+this.alt;
});


function loadSlider() {
  let mainSliderSelector = '.main-slider',
        navSliderSelector = '.nav-slider',
        interleaveOffset = 0.5;

        // Main Slider
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

        // Navigation Slider
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

        // Matching sliders
        mainSlider.controller.control = navSlider;
        navSlider.controller.control = mainSlider;
}