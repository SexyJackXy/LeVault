

<?php
    include("../html/header.html");
    
    $mServer="localhost";
    $mBenutzer = "root";
    $mKennwort = "";
    $mDatenbank = "mydb";

    //Datenbankverbindung herstellen
    $dbVerbindung = mysqli_connect($mServer, $mBenutzer, $mKennwort, $mDatenbank);

    // Charset auf utf8 setzen
    mysqli_set_charset($dbVerbindung, "utf8");

    $username = $_POST['name'] ;
    $username = utf8_encode ($username);
    $email = $_POST['email'];
    $email = utf8_encode ($email);
    $password = $_POST['password'];
    $password = utf8_encode ($password);

    $hash_passwort = password_hash($password, PASSWORD_DEFAULT);

    // SQL-Abfrage ob ein User mit Name, Vorname & E-Mail schon in der Datenbank existiert. 
    $mSQL_check = "SELECT * FROM $mDatenbank.users WHERE email='$email'";
    $db_check = mysqli_query($dbVerbindung, $mSQL_check);  

    if ($db_check->num_rows >= 1) 
    {
        ?>
        <body>
            <div class="">
                <h2> Account existiert bereits</h2>
            </div>
	    </body>
        <?php
    }
    else{
        $mSQL = "INSERT INTO $mDatenbank.users (`email`,`password`,`username`) VALUES ('$email', '$hash_passwort','$username');";                        
        $db_erg = mysqli_query($dbVerbindung, $mSQL); 
    }
?>
