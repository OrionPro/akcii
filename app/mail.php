<?php

define('__ROOT__', dirname(__FILE__));
require_once __ROOT__ . '/PHPMailer/class.phpmailer.php';

if ($_POST) {

	$name = $_POST["name"];
	$city = $_POST["city"];
	$phone = $_POST["phone"];
	$textarea = $_POST["textarea"];
	$form_name = $_POST["form_name"];
   

	$images = array();
	$json = array(); // подготовим массив ответа

	$id_form = $_POST['form_type'];
	$json['form_type'] = $id_form;


	 if (isset($_POST['form_name']) and $_POST['form_name'] != "") {
		$form_name = $_POST['form_name'];
		$message .= '
		<h1>Вам сообщение!</h1>
		<div style="font-size: 18px; margin-bottom: 10px">Из формы: ' . '<span style="font-size: 18px"> ' . $form_name . '</span>' . '</div>';
	}

	if (isset($_POST['name']) and $_POST['name'] != "") {
    		$name = $_POST['name'];
    		$message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Имя: ' . $name . '</div>';
    	}

	if (isset($_POST['phone']) and $_POST['phone'] != "") {
        $phone = $_POST['phone'];
        $message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Телефон: ' . $phone . '</div>';
    }

	if (isset($_POST['city']) and $_POST['city'] != "") {
		$name = $_POST['city'];
		$message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Город: ' . $city . '</div>';
	}

	if (isset($_POST['textarea']) and $_POST['textarea'] != "") {
    		$textarea = $_POST['textarea'];
    		$message .= '<div style="font-size: 18px; margin-bottom: 10px; padding-left: 10px">Вопрос: ' . $textarea . '</div>';
    }

	$mailer = new PHPMailer();
	$subject = "Заявка с сайта TradeIn";
	$to = 'orionpro79@gmail.com'; //ставьте свою почту для тестов
 //   $mailer->IsSMTP();
	$mailer->Host = 'smtp.yandex.ru';
	$mailer->Port = 465;
	$mailer->SMTPSecure = "ssl";
	$mailer->SMTPAuth = true;
	$mailer->Username = 'efimenko-i-d@yandex.ua';
	$mailer->Password = 'TabvtyrjBujhm06';
	$mailer->From = 'you@example.com';
	$mailer->FromName = 'Your Name';
	$mailer->CharSet = "UTF-8";
	$mailer->Subject = $subject;
	$mailer->MsgHTML($message);
	$mailer->AddAddress($to);

  

	if ($mailer->Send()) {
		$json['error'] = 0;
	} else {
		$json['error'] = 1;
	}

	echo json_encode($json);
}