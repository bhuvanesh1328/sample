<?php
$name=$_POST['username'];
$password =$_POST['email'];
$phone=$_POST['number'];
$con=mysqli_connect("localhost:3306","root","bhuvanesh","dbcon");
$sql="INSERT INTO detail(username,userpassword,phone) VALUES('$name','$password','$phone')";

$result=mysqli_query($con,$sql);

if($result){

    echo "'connected'";
}
else{

    echo "database not connect  ";
}




?>


