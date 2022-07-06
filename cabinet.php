<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>

 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script/ajax.js"></script>
    <script src="./script/logout.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h2>User Page</h2>
    <button id="logout">Log Out</button>
</body>
</html>