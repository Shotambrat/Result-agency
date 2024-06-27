<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$tg_bot_token = "7274329911:AAGdW7ppyWoVE3n4dby4mIjntK6FstZCeFw";
$chat_id = "-1002166615539";

$text = '';

foreach ($_POST as $key => $val) {
    $decoded_val = urldecode($val);
    $text .= htmlspecialchars($key) . ": " . htmlspecialchars($decoded_val) . "\n";
}

$text .= "\n" . $_SERVER['REMOTE_ADDR'];
$text .= "\n" . date('d.m.y H:i:s');

$param = [
    "chat_id" => $chat_id,
    "text" => $text
];

$url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendMessage?" . http_build_query($param);

$response = file_get_contents($url);

if ($response === false) {
    error_log("Ошибка при отправке сообщения в Telegram");
} else {
    foreach ($_FILES as $file) {
        if (isValidFile($file)) {
            $url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendDocument";

            $unique_filename = uniqid() . "_" . $file['name'];

            move_uploaded_file($file['tmp_name'], $unique_filename);

            $document = new \CURLFile($unique_filename);

            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, ["chat_id" => $chat_id, "document" => $document]);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

            $out = curl_exec($ch);

            curl_close($ch);

            unlink($unique_filename);

            if ($out === false) {
                error_log("Ошибка при отправке файла в Telegram");
            }
        } else {
            error_log("Недопустимый тип или размер файла");
        }
    }
}

die('1');

function isValidFile($file) {
    $allowed_types = ['image/jpeg', 'image/png', 'application/pdf'];
    $max_file_size = 5 * 1024 * 1024;

    return in_array($file['type'], $allowed_types) && $file['size'] <= $max_file_size;
}
?>