<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Thankyou For Registering</title>
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

</style>
<body>
<div class="gate">
Congratulation <?php echo $_POST["firstname"]; ?> for registering you are now
a registered student/staff of kisii university
</div>
</body>
</html>
