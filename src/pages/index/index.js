import $ from "jquery";
import "./index.scss";
import "../base.scss";

// $(".title").text("Some Text!!!");

let slider = {
    "pause": false,
    "slides": document.getElementsByClassName("slide"),
    "currentSlide": 0,
};

!slider.pause ? setInterval(nextSlide,5000):{};

function nextSlide() {
    slider.slides[slider.currentSlide].className = 'slide';
    slider.currentSlide = (slider.currentSlide+1) % slider.slides.length;
    slider.slides[slider.currentSlide].className = 'slide showing';
}