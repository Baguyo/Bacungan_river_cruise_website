<!-- Thank you for choosing us as your destination kindly reply YES I CONFIRM to confirmed your reservation -->
<?php 
    
    use PHPMailer\PHPMailer\PHPMailer;
    require_once 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();


    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['contact_number']) &&
        isset($_POST['number_of_guest']) && isset($_POST['date_of_arrival']) && isset($_POST['type_of_service'])){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $contact_number = $_POST['contact_number'];
            $number_of_guest = $_POST['number_of_guest'];
            $date_of_arrival = $_POST['date_of_arrival'];
            $type_of_service = $_POST['type_of_service'];

            $message_subject = "Reservation";

            $to = $email;
            $body="";

            
            $body .= "From: ".$name . "<br>";
            $body .= "Email: " . $email . "<br>";
            $body .= "Contact Number: " . $contact_number . "<br>";
            $body .= "Number of guest: " . $number_of_guest . "<br>";
            $body .= "Date of arrival: " . $date_of_arrival . "<br>";
            $body .= "Type of service: " . $type_of_service. "<br>";


            //REQUIRED FILES
            require_once "PHPMailer/PHPMailer.php";
            require_once "PHPMailer/SMTP.php";
            require_once "PHPMailer/Exception.php";
        
            //OBJECT CREATE
            $mail = new PHPMailer();
    
            //SMTP SETTINGS
            $mail->isSMTP();
            $mail->Host = $_ENV['server'];
            $mail->SMTPAuth = true;
            $mail->Username = $_ENV['email'];
            $mail->Password = $_ENV['password'];
            $mail->Port = $_ENV['port'];
            $mail->SMTPSecure = $_ENV['secure'];
        
             //Email settings
            $mail->isHTML(true);
            $mail->setFrom($email, $name);
            $mail->ClearReplyTos();
            $mail->addReplyTo($email, $name);
            // $mail->AddReplyTo($email, $name); // Reply TO
            $mail->addAddress("sancarlosrivercruise@gmail.com");
            $mail->Subject = "$message_subject";
            $mail->Body = $body;


            if($mail->send()){
                $message_subject = "Booking confirmation";
                // $body = "Thank you for choosing us as your destination. Kindly reply YES I CONFIRM to confirm your reservation. ";
                $body = "Thank you for choosing us as your destination. Kindly reply YES I CONFIRM to confirm your reservation.";
                $mail3 = new PHPMailer();
    
                //SMTP SETTINGS
                $mail3->isSMTP();
                $mail3->Host = "smtp.gmail.com";
                $mail3->SMTPAuth = true;
                $mail3->Username = "sancarlosrivercruise@gmail.com";
                $mail3->Password = "SanCarlosRiverCruise";
                $mail3->Port = 587;
                $mail3->SMTPSecure = "tls";
                    
                //Email settings
                $mail3->isHTML(true);
                $mail3->setFrom("sancarlosrivercruise@gmail.com", "San carlos");
                $mail3->ClearReplyTos();
                $mail3->addReplyTo("sancarlosrivercruise@gmail.com", "San carlos");
                // $mail->AddReplyTo($email, $name); // Reply TO
                $mail3->addAddress($email);
                $mail3->Subject = "$message_subject";
                $mail3->Body = $body;
                $mail3->send();
                header("Location: success.html");
            }


    }


    //contact us
    if(isset($_POST['contact_name']) && isset($_POST['contact_email']) && isset($_POST['contact_message'])){
        $contact_name = $_POST['contact_name'];
        $contact_email = $_POST['contact_email'];
        $contact_message = $_POST['contact_message'];

        $message_subject = "INQUIRY";

        $to = $email;
        $body="";

        
        $body .= "From: ".$contact_name . "<br>";
        $body .= "Email: " . $contact_email . "<br>";
        $body .= "Message: " . $contact_message . "<br>";
        


        //REQUIRED FILES
        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";
    
        //OBJECT CREATE
        $mail = new PHPMailer();

        //SMTP SETTINGS
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "sancarlosrivercruise@gmail.com";
        $mail->Password = "SanCarlosRiverCruise";
        $mail->Port = 587;
        $mail->SMTPSecure = "tls";
    
         //Email settings
        $mail->isHTML(true);
        $mail->setFrom($email, $name);
        $mail->ClearReplyTos();
        $mail->addReplyTo($contact_email, $name);
        // $mail->AddReplyTo($email, $name); // Reply TO
        $mail->addAddress("sancarlosrivercruise@gmail.com");
        $mail->Subject = "$message_subject";
        $mail->Body = $body;


        if($mail->send()){
            $message_subject = "San carlos inquiries";
            // $body = "Thank you for choosing us as your destination. Kindly reply YES I CONFIRM to confirm your reservation. ";
            $body = "We already received your inquiries";
            $mail2 = new PHPMailer();

            //SMTP SETTINGS
            $mail2->isSMTP();
            $mail2->Host = "smtp.gmail.com";
            $mail2->SMTPAuth = true;
            $mail2->Username = "sancarlosrivercruise@gmail.com";
            $mail2->Password = "SanCarlosRiverCruise";
            $mail2->Port = 587;
            $mail2->SMTPSecure = "tls";
                
            //Email settings
            $mail2->isHTML(true);
            $mail2->setFrom("sancarlosrivercruise@gmail.com", "San carlos");
            $mail2->ClearReplyTos();
            $mail2->addReplyTo("sancarlosrivercruise@gmail.com", "San carlos");
            // $mail->AddReplyTo($email, $name); // Reply TO
            $mail2->addAddress($contact_email);
            $mail2->Subject = "$message_subject";
            $mail2->Body = $body;
            $mail2->send();
            header("Location: inquire.html");
        }else{
            
        }


}
    
?>