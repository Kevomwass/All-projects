<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gate Pass</title>
    <style>
        body{
            background-color: cornflowerblue;
            margin: 0;
            padding: 0;
        }
        h3{
            background-color: silver;
            width: 250px;
            padding: 12px;
            border-radius: 50%;
            color: black;

        }
        .gatep{
            background-color: dimgrey;
            color: white;
            width: 300px;
            height: 200px;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            margin-left: 500px;
            margin-top: 190px;
        }
        #namesinput{
            width: 140px;
            padding: 5px;
        }
        .button1{
            background-color: silver;
            color: black;
            padding: 5px;
            border-radius: 12px;
            margin-right: 32px;
        }
        .button2{
            background-color: silver;
            color: black;
            padding: 5px;
            border-radius: 12px;
        }
        .button1:hover{
            color: bisque;
        }
        .button2:hover{
            color: bisque;
    </style>
</head>
<body>
<div class="gatep">
<h3>Gate Pass Program</h3>


<form action="gatepasscode.php" method="POST">

    <input type="text" name="names" id="namesinput" placeholder="Check your name"><br><br>
    <input type="submit" name="button" class="button1">
    <input type="reset" name="reset" class="button2"> <br>

</form>
</div>
</body>
</html>