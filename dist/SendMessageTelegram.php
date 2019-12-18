<?php

define('TELEGRAM_TOKEN', '922848846:1027824174:AAH3zfI3g2StZoB-QbG-3CTzPhWMNhNJHA8');

define('TELEGRAM_CHATID', '922848846');




message_to_telegram('Привет!');

function message_to_telegram($text)
{
    $ch = curl_init();
    curl_setopt_array(
        $ch,
        array(
            CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_POSTFIELDS => array(
                'chat_id' => TELEGRAM_CHATID,
                $firstname = $_POST['firstname'],
                $surname = $_POST['surname'],
                $type = $_POST['type'],
                $time = $_POST['time'],
                $money_per_hour = $_POST['money_per_hour'],
                $fullMoney = $_POST['fullMoney'],
                $phone = $_POST['phone'],
                'text' => $text,
            ),
        )
    );
    curl_exec($ch);
}
