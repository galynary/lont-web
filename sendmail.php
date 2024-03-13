<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'адреса_електронної_пошти_отримувача@example.com';
    $subject = 'Повідомлення від ' . $name;
    $body = "Ім'я: $name\nЕлектронна адреса: $email\nПовідомлення:\n$message";
    
    if (mail($to, $subject, $body)) {
        echo 'Повідомлення успішно відправлено!';
    } else {
        echo 'Сталася помилка при спробі відправити повідомлення.';
    }
}
?>