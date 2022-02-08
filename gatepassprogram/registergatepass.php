<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
</head>
<style>
    body{
        background-color: cornflowerblue;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .gatep{
        background-color: dimgrey;
        color: white;
        width: 400px;
        height: 400px;
        padding: 45px;
        border-radius: 10px;
        text-align: justify;
        margin-left: 500px;
        margin-top: 90px;
    }
    input{

        display: block;
    }
    .button3{
        background-color: silver;
        color: black;
        padding: 5px;
        border-radius: 12px;
    }
    .button3:hover{
        color: bisque;

</style>
<body>
<div class="gatep">
<h3>Gate Pass Registration Form</h3>
<form action="welcomegatepass.php" method="POST">
   <label>First Name</label>
    <input type="text" name="firstname" placeholder="Firstname">
    <br>
    <label> Last Name</label>
    <input type="text" name="lastname" placeholder="Lastname">
    <br>
    <label>Username</label>
    <input type="text" placeholder="Username">
    <br>
    <label>Email Address</label>
    <input type="email" placeholder="Email">
    <br>
    <label>Year of Admission</label>
    <input type="number" placeholder="Year of Admission">
    <br>
    <label>Admission Number</label>
    <input type="number" placeholder="Admission Number">

    <br>
    <input type="submit" class="button3">

</form>



</div>
</body>
</html>
