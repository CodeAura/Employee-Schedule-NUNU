<?php
    $con = mysqli_connect("localhost","root","1234","users");

    if(mysqli_connect_errno()){
        echo "Couldn't connect ".mysqli_connect_error();
    }else{
        //echo "connection successful <br />";
    }

    $uname_tb = $_POST['username'];
    $pass_tb = $_POST['password'];

    $query ="SELECT * FROM user";
    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        if(($row['username'] == $uname_tb) && ($row['password'] == $pass_tb)){
            echo "Login Successful";
            header('Location: /calender/calender.html');
            exit();
        }else{
            echo "You are not in our database".mysqli_connect_error();
        }
    }
    mysqli_close($con);
?>