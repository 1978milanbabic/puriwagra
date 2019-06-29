<?php

//post method is access
if ($_SERVER["REQUEST_METHOD"] !== "POST" || !(isset($_POST['country'])) || !(isset($_POST['name'])) || !(isset($_POST['phone']))):
    header('HTTP/1.0 403 Forbidden');
    exit();
else:

    function test_input($data) {
        if (strlen($data)>0) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
        }
        return $data;
    }

    $country = test_input($_POST['country']);
    $name = test_input($_POST['name']);
    $phone = test_input($_POST['phone']);

    $mailTxt = "Porudzbina Puriwagra: \r\n\r\n" . "\r\nZemlja: " . $country . "\r\nIme: " . $name . "\r\nTelefon: " . $phone;

    //mail for orders
    
    // mail TO (na koju mejl adresu treba da se salju podaci) !the most important!
    $mejl_adresa = "example@gmail.com";

    $subject = "Narudzbina sa sajta";

    mail($mejl_adresa, $subject, $mailTxt);
    echo 'mailed';


endif;