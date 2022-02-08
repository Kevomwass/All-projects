<?php
//arrays
$names = array("kelvin","ruth","grace","ciru");
echo count($names);//counting no of item
echo "<br>";
echo $names[1];//selecting item with index 1
echo "<br>";
$names[0] = "benna";
echo "<br>";
echo $names[0];
echo "<br>";
array_push($names,"phelix");
var_dump($names);


//associative array

$nameAge = array("thuo"=> 23, "john"=> 34, "ciku"=>21);
echo "he is " .$nameAge["thuo"];