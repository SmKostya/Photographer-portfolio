import "./index.scss";
import "../base.scss";
import "normalize.css";
import "../components/parallax.min";






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





