<?php
$name=$_POST["bhuvi"];
$email=$_POST["aravind"];
$date=$_POST["ram"];
$number=$_POST["number"];

$con=mysqli_connect("localhost:3306","root","bhuvanesh","connect");
$sql="INSERT INTO  booking(username,email,bdate,phone)VALUES('$name','$email','$date','$number')";
$result= mysqli_query($con,$sql);

if(!$result){

    echo "table booking 👍";
}
else{


    echo"table not booking 😔";
}
?>