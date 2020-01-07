import "./contact.scss";
import "../base.scss";
import "normalize.css";
var JSAlert = require("js-alert");

window.onload = function(){
    showSendFormMessage();

};

function showSendFormMessage(){
    if (findGetParameter("m") == "success"){
        document.getElementsByClassName("SendFormMessage")[0].classList = "success SendFormMessage";
        lastSendFormTimeUpdate();
    } else if (findGetParameter("m") == "error"){
        document.getElementsByClassName("SendFormMessage")[0].classList = "error SendFormMessage";
    } else{
        $("#firstname__field").val(localStorage['name']);
        document.getElementsByTagName("select")[0].selectedIndex = localStorage['type'];
        $("#phone").val(localStorage['phone']);
    }
}
function loadfields(){
    $("#firstname__field").val(localStorage['name']);
    document.getElementsByTagName("select")[0].selectedIndex = localStorage['type'];
    document.getElementsByClassName("time")[0].getElementsByTagName("input")[0].value = localStorage['time'];
    $("#money_per_hour").val(localStorage['money_per_hour']);
    $("#fullMoney").val(localStorage['fullMoney']);
    $("#phone").val(localStorage['phone']);
    document.getElementsByTagName("textarea")[0].value =localStorage['message'];
}

function lastSendFormTimeUpdate(){
    var now = new Date();
    let day = now.getDate() + [], 
    month = (now.getMonth() + 1) + [], 
    hour = now.getHours() + [], 
    min = now.getMinutes() + [];
    day.length == 1 ? day = "0" + day : 0;
    month.length == 1 ? month = "0" + month : 0;
    hour.length == 1 ? hour = "0" + hour : 0;
    min.length == 1 ? min = "0" + min : 0;

    let time = day + "." + month + ". " + hour + ":" + min;
    localStorage['lastSendForm'] = time;
}



function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


let time = document.getElementsByClassName("time")[0].getElementsByTagName("input")[0];
let money_per_hour = document.getElementById("money_per_hour");
let fullMoney = document.getElementById("fullMoney");

time.addEventListener("input", function(){
    fullMoney.value = time.value*money_per_hour.value;
});

money_per_hour.addEventListener("input", function(){
    fullMoney.value = time.value*money_per_hour.value;
});
