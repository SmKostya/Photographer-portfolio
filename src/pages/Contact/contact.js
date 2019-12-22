import "./contact.scss";
import "../base.scss";
import "normalize.css";



let time = document.getElementsByClassName("time")[0].getElementsByTagName("input")[0];
let money_per_hour = document.getElementById("money_per_hour");
let fullMoney = document.getElementById("fullMoney");

time.addEventListener("input", function(){
    fullMoney.value = time.value*money_per_hour.value;
});

money_per_hour.addEventListener("input", function(){
    fullMoney.value = time.value*money_per_hour.value;
});
