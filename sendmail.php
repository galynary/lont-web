<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $tariff = $_POST['tariff'];
    
    $to = 'ryvolodya@gmail.com';
    $subject = 'Повідомлення від ' . $name;
    $body = "Ім'я: $name\nАдреса:  $address\nТелефон:\n$phone\nТариф:\n$tariff";
    
    if (mail($to, $subject, $body)) {
        echo 'Повідомлення успішно відправлено!';
    } else {
        echo 'Сталася помилка при спробі відправити повідомлення.';
    }
}
?>