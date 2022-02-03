<?php
// if ...statement
$num = 21;
if ($num >12){
    echo "Its less than 50";
}

echo "<br>";

// if.....else...statement
$num1 = 12;
$num2 = 30;

if ($num1 <= $num2){
    echo "its greater";
}
else{
    echo "its not greater";
}

echo "<br>";

//if....elseif....else..statement

$numb = 127;
if ($numb <= 39){
    echo "Fail";
}elseif ($numb >= 40 && $numb <= 59){
    echo "Pass";
}elseif ($numb >= 60 && $numb <= 79){
    echo "Credit";
} else{
    echo "Distinction";
}
