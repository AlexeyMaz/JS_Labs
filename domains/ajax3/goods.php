<?php
$art = $_GET["art"];

if ($art == "1") {
    $product = array(
        "name" => "Товар 1",
        "weight" => "5 кг",
        "cost" => "1000 руб.",
        "img" => "metal_pipe.png"
    );
} elseif ($art == "2") {
    $product = array(
        "name" => "Товар 2",
        "weight" => "0.5 кг",
        "cost" => "200000 руб.",
        "img" => "bell.png"
    );
} else {
    echo "Ошибка: товар не найден!";
    exit();
}

$product_json = json_encode($product);
$product_json_encoded = urlencode($product_json);
$url = "show_product.html?product=$product_json_encoded";
header("Location: $url");
exit();
?>
