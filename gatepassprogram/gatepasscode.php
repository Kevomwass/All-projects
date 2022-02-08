<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gatepass</title>
</head>
<style>
    body{
        background-color: cornflowerblue;
        margin: 0;
        padding: 0;
    }
    .gate{
        background-color: dimgrey;
        color: white;
        width: 300px;
        height: 200px;
        padding: 15px;
        border-radius: 10px;
        text-align: justify;
        margin-left: 500px;
        margin-top: 190px;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .button1 {
        background-color: silver;
        color: black;
        padding: 5px;
        border-radius: 12px;
        margin-right: 32px;
    }
    .button1:hover {
        color: bisque;
    }
</style>
<body>
<div class="gate">
<?php
$name = $_POST["names"]??"";
$names = array("kelvin","mueni","ochieng","wallace","peter","rose");
//in_array help to check whether the user input name is in the array specified
//in_array should have the name to b searched($name) n the array holding that name($names)
if (in_array("$name", $names)){
    echo "Welcome to kisii university the university of 21st century";
    echo "<br>";
    echo "<br>";
    echo "You are a registered staff/student of kisii university";
}
else{
    echo "You are not a registered staff/student of kisii university ,kindly register";
}
//buttons
?>

<br>
<br>

<button class="button1"><a href="Gatepassform.php">Previous</a></button>
<button class="button1"><a href="registergatepass.php">Register</a></button>
</div>
</body>
</html>