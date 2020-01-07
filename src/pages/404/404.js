import "./404.scss";
import "normalize.css";

let secondSpan = document.getElementsByClassName("second")[0];


window.onload = function(){
    timer(secondSpan);
    

};

function timer(element){
    let second = parseInt(element.textContent);
    setInterval(() => setTime(), 1000);
    setTimeout(() => location.href = "http://anton-ph.com/", 10000);

    function setTime(){
        second = second - 1;
        secondSpan.textContent = second;
        
    }
}


