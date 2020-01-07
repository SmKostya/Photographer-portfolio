<?php

$name = $_POST['name'];
$type = $_POST['type'];
$time = $_POST['time'];
$money_per_hour = $_POST['money_per_hour'];
$fullMoney = $_POST['fullMoney'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$token = '1027824174:AAH3zfI3g2StZoB-QbG-3CTzPhWMNhNJHA8';
$chat_id = '-349648037';


$arr = array(
    "Имя пользователя: " => $name,
    "Тип фотосесси: " => $type,
    "Время: " => $time,
    "Стоимость часа фотосессии: " => $money_per_hour,
    "Итоговая сумма: " => $time * $money_per_hour,
    "Телефон: " => $phone,
    "Сообщение: " => $text,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
    header("Location: http://anton-ph.com/");
    return true;
} else {
    header("Location: http://anton-ph.com/contact");
}