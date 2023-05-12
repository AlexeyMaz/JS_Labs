<?php
session_start();
$answer10 = $_POST['answer10'];
$_SESSION['answer10'] = $answer10;

$questions = array(
    '1' => array(
        'question' => 'Что такое HTML?',
        'answer' => 'язык разметки',
    ),
    '2' => array(
        'question' => 'Что такое CSS?',
        'answer' => 'язык стилей',
    ),
    '3' => array(
        'question' => 'Что такое JavaScript?',
        'answer' => 'язык программирования',
    ),
    '4' => array(
        'question' => 'Что такое сервер? ',
        'answer' => 'компьютер',
    ),
    '5' => array(
        'question' => 'Что такое клиент?',
        'answer' => 'программа',
    ),
    '6' => array(
        'question' => 'Что такое HTTP? ',
        'answer' => 'протокол передачи данных',
    ),
    '7' => array(
        'question' => 'Что такое URL?',
        'answer' => 'адрес сайта',
    ),
    '8' => array(
        'question' => 'Что такое CMS?',
        'answer' => 'система управления содержимым',
    ),
    '9' => array(
        'question' => 'Что такое AJAX?',
        'answer' => 'технология обмена данными',
    ),
    '10' => array(
        'question' => 'Что такое респонсив дизайн?',
        'answer' => 'адаптивный дизайн',
    ),

);

$num_correct = 0;
$wrong_answers = array();

foreach ($questions as $num => $data) {
    if (isset($_SESSION['answer'.$num]))
    {
        if ($_SESSION['answer'.$num] == $data['answer'])
            $num_correct++;
        else
        {
            $wrong_answers[$num] = array(
                'input' => $_SESSION['answer'.$num],
                'correct' => $data['answer']
            );
        }
    }
    else
    {
        $wrong_answers[$num] = array(
            'input' => 'Ничего не было введено',
            'correct' => $data['answer']
        );
    }
}

echo "<p>Вы ответили правильно на $num_correct из ".count($questions)." вопросов.</p>";

if (!empty($wrong_answers)) {
    echo "<p>Неправильные ответы:</p>";
    foreach ($wrong_answers as $num => $answer) {
        echo "<p>Вопрос $num: Ваш ответ: {$answer['input']}, Правильный ответ: {$answer['correct']}</p>";
    }
}

// очищаем сессию
session_unset();
session_destroy();
?>

