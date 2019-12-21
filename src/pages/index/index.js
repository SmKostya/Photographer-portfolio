import "./index.scss";
import "../base.scss";
import "normalize.css";
import Swiper from "swiper";
import 'swiper/css/swiper.css';
import $ from "jquery";
import "../components/parallax.min";


// var wHeight = $(window).height();

// function parallax() {
//   var pHeight = $(this).outerHeight();
//   var pMiddle = pHeight / 2;
//   var wMiddle = wHeight / 2;
//   var fromTop = $(this).offset().top;
//   var scrolled = $(window).scrollTop();
//   var speed = $(this).attr('data-parallax-speed');
//   var rangeA = (fromTop - wHeight);
//   var rangeB = (fromTop + pHeight);
//   var rangeC = (fromTop - wHeight);
//   var rangeD = (pMiddle + fromTop) - (wMiddle + (wMiddle / 2));

//   if (rangeA < 0) {
//     rangeA = 0;
//     rangeB = wHeight
//   }

//   var percent = (scrolled - rangeA) / (rangeB - rangeA);
//   percent = percent * 100;
//   percent = percent * speed;
//   percent = percent.toFixed(2);

//   var animFromBottom = (scrolled - rangeC) / (rangeD - rangeC);
//   animFromBottom = animFromBottom.toFixed(2);

//   if (animFromBottom >= 1) {
//     animFromBottom = 1;
//   }

//   $(this).css('background-position', 'center ' + percent + '%');
// }
// $('.parallax').each(parallax);
// $(window).scroll(function(e) {
//   $('.parallax').each(parallax);
// });

// $('.parallax-window').parallax({imageSrc: '/img/home/2.jpg'});


window.onscroll = function () {
  // let arrayAnimatedBG = document.getElementsByClassName("blockBG");
  // for (let i = 0; i < arrayAnimatedBG.length; i++){
  //   if (isVisible(arrayAnimatedBG[i])) {
  //     animateBG(arrayAnimatedBG[i], getScroll());
  //   } else{
  //     stopAnimateBG(arrayAnimatedBG[i]);
  //   }
  // }
};
function stopAnimateBG(element){
  element.style.backgroundPosition = "center 0px";
}
function animateBG(element, scrollValue) {
  let root = getComputedStyle(document.querySelector(':root'));
  let responsiveCoefficient = root.getPropertyValue('--responsiveCoefficient');
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

  if (targetPosition.bottom > windowPosition.top &&
    targetPosition.top < windowPosition.bottom){
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





