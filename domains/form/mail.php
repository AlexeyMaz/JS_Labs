<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $password = generatePassword();
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        savePassword($email, $hashed_password);
        sendPassword($email, $password);
        echo 'Пароль отправлен на указанный email.';
    } else {
        echo 'Неверный формат почты';
    }
}

function generatePassword() {
    $length = 10;
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $password = '';
    for ($i = 0; $i < $length; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $password .= $characters[$index];
    }
    return $password;
}

function savePassword($email, $hashed_password) {
    $file = 'passwords.txt';
    $data = $email . ' : ' . $hashed_password . "\n";
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
}

function sendPassword($email, $password) {
    $subject = 'Ваш новый пароль';
    $message = 'Ваш новый пароль: ' . $password;
    mail($email, $subject, $message);
}
?>

