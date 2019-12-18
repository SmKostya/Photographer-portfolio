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














// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1;
// var yyyy = today.getFullYear();
//  if(dd<10){
//         dd='0'+dd
//     } 
//     if(mm<10){
//         mm='0'+mm
//     } 
// today = yyyy+'-'+mm+'-'+dd;
// let max_day = new Date();
// max_day.setMonth(max_day.getMonth() + 2);

// var dd = max_day.getDate();
// var mm = max_day.getMonth()+1;
// var yyyy = max_day.getFullYear();
// if(dd<10){
//     dd='0'+dd
// } 
// if(mm<10){
//     mm='0'+mm
// } 
// max_day = yyyy+'-'+mm+'-'+dd;
// document.getElementById("datetimeField").setAttribute("min", today);
// document.getElementById("datetimeField").setAttribute("max", max_day);