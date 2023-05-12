<?php
    session_start();
    echo session_id();
    if(!isset($_SESSION['logged_user'])){
        header("Location: authorize.php");
        exit;
    }
?>

<p>Привет, <?php echo $_SESSION['logged_user']; ?>, ты на секретной странице!!!</p>