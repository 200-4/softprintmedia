<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $service = htmlspecialchars($_POST["service"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "kunihirajoshua270@gmail.com"; // Replace with your email
    $subject = "New Quote Request";
    $body = "Name: $name\nEmail: $email\nService: $service\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your request has been sent.";
    } else {
        echo "Sorry, there was an error. Please try again.";
    }
}
?>
