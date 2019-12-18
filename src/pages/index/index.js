import "./index.scss";
import "../base.scss";
import "normalize.css";
import Swiper from "swiper";
import 'swiper/css/swiper.css';
import $ from "jquery";









window.onscroll = function () {
  let arrayAnimatedBG = document.getElementsByClassName("blockBG");
  for (let i = 0; i < arrayAnimatedBG.length; i++){
    // if (isVisible(arrayAnimatedBG[i])) {
      animateBG(arrayAnimatedBG[i], getScroll());
    // } 
  }
};

function animateBG(element, scrollValue) {
    let coefficient = scrollValue - element.offsetTop;
    element.style.backgroundPosition = "center " + coefficient + "px";
}

function getScroll() {
  return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

function isVisible(target) {
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top-500 &&
    targetPosition.top < windowPosition.bottom-500){
    return true;
  } else {
    return false;
  }
}


$(".photoShoot__types .photoShoot__type").on("click", function(){
  window.location = "/portfolio#" + this.id;
});









[].map.call(document.querySelectorAll('[anim="ripple"]'), el=> {
  el.addEventListener('click',e => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;  el.offsetTop; 
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
  });
});





